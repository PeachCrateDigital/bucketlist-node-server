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

    describe('User Type', () => {
        const User = UserType.getFields()

        describe('_id field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['_id'])
            })
            it ('should be valid type ID!', () => {
                expect(User._id.type).to.eql(GraphQLNonNull(GraphQLID))
            })
        })

        describe('id field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['id'])
            })
            it ('should be valid type ID!', () => {
                expect(User.id.type).to.eql(GraphQLNonNull(GraphQLID))
            })
        })

        describe('firstName field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['firstName'])
            })
            it ('should be valid type String!', () => {
                expect(User.firstName.type).to.eql(GraphQLNonNull(GraphQLString))
            })
        })

        describe('lastName field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['lastName'])
            })
            it ('should be valid type String!', () => {
                expect(User.lastName.type).to.eql(GraphQLNonNull(GraphQLString))
            })
        })

        describe('email field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['email'])
            })
            it ('should be valid type String!', () => {
                expect(User.email.type).to.eql(GraphQLNonNull(GraphQLString))
            })
        })

        describe('lists field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['lists'])
            })
            it ('should be valid type [List]', () => {
                expect(User.lists.type).to.eql(GraphQLList(ListType))
            })
        })

        describe('newItems field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['newItems'])
            })
            it ('should be valid type [Item]', () => {
                expect(User.newItems.type).to.eql(GraphQLList(ItemType))
            })
        })

        describe('friends field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['friends'])
            })
            it ('should be valid type [User]', () => {
                expect(User.friends.type).to.eql(GraphQLList(UserType))
            })
        })

        describe('friendRequests field', () => {
            it('should exist', () => {
                expect(User).to.include.keys(['friendRequests'])
            })
            it ('should be valid type [FriendRequest]', () => {
                expect(User.friendRequests.type).to.eql(GraphQLList(FriendRequestType))
            })
        })
    })

    describe('List Type', () => {
        const List = ListType.getFields()

        describe('id field', () => {
            it('should exist', () => {
                expect(List).to.include.keys(['id'])
            })
            it ('should be valid type ID!', () => {
                expect(List.id.type).to.eql(GraphQLNonNull(GraphQLID))
            })
        })

        describe('title field', () => {
            it('should exist', () => {
                expect(List).to.include.keys(['title'])
            })
            it ('should be valid type String!', () => {
                expect(List.title.type).to.eql(GraphQLNonNull(GraphQLString))
            })
        })

        describe('items field', () => {
            it('should exist', () => {
                expect(List).to.include.keys(['items'])
            })
            it ('should be valid type [Item]!', () => {
                expect(List.items.type).to.eql(GraphQLList(ItemType))
            })
        })
    })

    describe('Item Type', () => {
        const Item = ItemType.getFields()

        describe('id field', () => {
            it('should exist', () => {
                expect(Item).to.include.keys(['id'])
            })
            it ('should be valid type ID!', () => {
                expect(Item.id.type).to.eql(GraphQLNonNull(GraphQLID))
            })
        })

        describe('from field', () => {
            it('should exist', () => {
                expect(Item).to.include.keys(['from'])
            })
            it ('should be valid type User!', () => {
                expect(Item.from.type).to.eql(GraphQLNonNull(UserType))
            })
        })

        describe('to field', () => {
            it('should exist', () => {
                expect(Item).to.include.keys(['to'])
            })
            it ('should be valid type User', () => {
                expect(Item.to.type).to.eql(UserType)
            })
        })

        describe('message field', () => {
            it('should exist', () => {
                expect(Item).to.include.keys(['message'])
            })
            it ('should be valid type String!', () => {
                expect(Item.message.type).to.eql(GraphQLNonNull(GraphQLString))
            })
        })

        describe('link field', () => {
            it('should exist', () => {
                expect(Item).to.include.keys(['link'])
            })
            it ('should be valid type String!', () => {
                expect(Item.link.type).to.eql(GraphQLString)
            })
        })
    })
});