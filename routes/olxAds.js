const express = require('express')
const router = express.Router()
const olxAds = require('../models/olxAds')


router.get('/', async (req, res) => {

    try {
        const olx = await olxAds.find({})

        res.send({
            message: 'data fetched successfully',
            data: olx
        })
    }
    catch (e) {
        res.send({
            message: e
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const olx = await olxAds.findOne({ _id: req.params.id });

        if (!olx) {
            return res.status(404).send({
                message: 'Item not found'
            });
        }

        res.status(200).send({
            message: 'Data fetched successfully',
            data: olx
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({
            message: 'Internal Server Error'
        });
    }
});

router.post('/addData', async (req, res) => {
    try {
        const olxAd = new olxAds(req.body)
        const data = await olxAd.save()
        res.send({
            message: 'Data added successfully',
            data
        })
    }

    catch (e) {
        res.send({
            message: e
        })
    }
})


// router.put('/updateData', async (req, res) => {
//     try {
//       const { _id } = req.body
//       const data = await olxAds.findOneAndUpdate({ _id: _id }, req.body);

//       res.send({
//         message: 'data updated successfully',
//         data
//       }) 
//     } catch(e) {
//       res.send({
//         message: e
//       }) 
//     }
//   })


// router.delete('/deleteData/:id', (req, res) => {
//delete data from db
//req.params.id

//   res.send({
//     message: 'data deleted successfully'
//   })
// })


module.exports = router