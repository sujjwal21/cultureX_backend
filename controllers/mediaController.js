const Media = require('../models/Media');
const multer = require('multer');
const path = require('path');

// Multer setup for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

const uploadMedia = async (req, res) => {
  const { file } = req;
  if (!file) return res.status(400).send('No file uploaded');

  const media = new Media({
    user: req.user._id,
    url: `/uploads/${file.filename}`,
    type: file.mimetype,
  });
  await media.save();

  res.status(200).json({ message: 'Media uploaded successfully', media });
};

const getUserMedia = async (req, res) => {
  const media = await Media.find({ user: req.user._id });
  res.status(200).json(media);
};

module.exports = { uploadMedia, getUserMedia, upload };
