// Test file
"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const speakeasy = require("speakeasy");
var aws = require('aws-sdk'),
    region = "ap-southeast-2",
    secretName = "arn:aws:secretsmanager:ap-southeast-2:463581045171:secret:bot-3TREVf",
    secret,
    decodedBinarySecret;
const TableName = process.env.TABLE_NAME;
const app = express();

//Default configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// AWS variables
var docClient = new aws.DynamoDB.DocumentClient();
//var client = new aws.SecretsManager({ region: region });

exports.handler = async (event, context, callback) => {
    //get information from event body
    let requestBody = JSON.parse(event.body);

    //Check for password variable
    if ("pass" in requestBody)
    {
        let pass = requestBody.pass;
        
        //check if pass is valid
        if(pass == "pass")
        {
            if("user" in requestBody)
            {
                if("token" in requestBody)
                {
                    var params =
                    {
                        user: requestBody.user,
                    }
                    //Find the user in the DB
                    let data = await docClient.get
                    ({
                        TableName,
                        Key: params
                    }).promise().catch(error => 
                    {
                        callback(new Error("Couldn't fetch user."))
                    })
                    
                    //verify the token
                    const verified = speakeasy.totp.verify
                    (
                        {
                            secret: data.Item.secret,
                            encoding: 'base32',
                            token: requestBody.token
                        }
                    )
                    

                        /**
                         * 
                         * don't save the URL, delete as soon as they validate - NEED VERIFY FUNCTION
                         * 
                         * 
                         * 
                         */



                    //If verified, update the DB (removed) and return a successful code
                    if(verified)
                    {
                        /** 
                        //update user params (maybe remove to save operations?)
                        let params =
                        {
                            user: data.user,
                            secret: data.secret,
                            url: data.url
                        }
                        
                        //put back into DB (redundent?)
                        await docClient.put
                        (
                            {
                                TableName,
                                Item: params
                            }
                        ).promise(); */
                            
                        //Return successful status code
                       callback(null,
                            {
                                statusCode: 200,
                                body: JSON.stringify(
                                    {
                                        verified: "true"
                                    }
                                ),
                                headers:
                                {
                                    'Access-Control-Allow-Origin': '*',
                                }
                            }
                        );
                    }
                    //If not verified, return bad status
                    else
                    {
                        callback(null,
                            {
                                statusCode: 200,
                                body: JSON.stringify(
                                    {
                                        verified: "false"
                                    }
                                ),
                                headers:
                                {
                                    'Access-Control-Allow-Origin': '*',
                                }
                            }
                        );
                    }
                }
                else
                {
                    //return bad status for missing token
                    callback(null,
                        {
                            statusCode: 100,
                            body: JSON.stringify(
                                {
                                    token: "null"
                                }
                            ),
                            headers:
                            {
                                'Access-Control-Allow-Origin': '*',
                            }
                        }
                    );
                }
            }
            else
            {
                // return bad status for a missing user
                callback(null,
                    {
                        statusCode: 200,
                        body: JSON.stringify(
                            {
                                user: "null"
                            }
                        ),
                        headers:
                        {
                            'Access-Control-Allow-Origin': '*',
                        }
                    }
                );
            }
        }
        else
        {
            //return bad status code for incorrect pass
            callback(null,
                {
                    statusCode: 200,
                    body: JSON.stringify(
                        {
                            pass: "false"
                        }
                    ),
                    headers:
                    {
                        'Access-Control-Allow-Origin': '*',
                    }
                }
            );
        }
    }
    else
    {
        //Return bad status code for missing password
        callback(null,
            {
                statusCode: 200,
                body: JSON.stringify(
                    {
                        pass: "null"
                    }
                ),
                headers:
                {
                    'Access-Control-Allow-Origin': '*',
                }
            }
        );
    }

};

function sendCallBack(body, status)
{
    callback(null,
        {
            statusCode: status,
            body: JSON.stringify
            (
                body
            ),
            headers:
            {
                'Access-Control-Allow-Origin': '*',
            }
        }
    );
}