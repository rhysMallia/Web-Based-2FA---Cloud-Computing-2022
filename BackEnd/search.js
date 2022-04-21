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
                    console.error(Error);
                })

                //Check if the data exists on the DB
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
                    callback(null,
                        {
                            statusCode: 200,
                            body: JSON.stringify(
                                {
                                    user: "false"
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