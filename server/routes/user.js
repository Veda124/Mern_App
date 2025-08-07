const express = require('express');
const router = express.Router();
const { addUser, getUsers } = require('../controllers/userdata');

router.post('/api/users', addUser);
router.get('/api/users', getUsers);
module.exports = router;