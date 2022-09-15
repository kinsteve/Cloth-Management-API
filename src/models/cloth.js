const mongoose = require('mongoose')

const Cloth = mongoose.model('Cloth', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Cloth