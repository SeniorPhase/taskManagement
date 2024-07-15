module.exports = (conn, DataTypes) => {
    const Todo = conn.define("todo", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
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
    });
    return Todo;
  };