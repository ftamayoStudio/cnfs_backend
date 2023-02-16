const app = require("./app/app");
const db = require("./config/db")

const { createDBs } = require('./model/index')


try {
    // db.authenticate();
    // createDBs();
    console.log("Connexion réussie à la base de données")

} catch (error) {
    console.error(error)
}

const port = process.env.PORT || 3001;


app.listen(port, () => {
    console.log(`---------- server running on port ${port}`);
});

//DB CONNECTION