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
                //check if the user is already present in the database
                var params = 
                {
                    user: requestBody.user
                }
                
                //Find the user in the DB
                let data = await docClient.get
                ({
                    TableName,
                    Key: params
                }).promise().catch(error => 
                {
                    console.error(Error);
                })
                if( typeof data.Item !== 'undefined' && data.Item)
                {
                    callback(null,
                        {
                            statusCode: 200,
                            body: JSON.stringify(
                                {
                                    user: "true"
                                }
                            ),
                            headers:
                            {
                                'Access-Control-Allow-Origin': '*',
                            }
                        }
                    );
                }
                else
                {
                    //if user was not found in the DB
                    let temp_secret = speakeasy.generateSecret();
                    //Generate the database entry
                    var params =
                    {
                        user: requestBody.user,
                        secret: temp_secret.base32,
                        url: temp_secret.otpauth_url
                    }
                    //Put into the DB
                    await docClient.put
                    ({
                        TableName,
                        Item: params
                    }).promise();
                    //Send the user ID and Base32 back to the user
                    callback(null,
                        {
                            statusCode: 200,
                            body: JSON.stringify(
                                {
                                    secret: temp_secret.base32,
                                    url: temp_secret.otpauth_url
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
                //return bad status for missing user
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
            //return bad status for incorrect password
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
        //Return bad status for missing passcode
        //let body = {pass: "null"}
        //sendCallBack(body, 200);
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