const express = require('express');
const router = express.Router();
const client = require('../../controllers/users/index')
const verifyToken=require('../../middlewares/jwt/index')
router.get('/client',client.getClient)
router.get('/client/getadmins',client.getAdmin)
router.post('/register/client',client.postClient)
router.put('/update/client',client.updateClient)
router.delete('/delete/client/:id', client.deleteClient)
router.post('/login', client.loginClient)
router.post('/verify',verifyToken,client.verifyClient)
router.get('/fetch',client.fetchClient)

module.exports=router