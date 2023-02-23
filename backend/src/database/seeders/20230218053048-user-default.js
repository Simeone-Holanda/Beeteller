'use strict'
// abaixo importamos nosso objetos com os diferentes tipos de monitores(podendo criar até os seus proprio)
// que de inicio são essenciais para a aplicação funcionar

const monitorTypes = {
  MINI_TICKER: 'MINI_TICKER',
  BOOK: 'BOOK',
  USER_DATA: 'USER_DATA',
  CANDLES: 'CANDLES',
  TICKER: 'TICKER'
}

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
      {
        id: 'df94f554-4d6d-4ab6-9233-3d0c668b2014',
        username: 'admin',
        email: 'admin@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
}
