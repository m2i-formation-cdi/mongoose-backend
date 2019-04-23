//Importation de la bibliothèque Mongoose
const mongoose = require('mongoose');

//Connexion à la base de données
mongoose.connect('mongodb://localhost/formation', {useNewUrlParser: true});

//Récupération d'une instance de Schema
const Schema = mongoose.Schema;

//Définition d'un schéma pour les restaurants
const restaurantSchema = new Schema(
   {
      name: String,
      cuisine: String,
      borough: String
   }
);

//Création d'un Model à partir du schéma
const RestaurantModel = mongoose.model('primer-datas', restaurantSchema);
 
//Exportation du modèle
module.exports = RestaurantModel;