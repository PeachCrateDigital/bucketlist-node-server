const expect = require('chai').expect;

const schema = require('../graphql')
const {
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList
} = require('graphql')

const UserType = schema.getType('User')
const ListType = schema.getType('List')
const ItemType = schema.getType('Item')
const FriendRequestType = schema.getType('FriendRequest')

describe('GraphQL Schema', () => {
    const User = UserType.getFields()
    
    describe('User Type', () => {
        describe('_id field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['_id'])
            })
            it ('should be valid type', () => {
                expect(User._id.type).to.eql(GraphQLNonNull(GraphQLID))
            })
        })

        describe('id field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['id'])
            })
            it ('should be valid type', () => {
                expect(User.id.type).to.eql(GraphQLNonNull(GraphQLID))
            })
        })

        describe('firstName field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['firstName'])
            })
            it ('should be valid type', () => {
                expect(User.firstName.type).to.eql(GraphQLNonNull(GraphQLString))
            })
        })

        describe('lastName field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['lastName'])
            })
            it ('should be valid type', () => {
                expect(User.lastName.type).to.eql(GraphQLNonNull(GraphQLString))
            })
        })

        describe('email field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['email'])
            })
            it ('should be valid type', () => {
                expect(User.email.type).to.eql(GraphQLNonNull(GraphQLString))
            })
        })

        describe('lists field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['lists'])
            })
            it ('should be valid type', () => {
                expect(User.lists.type).to.eql(GraphQLList(ListType))
            })
        })

        describe('newItems field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['newItems'])
            })
            it ('should be valid type', () => {
                expect(User.newItems.type).to.eql(GraphQLList(ItemType))
            })
        })

        describe('friends field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['friends'])
            })
            it ('should be valid type', () => {
                expect(User.friends.type).to.eql(GraphQLList(UserType))
            })
        })

        describe('friendRequests field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['friendRequests'])
            })
            it ('should be valid type', () => {
                expect(User.friendRequests.type).to.eql(GraphQLList(FriendRequestType))
            })
        })
    })
});