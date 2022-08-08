require('dotenv').config();

USER_ID="239482"
USER_KEY="foobar"
NODE_ENV="development"

process.env.USER_ID; // "239482"
process.env.USER_KEY; // "foobar"
process.env.NODE_ENV; // "development"