const NPC = require('../models/npc');

exports.getAllNPC = (req, res, next) => {
    NPC.find()
        .then(NPC => res.status(200).json(NPC))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneNPC = (req, res, next) => {
    console.log(req.params);
    NPC.findOne({ _id: req.params.id })
        .then(NPC => {
            console.log(NPC)
            res.status(200).json(NPC)
        })
        .catch(error => res.status(400).json({ error }));
};

exports.create = (req, res, next) => {
    const npc = new NPC({
        name: req.body.name,
        univers: req.body.univers,
        race: req.body.race,
        sexe: req.body.sexe,
        age: req.body.age,
        poids: req.body.poids,
        taille: req.body.taille,
        description: req.body.description,
        background: req.body.background,
        statistiques: {
            for: req.body.statistiques.for,
            dex: req.body.statistiques.dex,
            vig: req.body.statistiques.vig,
            int: req.body.statistiques.int,
            sag: req.body.statistiques.sag,
            cha: req.body.statistiques.cha
        }
    });


    console.log(npc)
    npc.save()
        .then(() => { res.status(201).json({ message: 'npc enregistré !' }) })
        .catch(error => { res.status(400).json({ error: "probleme" }) })
}