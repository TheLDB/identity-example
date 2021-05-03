const { Identity } = require('@alleshq/identity'); // Pulls in the Alles Identity SDK
require('dotenv').config(); // Pulls in a package to store secure info in a NodeJS enviorment

module.exports = async(req, res) => {
    const identity = new Identity(process.env.IDENTITY_ID, process.env.IDENTITY_TOKEN); // Provides credentials to the Identity SDK

    await identity.createFlow({
        callback: "http://localhost:8080/callback", // Callback URL/Endpoint that will do whatever you want 
        state: "this is optional" // user state
      }).then(function(url) { // Gets the Promise function 
          res.redirect(url); // Flow URl
      })
}
