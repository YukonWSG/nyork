const express = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userControllers');
const authenticateToken = require('../middleware/authMiddlewares');

const router = express.Router();


router.get('/get', authenticateToken, getAllUsers);
router.get('/get/:id', authenticateToken, getUserById);
router.post('/create', authenticateToken, createUser);
router.put('/update/:id', authenticateToken, updateUser);
router.delete('/delete/:id', authenticateToken, deleteUser);

module.exports = router;