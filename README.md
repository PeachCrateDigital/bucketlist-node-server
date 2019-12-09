# bucketlist-node-server

# BucketList: Node Server

This server makes our app at [client.bucketlist.group](http://client.bucketlist.group) work. 

## Database

We use MongoDB, hosted at MLab, as the data storage for our application. We use mongoose to create models that our server uses to do CRUD operations on our types of objects:

* Users
* Items
* Lists
* Friend Requests

## Server

We use Node.js as our server. While it is not everyone's favorite backend, you can't argue it is easy, quick, and perfect for fast apps at hackathons and school. It also allowed us to work in a familiar environment and focus on features, not syntax.

## API Layer

Instead of a typical RESTful API, wherein we would need to define a route and handler/controller for every feature we needed, we instead used GraphQL. This allowed us to define complex, strongly typed Types, based on simple, non-standard data. It also allowed the backend to expose all operations via queries and mutations on a single endpoint, which then handled the correct computation. This endpoint can be see if you load the server and use http://localhost:8081/graphql, after passing `graphiql: true` to the GraphQL endpoint.

## Testing

Currently, we have very limited testing, but hope to expand that in the future. We have CircleCI set up to run any and all mocha tests that get added. The only current tests verify that the GraphQL schema does not change, which would break our entire appliation.

## To Run: 

* Clone project
* change the `conf/.sample-env` to `conf/.env`, and add your own vars (port, logging namespaces, mlab uri for mongodb)
* in root of project run: `npm install`
* in root of project run: `npm start`

## To test:
* Clone project
* in root of project run: `npm install`
* in root of project run: `npm test`


## Live Server (GraphQL)

[GraphiQL](http://server.bucketlist.group/graphql)
