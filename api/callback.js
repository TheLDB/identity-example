const { Identity } = require('@alleshq/identity');
const { json } = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports = async(req, res) => {
    const identity = new Identity(process.env.IDENTITY_ID, process.env.IDENTITY_TOKEN)
    const profile = await identity.getProfile(req.query.code);
    
    jwt.sign({profile}, process.env.JWT_SECRET_TOKEN, {expiresIn:'7d'}, async(err, token) => {
        if(err) {
            res.send(err);
            console.err(err);
        }
        else {

            const user = {
                user: {
                    jwtToken: token
                }
            };

            res.send(user);
        }   
    })
}