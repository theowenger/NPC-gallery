require('dotenv').config()
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    console.log(jwt)
    try {
        console.log('requette du token ok')
        if (req.headers.authorization) {
            const [bearer, token] = req.headers.authorization.split(' ');
            console.log(bearer, token)
            if (bearer !== 'Bearer') {
                return res.status(401).json({ message: 'Format de l\'en-tête d\'authentification incorrect' });
            }
            console.log("token l14 " + token)
            const decodedToken = jwt.verify(token, process.env.APP_JWT_KEY);
            const userId = decodedToken.userId;
            console.log("decoded-token" + userId)
            req.auth = {
                userId: userId
            };
            next();
        } else {
            console.log('Pas de headers.autorization !')
            return res.status(401).json({ message: "Pas d'en-tête d'authentification trouvé" });
        }

    } catch (error) {
        res.status(401).json({ error });
        console.log('echec du jeton')
    }
};
