const {AutenticationError } = require('apollo-server-express')
const {User, Product, Category, Order} = require('../models')

const {signToken} = require ('../utils/auth')

const resolvers = { 

    Query: {
        categories: async () => {
            return await Category.find()
            },
        products: async () => {

        },
        product: async () => {

        },
        user: async () => {

        },
        order: async () => {

        },
        checkout: async () => {

        }

    },
    Mutations:{
        addUser: async () => {
            
        },
        addOrder: async () => {
            
        },
        updateUser: async () => {
            
        },
        updateProduct: async () => {
            
        },
        login: async () => {
            
        },
    }

}