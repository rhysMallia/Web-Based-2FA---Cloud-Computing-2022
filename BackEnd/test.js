// Test file
"use strict";

//const serverless = require('serverless-http');
const express = require('express');
const { request } = require('http');
const secretManager = require('secretManager');
//const bodyParser = require('body-parser');
//const speakeasy = require("speakeasy");

var aws = require('aws-sdk'),
    region = "ap-southeast-2",
    secretName = "arn:aws:secretsmanager:ap-southeast-2:463581045171:secret:bot-3TREVf",
    secret,
    decodedBinarySecret;
    
const docClient = new aws.DynamoDB.DocumentClient();
const app = express();
const TableName = process.env.TABLE_NAME;

//Default configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const client = new aws.SecretsManager({ 
    region: region,
 });
//
module.exports.handler = async (event, context, callback) => {
    let requestBody = JSON.parse(event.body);
    //let user = requestBody.user;
    //let secret = requestBody.secret;
    let test = "nothing";
    if("user" in requestBody)
    {
        test = requestBody.user;
        let item = {
            user: requestBody.user,
            //secret: requestBody.user,
        }
        await docClient.put({
            TableName,
            Item: item,
        }).promise();
    }
    callback(null, 
    {
        statusCode: 201,
        body: JSON.stringify(
            {
                working: "hello?",
                test: requestBody,
                check: test
            }
        ),
        headers:
        {
            'Access-Control-Allow-Origin': '*',
        },
    });
};

async function returnSecret()
{
    let holder = await secretManager.secretManager.getSecretValue(secretName);
    return holder
}

module.exports.secretManager = async (secretName) => {
    client.getSecretValue({SecretId: secretName}, function(err, data) {
        if (err) {
            if (err.code === 'DecryptionFailureException')
                // Secrets Manager can't decrypt the protected secret text using the provided KMS key.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
            else if (err.code === 'InternalServiceErrorException')
                // An error occurred on the server side.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
            else if (err.code === 'InvalidParameterException')
                // You provided an invalid value for a parameter.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
            else if (err.code === 'InvalidRequestException')
                // You provided a parameter value that is not valid for the current state of the resource.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
            else if (err.code === 'ResourceNotFoundException')
                // We can't find the resource that you asked for.
                // Deal with the exception here, and/or rethrow at your discretion.
                throw err;
        }
        else {
            // Decrypts secret using the associated KMS key.
            // Depending on whether the secret is a string or binary, one of these fields will be populated.
            if ('SecretString' in data) {
                secret = data.SecretString;
                return secret;
            } else {
                let buff = new Buffer(data.SecretBinary, 'base64');
                decodedBinarySecret = buff.toString('ascii');
                return decodedBinarySecret;
            }
        }
        
        // Your code goes here. 
    });
}
