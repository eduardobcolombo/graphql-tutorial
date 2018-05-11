const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 4000;

// allow cors-origin requrests
app.use(cors());

mongoose.connect("mongodb://graphql:graphql@ds119930.mlab.com:19930/graphql-learning");
mongoose.connection.once('open', () => {
    console.log('Connected to database!');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});