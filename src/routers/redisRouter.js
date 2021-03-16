const express = require('express');

const redisClient = require('../db/redis');

const router = new express.Router();

// const redisClient = require('../db/redis');

// const setString = async (req, res, next) => {
//     try {
//         const data = await redisClient.setAsync(req.body.key, req.body.value);
//         next();
//     } catch (err) {
//         console.log(err);
//     }
// };

// module.exports = {
//     setString
// };

module.exports = router;