import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Gerald Koech',
        email: 'gerald@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Denis Kibet',
        email: 'Denis@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users