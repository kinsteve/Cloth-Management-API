require("dotenv").config();
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const clothRouter = require('./routers/cloth')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json())    //same as body parser better
app.use(userRouter)
app.use(clothRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Cloth = require('./models/cloth')
const User = require('./models/user')

// const main = async () => {
//     // const cloth = await Cloth.findById('5c2e505a3253e18a43e612e6')
//     // await cloth.populate('owner').execPopulate()
//     // console.log(cloth.owner)

//     const user = await User.findById('5c2e4dcb5eac678a23725b5b')
//     await user.populate('cloths').execPopulate()
//     console.log(user.cloths)
// }

// main()