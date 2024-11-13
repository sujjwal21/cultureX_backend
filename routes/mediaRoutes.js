const express = require('express');
const { uploadMedia, getUserMedia, upload } = require('../controllers/mediaController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticate, upload.single('file'), uploadMedia);
router.get('/', authenticate, getUserMedia);

module.exports = router;
