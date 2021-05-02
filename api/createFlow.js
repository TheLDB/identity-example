const { Identity } = require('@alleshq/identity');
require('dotenv').config();

module.exports = async(req, res) => {
    const identity = new Identity(process.env.IDENTITY_ID, process.env.IDENTITY_TOKEN)

    console.log(process.env.IDENTITY_ID);
    console.log(process.env.IDENTITY_TOKEN);
    await identity.createFlow({
        callback: "http://localhost:8080/callback",
        state: "this is optional"
      }).then(function(url) {
          res.redirect(url);
      })
}