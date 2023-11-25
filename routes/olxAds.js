const express = require('express')
const router = express.Router()
const olxAds = require('../models/olxAds')
const Users = require('../models/user')

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


router.post('/register', async (req, res) => {
    try {
        const credentials = req.body
        const user = new Users(credentials)
        await user.save()

        res.send({
            message: 'User Registered Successfully!'
        })
    } catch (e) {
        res.send({
            message: e
        })
    }
})



router.post('/login', async (req, res) => {
    const { email, password } = req.body
  
    //Step 1: User exists karta hai ya nahi.
    const userExists = await Users.findOne({ email, password })
  
    if (!userExists) {
      res.send({
        message: "User doesn't exist!"
      })
      return
    }
  
    console.log('userExists', userExists)
    console.log('password', password)
  
    //Step 2: Check Password
  
    usersSchema.methods.comparePassword = function (password) {
      const user = this
      bcryptjs.compareSync(password, user.password)
      return bcryptjs.compareSync(password, user.password)
  
      if (!isPasswordCorrect) {
        res.send({
          message: "Invalid Password"
        })
      }
    }
  
  
  
    UsersSchema.methods.generateToken = function () {
      const user = this
      const token = jwt.sign({ _id: user._id, secret })
      return token
    }
    // Step 3: Generate Token
//   const Users = mongoose.model
  
  })

  

module.exports = router