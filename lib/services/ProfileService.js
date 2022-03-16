const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create({ name }) {
    const resp = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const data = await resp.json();
    const profile = await Profile.insert({
      name,
      quote: data[0].quote,
    });
    return profile;
  }
};
