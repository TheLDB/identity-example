# identity-example

A sample program for the Alles Identity SDK

## What does what?

### index.js

- Starts the [Express](https://expressjs.com/) server to listen.

### api/createFlow

- Creates a new flow using the [Alles Identity SDK](https://www.npmjs.com/package/@alleshq/identity)
- Redirects the user to the flow URL to sign in

### api/callback

- Generates JWT from the flow

### api/getTokenValue

- Get the data from the JWT token generated by api/callback
