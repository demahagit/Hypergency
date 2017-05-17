import {Router} from 'express';
var hospital = require('../model/hospital');

export default() => {
  let api = Router();



api.get('/hospital',hospital.findAll);


//api.get('/hospital/:id', hospitals.findById);
return api;
} 

