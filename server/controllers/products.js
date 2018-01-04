const Product = require('../models').Product;

module.exports = {
  create(req, res) {
    return Product
      .create({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        typeId: req.params.typeId,
      })
      .then(product => res.status(201).send(product))
      .catch(error => res.status(400).send(error));
  },

  show(req, res) {
    return Product
    .find({
        where: {
          id: req.params.productId,
          typeId: req.params.typeId,
        },
      })
    .then(product => {
      return res.send(product)
    })
  },

  update(req, res) {
    return Product
      .find({
          where: {
            id: req.params.productId,
            typeId: req.params.typeId,
          },
        })
      .then(product => {
        if (!product) {
          return res.status(404).send({
            message: 'TodoItem Not Found',
          });
        }

        return product
          .update(req.body, { fields: Object.keys(req.body) })
          .then(updatedProduct => res.status(200).send(updatedProduct))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return Product
      .find({
          where: {
            id: req.params.productId,
            todoId: req.params.typeId,
          },
        })
      .then(product => {
        if (!product) {
          return res.status(404).send({
            message: 'Product Not Found',
          });
        }

        return product
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
    },

};
