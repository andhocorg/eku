var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');





// GET Set by setId
// router.get('/set/:_setId', jwtCheck, (req, res) => {
router.get('/set/:_setId', (req, res) => {
  Set.findById(req.params._setId, (err, set) => {
    if (err) {
      return res.status(500).send({message: err.message});
    }
    res.send(set);
  });
});
