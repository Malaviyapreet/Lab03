var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // test
  res.render('index', { title: 'Foobar' });
});

const persons = [
  {
    route: 'Preet',
    name: 'Preet Malaviya',
    age: 20,
    cityBorn: 'Surat',
    cityResiding: 'Katargam',
    hobby: 'playing laga gotta.'
  },
  {
    route: 'adi',
    name: 'adi pandey',
    age: 20,
    cityBorn: 'amdavd',
    cityResiding: 'Ranip',
    hobby: 'lagoti king'
  },
  {
    route: 'Jigga',
    name: 'Jignesh angabanga',
    age: 23,
    cityBorn: 'Kerela',
    cityResiding: 'pudipoo',
    hobby: ' criket'
  }
];

router.get('/:route', (req, res, next) => {
  // Find the person where their route string equals the route parameter
  const person = persons.find(per => per.route === req.params.route);

  // if no person - render the error page
  if (!person) return next(new Error('Cannot find person'));

  // Res.render - renders a view from our views folder.
  // Pass the person we found in the array above
  return res.render('person', person);
});









module.exports = router;
