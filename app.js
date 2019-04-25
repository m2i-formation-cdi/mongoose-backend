const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require ('bcrypt');

const RestaurantModel = require("./models/restaurants.model");
const UserModel = require("./models/user.model");

const todoRoutes = require("./routes/todo.route");

//Middleware pour la gestion des CORS (permission pour le navigateur d'envoyer une requête à un autre domaine)
app.use(cors());

//Utilisation de bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Importation des routes
app.use("/task", todoRoutes);

app.get("/", (req, res) => {
  let resto = new RestaurantModel({
    name: "Tonio's deli",
    cuisine: "Italian",
    borough: "Queens"
  });

  res.json(resto.save());
});

app.get("/resto/liste", (req, res) => {
  RestaurantModel.find({ cuisine: "Italian", borough: "Bronx" }, "name cuisine", (err, data) => {
    if (err) {
      console.log(err);
      res.json({ err: true, message: "a marche pu" });
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

app.post("/register", (req, res) => {
  let user = new UserModel({
    userName: req.body.userName,
    login: req.body.login,
    password: req.body.password
  });

  user.save(err => {
    if (err) {
      res.json({ success: false, error: err });
    } else {
      console.log(user);
      res.json({ success: true, data: user });
    }
  });
});

app.listen(3000);
