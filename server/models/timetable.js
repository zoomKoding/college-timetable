const { Model, DataTypes } = require('sequelize');

class Timetable extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        sharedViewCount: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
      },
      {
        tableName: 'Timetable',
        modelName: 'timetable',
        sequelize,
      },
    );
  }

  static associate(models) {
    this.belongsToMany(models.lecture, { through: 'timetableLectureRelation' });
    this.belongsTo(models.user, {
      foreignKey: 'userId',
      targetKey: 'id',
    });
  }
}

module.exports = Timetable;
