# identity-example
A sample program for the Alles Identity SDK

## What does what?
### index.js
- Starts the [Express](https://expressjs.com/) server to listen. 

### api/createFlow
- Creates a new flow using the [Alles Identity SDK](https://www.npmjs.com/package/@alleshq/identity)
- Redirects the user to the flow URL to sign in

### api/callback
- This file can be used to send a confirmation to your server that the user signed in, or just to display some info. Really whatever you want
