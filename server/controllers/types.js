const Type = require('../models').Type;
const Product = require('../models').Product;

module.exports = {
  create(req, res) {
    return Type
      .create({
        title: req.body.title,
      })
      .then(type => res.status(201).send(type))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Type
      .findAll({
        include: [{
          model: Product,
          as: 'products',
        }],
      })
      .then(types => res.status(200).send(types))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Type
      .findById(req.params.typeId, {
        include: [{
          model: Product,
          as: 'products',
          }],
        })
      .then(type => {
        if (!type) {
          return res.status(404).send({
            message: 'Type Not Found',
          });
        }
        return res.status(200).send(type);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
  return Type
    .findById(req.params.typeId, {
      include: [{
        model: Product,
        as: 'products',
      }],
    })
    .then(type => {
      if (!type) {
        return res.status(404).send({
          message: 'Type Not Found',
        });
      }
      return type
        .update({
          title: req.body.title || type.title,

        })
        .then(() => res.status(200).send(type))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Type
      .findById(req.params.typeId)
      .then(type => {
        if (!type) {
          return res.status(400).send({
            message: 'Type Not Found',
          });
        }
        return type
          .destroy()
          .then(() => res.status(200).send({ message: 'Type deleted successfully.' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
