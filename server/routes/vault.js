const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Password = require('../models/password');
const { encrypt, decrypt } = require('../utils/crypto');

function authMiddleware(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ msg: 'No token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json({ msg: 'Invalid token' });
  }
}

router.post('/add', authMiddleware, async (req, res) => {
  try {
    const { siteName, siteUrl, username, password } = req.body;
    const encryptedPassword = encrypt(password);
    const entry = new Password({ userId: req.userId, siteName, siteUrl, username, encryptedPassword });
    await entry.save();
    res.json({ msg: 'Password saved!' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

router.get('/all', authMiddleware, async (req, res) => {
  try {
    const entries = await Password.find({ userId: req.userId });
    const decrypted = entries.map(e => ({
      id: e._id,
      siteName: e.siteName,
      siteUrl: e.siteUrl,
      username: e.username,
      password: decrypt(e.encryptedPassword)
    }));
    res.json(decrypted);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Password.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Deleted!' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
