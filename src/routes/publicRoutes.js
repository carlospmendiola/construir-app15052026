const express = require('express')
const router = express.Router()
const {getIndex, getServicios, getUsusarios, getLogin} = require('../cobntrolers/publicControlers.js')

route.get('/',getIndex)

route.get('/servicios',getServicios)

route.get('/usuarios',getUsusarios)

route.get('/login',getLogin)



module.exports = route