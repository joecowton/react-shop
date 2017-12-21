const Category = require('../models').Category;
const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    return Category
      .create({
        title: req.body.title,
      })
      .then(category => res.status(201).send(category))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Category
      .findAll({
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(category => res.status(200).send(category))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Category
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
          }],
        })
      .then(category => {
        if (!category) {
          return res.status(404).send({
            message: 'Category Not Found',
          });
        }
        return res.status(200).send(category);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
  return Category
    .findById(req.params.todoId, {
      include: [{
        model: TodoItem,
        as: 'todoItems',
      }],
    })
    .then(category => {
      if (!category) {
        return res.status(404).send({
          message: 'Todo Not Found',
        });
      }
      return category
        .update({
          title: req.body.title || category.title,
        })
        .then(() => res.status(200).send(category))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Category
      .findById(req.params.categoryId)
      .then(category => {
        if (!category) {
          return res.status(400).send({
            message: 'Category Not Found',
          });
        }
        return category
          .destroy()
          .then(() => res.status(200).send({ message: 'Todo deleted successfully.' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
