const express = require('express')
const Cloth = require('../models/cloth')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/cloths', auth, async (req, res) => {
    const cloth = new Cloth({
        ...req.body,
        owner: req.user._id
    })

    try {
        await cloth.save()
        res.status(201).send(cloth)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/cloths', auth, async (req, res) => {
    try {
        await req.user.populate('cloths').execPopulate()
        res.send(req.user.cloths)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/cloths/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const cloth = await Cloth.findOne({ _id, owner: req.user._id })

        if (!cloth) {
            return res.status(404).send()
        }

        res.send(cloth)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/cloths/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'price']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const cloth = await Cloth.findOne({ _id: req.params.id, owner: req.user._id})

        if (!cloth) {
            return res.status(404).send()
        }

        updates.forEach((update) => cloth[update] = req.body[update])
        await cloth.save()
        res.send(cloth)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/cloths/:id', auth, async (req, res) => {
    try {
        const cloth = await Cloth.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!cloth) {
            res.status(404).send()
        }

        res.send(cloth)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router