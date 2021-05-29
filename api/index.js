require('dotenv').config()

const multer = require('multer')
const express = require('express')
const Router = express.Router()

const {
  mandarConfirmacion,
  agregarEmail,
  mailContacto,
  mailTrabajo,
  mailTrabajoError
} = require('./lib/mailgun')

const {
  getPublicaciones
} = require('./lib/medium')

const {
  getPublicacionesCasos
} = require('./lib/medium-casos')

const {
  getTraerUsuarios
} = require('./lib/traer-usuarios')


const upload = multer({ limits: { fileSize: 5000000, files: 1 } }) // 1 file 5MB max


Router.get('/traer-usuarios',getTraerUsuarios)
Router.get('/casos', getPublicacionesCasos)
Router.get('/publicaciones', getPublicaciones)
Router.post('/validar-subscripcion', mandarConfirmacion)
Router.get('/subscripcion', agregarEmail)
Router.post('/contacto', mailContacto)
Router.post('/trabajo', upload.single('cv'), mailTrabajo, mailTrabajoError) 

module.exports = Router