const express = require('express');
const router = express.Router();

const NPCCtrl = require('../controllers/npc');

router.get('/', NPCCtrl.getAllNPC);
router.get('/:id', NPCCtrl.getOneNPC);
router.post('/', NPCCtrl.create);

module.exports = router;