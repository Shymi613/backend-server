const express = require('express');
const router = express.Router();
const {
  createCondition,
  getConditions
} = require('../controllers/conditionsController');

router.post('/', createCondition);
router.get('/', getConditions);

module.exports = router;