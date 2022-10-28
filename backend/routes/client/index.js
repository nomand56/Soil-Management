const express = require('express');
const router = express.Router();
const client = require('../../data/client/index')
const verifyToken=require('../../middlewares/jwt/index')
router.get('/',client.getClient)
router.post('/register/client',client.postClient)
router.put('/update/client',client.updateClient)
router.delete('/delete/client/:id', client.deleteClient)
router.post('/login', client.loginClient)


module.exports=router