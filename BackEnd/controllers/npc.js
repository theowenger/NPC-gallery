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
        picture: req.body.picture,
        description: req.body.description,
        background: req.body.background,
        objectif: req.body.objectif,
        job: req.body.job,
        quote: req.body.quote,
        fightComportement: req.body.fightComportement,
        equipement: req.body.equipement,
        pnjLink: req.body.pnjLink,
        author: req.body.author,
        creationDate: req.body.creationDate,
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

exports.modify = async (req, res, next) => {
    const NPCObject = { ...req.body };
    const id = req.params.id;
    const foundNPC = await NPC.findById(id);
    if (!foundNPC) {
        return res.status(404).json({ message: "NPC not found" });
    }
    if (foundNPC.author != req.auth.userId) {
        res.status(401).json({ message: 'Not authorized' });
        return;
    }
    NPC.findByIdAndUpdate(id, NPCObject)
        .then(() => res.status(200).json({ message: 'NPC modifié !' }))
        .catch(error => res.status(500).json({ error }));
};

exports.delete = (req, res, next) => {
    NPC.findOne({ _id: req.params.id })
        .then(NPC => {
            if (!NPC) {
                res.status(401).json({ message: 'NPC non trouvé' });
            } else if (NPC.author !== req.body.userId) {
                res.status(401).json({ message: 'Non autorisé' });
            } else {
                NPC.deleteOne()
                    .then(() => { res.status(200).json({ message: "NPC supprimé !" }); })
                    .catch(error => res.status(401).json({ error }));
            }
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};

exports.like = async (req, res, next) => {
    const npc = await NPC.findById(req.params.id);
    if (!npc) return res.status(404).send('PNJ introuvable');

    const index = npc.likedBy.indexOf(req.auth.userId);
    if (index !== -1) {
        npc.likes--;
        npc.likedBy.splice(index, 1);
    } else {
        npc.likes++;
        npc.likedBy.push(req.auth.userId);
    }
    await npc.save();

    res.send(npc);
}