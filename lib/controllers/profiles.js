const { Router } = require('express');
const Profile = require('../models/Profile');
const ProfileService = require('../services/ProfileService');

module.exports = Router()
  // api/v1/users
  .post('/', async (req, res, next) => {
    try {
      const profile = await ProfileService.create(req.body);
      res.send(profile);
    } catch (error) {
      next(error);
    }
  });
