const express = require("express");
const router = express.Router();
const Ads = require('../models/Ads')

//localhost:3000/ads

router.get('/', async (req, res) => {
    //get data from db
    try {
        const ads = await Ads.find({}).limit(10)

        res.send({
            message: 'data fetched successfully',
            data: ads
        })
    }

    catch (e) {
        res.send({
            message: e
        })
    }
})
//localhost:3000/ads/addData

router.post('/addData', async (req, res) => {
    //add data into db
    try {
        const ad = new Ads(req.body)
        await ad.save()
        res.send({
            message: 'data added successfully'
        })
    }

    catch (e) {
        res.send({
            message: e
        })
    }
})

//localhost:3000/ads/updateData
router.put('/updateData', (req, res) => [
    //update data into db
    res.send({
        message: 'data updated successfully'
    })
])

//localhost:3000/ads/deleteData
router.delete('/deleteData', (req, res) => [
    //delete data from db
    res.send({
        message: 'data deleted successfully'
    })
])

module.exports = router