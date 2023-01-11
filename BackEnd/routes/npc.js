const express = require('express');
const router = express.Router();

const NPCCtrl = require('../controllers/npc');
const auth = require('../middleware/auth.js');

router.get('/', NPCCtrl.getAllNPC);
router.get('/:id', NPCCtrl.getOneNPC);
router.post('/', auth, NPCCtrl.create);

module.exports = router;