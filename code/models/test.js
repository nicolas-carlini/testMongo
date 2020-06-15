const { Schema, model } = require("mongoose");

const testSchema = new Schema({
  username: String, //Nombre de usuario    --verificacion de estado
  name: String, //Primer nombre
  lastName: String, //Segundo nombre
  email: {
    type: String,
    lowercase: true,
  }, //Email de use  --valicacion de ocupacion, si cumple los minimos y validacion
  isValidEmail: Boolean, //Si el a sido confirmado --validad enviando un email al correspondiente
  password: {
    type: String,
  }, //Contraseña encriptada --encriptado y desencriptado
  avatar: String, //Nombre del archivo usado como avatar --hacer funcion creadora del archivo y destructora
  phone: String, //Numero de telefono    --validacion optativa
  birth: String, //Nacimiento    --informacion util en caso de uso de tarjetas de credito
  licenseType: {
    type: String,
    default: "G",
  }, //Tipo de licencia adquirida    --G gratis, M mensual, A anual, P permanente,A Admin
  paymentType: {
    type: String,
    default: "G",
  }, //Tipo de pago de licencia      --G gratis, T tarjeta, C trato comercial y A admin
  paymentLatest: Date, //Ultimo pago
  isSuperUser: {
    type: Boolean,
    default: false,
  }, //Admin o no
  locate: {
    type: Object,
    default: [],
  }, //Geolocalizacion       --valizacion y macheo con la anterior localizacion optenida
  lastestLocate: {
    type: Object,
    default: [],
  }, //Ultima localizacion
  registrationDate: {
    type: Date,
    default: Date.now(),
  }, //Primera vez que se uso el sitio   --inmutable
  lastLogin: Date,
  groups: Object, //Json que alverga a todos los grupos a los que esta unido --agregar, modificar y eliminar de grupos
  points: {
    type: Number,
    default: 0,
  }, //Cantidad de puntos que tiene el usuario --agregar y sacar puntos
  ip: {
    type: Array,
    default: [],
  },
  accountState: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("Test", testSchema);
