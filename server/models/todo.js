module.exports = (conn, DataTypes) => {
    const Todo = conn.define("todo", {
      title: {
        type: DataTypes.STRING,
  
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      completed: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    });
  
    Todo.associate = (models) => {
      Todo.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    };
  
    return Todo;
  };