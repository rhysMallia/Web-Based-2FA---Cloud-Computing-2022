//"use strict";
//imports and static variables
//const XMLHttpRequest = require('xhr2');
//const xhr = new XMLHttpRequest();
const axios = require('axios').default;

// Constants (TODO MAKE THIS NOT BAD!)
const reg = "https://fyn3utzg51.execute-api.ap-southeast-2.amazonaws.com/dev/register";
//const ver = "https://kzdunc20l8.execute-api.ap-southeast-2.amazonaws.com/dev/verify";
const sea = "https://fyn3utzg51.execute-api.ap-southeast-2.amazonaws.com/dev/search";
const pass = "pass"

/** 
//constant xhr header information
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

//constant state change information
let result = "";
xhr.onreadystatechange = function()
{
    if(xhr.readyState == 4)
    {
        result = xhr.responseText;
        console.log(xhr.responseText);
    }
} */

/**
 * This function accepts a UUID to register it to the DB, this will return a secret and a URL in a JSON object
 * @param {String} uuid 
 */
async function register(uuid)
{
    //set up data in object literal
    let data = 
    {
        "user": uuid,
        "pass": pass
    };

    try
    {
        const response = await axios.post(reg, data);
        console.log(response.data);
        return response.data;
    }
    catch(error)
    {
        console.error(error);
        return null;
    }
}

/**
 * This function takes a UUID and a token, and returns either true or false
 * @param {String} uuid 
 * @param {String} token 

async function verify(uuid, token)
{
    //set up data in object literal
    let data =
    {
        "user": uuid,
        "pass": pass,
        "token": token
    };

    try
    {
        const response = await axios.post(ver, data);
        console.log(response.data);
        return response.data;
    }
    catch(error)
    {
        console.error(error);
        return null;
    }

    /** 
    //send POST via axios
    axios.post(ver, data)
    .then(function(response)
    {
        console.log(response.data);
        return response.data;
    })
    .catch(function (error)
    {
        console.log(error);
        return null;
    }
    ); 
}   */


/**
 * This function takes a UUID and removes it from the database, as well as delete the associated QR from the DB
 * @param {String} uuid 
 
async function remove(uuid)
{
    let data =
    {
        "user": uuid,
        "pass": pass
    }

    //send POST via axios
    axios.post(rem, data)
    .then(function(response)
    {
        console.log(response.data);
        return response.data;
    })
    .catch(function (error)
    {
        console.log(error);
        return null;
    }
    );
}*/

//Search the database for the user to check for registration and verification functions
async function search(uuid)
{
    let data =
    {
        "user": uuid,
        "pass": pass
    }

    let check;

    new Promise((resolve, reject) =>
    {
        axios.post(sea, data)
        .then(function(response)
        {
        //console.log(response.data);
        //console.log(response.data.user)
        //return response.data;
            if(response.data.user === 'null')
            {
                check = false;
            }
            else
            {
                check = true;
            }
        })
        .catch(function (error)
        {
        console.log(error);
        return null;
        }
        );
    }).then((response) => 
    {
        console.log(response);
        return check;
    });
}

//export module for other modules to use
module.exports = {register, search};