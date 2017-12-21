'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Type.associate = (models) => {
    Type.hasMany(models.Product, {
      foreignKey: 'typeId',
      as: 'products',
    });
  };

  return Type;
};
