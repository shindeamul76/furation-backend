const express = require('express');
const router = express.Router();
const { createItem, updateItem, deleteItem, getItem, getAllItems } = require('../controllers/Item');


router.route('/').post( createItem ); // setting route for creating a item POST api

router.route('/:id').put( updateItem ); // setting route for updating a item PUT api

router.route('/:id').delete( deleteItem ); // setting route for deleting a item DELETE api

router.route('/:id').get( getItem ); // setting route for getting a item GET api

router.route('/').get( getAllItems );// setting route for getting  items GET api

module.exports = router;