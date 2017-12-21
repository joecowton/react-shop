module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  TodoItem.associate = (models) => {
    TodoItem.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE',
    });
  };

  return TodoItem;
};
