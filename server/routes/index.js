const categoriesController = require('../controllers').categories;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Holly Shop API!',
  }));

  app.post('/api/categories', categoriesController.create);
  app.get('/api/categories', categoriesController.list);
  app.get('/api/categories/:categoryId', categoriesController.retrieve);
  app.put('/api/categories/:categoryId', categoriesController.update);
  app.delete('/api/categories/:categoryId', categoriesController.destroy);
  app.post('/api/categories/:categoryId/items', todoItemsController.create);
  app.put('/api/categories/:categoryId/items/:todoItemId', todoItemsController.update);
  app.delete(
    '/api/categories/:categoryId/items/:todoItemId', todoItemsController.destroy
  );

  // For any other request method on todo items, we're going to return "Method Not Allowed"
  app.all('/api/categories/:categoryId/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};
