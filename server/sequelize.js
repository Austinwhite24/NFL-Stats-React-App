const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    "postgres://rmxvywswemezip:aa7489d266700c71ed87afc33d59d00e1cb3dcecc2a4104098a2520fbaa10308@ec2-23-20-224-166.compute-1.amazonaws.com:5432/d6mvivvtvlvnr6",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
)

module.exports = sequelize

