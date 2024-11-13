const express = require('express');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const mediaRoutes = require('./routes/mediaRoutes');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  // Find or create user logic
  return done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google', {
  failureRedirect: '/'
}), (req, res) => {
  res.redirect('/'); // Redirect to the frontend or dashboard
});

app.use('/media', mediaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
