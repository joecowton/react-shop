const typesController = require('../controllers').types;
const productsController = require('../controllers').products;


module.exports = (app) => {
  app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Holly Shop API!',
  }));

  app.post('/api/types', typesController.create);
  app.get('/api/types', typesController.list);
  app.get('/api/types/:typeId', typesController.retrieve);
  app.put('/api/types/:typeId', typesController.update);
  app.delete('/api/types/:typeId', typesController.destroy);
  app.post('/api/types/:typeId/products', productsController.create);
  app.put('/api/types/:typeId/products/:productId', productsController.update);
  app.delete(
    '/api/types/:typeId/products/:productId', productsController.destroy
  );


  // For any other request method on products, we're going to return "Method Not Allowed"
  app.all('/api/types/:typeId/products', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};
