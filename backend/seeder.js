// this seeder.js is not going to be part of our application in any way. It is just a separate script that we can run to import data
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        // clearing all the three collections completely
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        // importing the users
        const createdUsers = await User.insertMany(users)

        // getting the admin user from the createdUsers array
        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return { ...product, user:adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log('Data imported!'.green.inverse)
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
        proocess.exit(1)
    }
}


const destroyData = async () => {
    try {
        // clearing all the three collections completely
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
        proocess.exit(1)
    }
}


if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}

