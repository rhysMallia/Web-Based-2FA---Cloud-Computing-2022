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
            if("user" in requestBody && "token" in requestBody)
            {

                    
                        /**
                         * 
                         * don't save the URL, delete as soon as they validate
                         * 
                         * 
                         * 
                         */
            }
            else
            {
                //return status code for missing user or missing token
            }
        }
        else
        {
            //return status code for incorrect pass
        }
    }
    else
    {
        //return status code for missing pass
    }