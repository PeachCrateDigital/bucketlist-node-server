const fs = require('fs')
const path = require('path')

const chai = require('chai');

const expect = chai.expect;
const url = `http://localhost:3001/`;
const request = require('supertest')(url);

const {typeDefs} = require('../graphql')
const 

describe('GraphQL', () => {
    // Tests
    console.log(typeDefs)
});