import express from 'express';
import config from '../config';
//import middleware from '../middleware';
//import initializeDb from '../db';
//import findhospital from '../controller/findhospital'

var hospital = require('../model/hospital');


let router = express();

router.get('/', function (req, res) {
  res.send('hello world')
})
 
router.get('/hospital',hospital.findAll);




//router.use(findhospital());




//connect to database
/* initializeDb(db => {

  //internal middleware
  router.use(middleware({config, db}));
  //api routers v1 (/v1)

  router.use('/foodtruck', foodtruck({config, db}));
}) */

export default router; 