const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
    const { token } = req.body;

    jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, authData) => {
        if(err) {
            console.error(err);
        }
        else {
            res.send(authData);
        }
    });
};