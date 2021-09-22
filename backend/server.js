import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB()

const app = express()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev')) // setting morgan to run in development mode, dev gives us the HTTP methods and status e.t.c 
}

app.use(express.json()) // allows us to accept JSON data in the body

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) => 
res.send(process.env.PAYPAL_CLIENT_ID ))

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
// if we are in production, we are setting the frontend build to a static folder
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    
    // any route that isn't specified like the ones up there, our API is going to point to index.html in the (/frontend/build) static folder
    app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend','build', 'index.html')))
} else {
    app.get('/', (req,res) => {
        res.send('API is running...')
    }) 
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000


app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))