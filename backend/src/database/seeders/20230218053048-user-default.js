'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
      {
        id: 'df94f554-4d6d-4ab6-9233-3d0c668b2014',
        username: 'admin',
        email: 'admin@gmail.com',
        password: '$2b$10$sRohXGYlmwm/.1CA.5eZV.hmlHXtoG1tc.mtrI3MLKr3FfgSbp8aS', // 123456
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
}
