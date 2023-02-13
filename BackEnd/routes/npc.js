const express = require('express');
const router = express.Router();

const NPCCtrl = require('../controllers/npc');
const auth = require('../middleware/auth.js');

router.get('/', NPCCtrl.getAllNPC);
router.get('/:id', NPCCtrl.getOneNPC);

//Route to create, modify and delete NPC
router.post('/', auth, NPCCtrl.create);
router.put('/modify/:id', auth, NPCCtrl.modify);
router.delete('/delete/:id', auth, NPCCtrl.delete);


//Route to like and dislike NPC:
router.post('/like/:id', auth, NPCCtrl.like);
router.put('/like/:id', auth, NPCCtrl.dislike)

module.exports = router;