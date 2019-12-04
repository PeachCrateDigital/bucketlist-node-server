const fs = require('fs')
const path = require('path')

const chai = require('chai');

const expect = chai.expect;
const url = `http://localhost:3001/`;
const request = require('supertest')(url);

const schema = require('../graphql')

describe('GraphQL', () => {
    // Tests
    console.log(schema)
});