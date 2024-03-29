// Criptografar senha
const bcrypt = require('bcryptjs');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {  
  async up (queryInterface, Sequelize) {
    // Cadastrar o registro na tabela "users"
    return queryInterface.bulkInsert('Users', [
      {
        name: "Cesar",
        email: "cesar@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 2",
        email: "cesar2@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 3",
        email: "cesar3@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 4",
        email: "cesar4@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 5",
        email: "cesar5@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 6",
        email: "cesar6@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 7",
        email: "cesar7@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 8",
        email: "cesar8@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 9",
        email: "cesar9@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 10",
        email: "cesar10@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 11",
        email: "cesar11@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 12",
        email: "cesar12@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 13",
        email: "cesar13@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 14",
        email: "cesar14@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 15",
        email: "cesar15@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 16",
        email: "cesar16@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 17",
        email: "cesar17@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 18",
        email: "cesar18@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 19",
        email: "cesar19@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 20",
        email: "cesar20@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 21",
        email: "cesar21@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 22",
        email: "cesar22@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 23",
        email: "cesar23@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 24",
        email: "cesar24@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 25",
        email: "cesar25@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 26",
        email: "cesar26@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 27",
        email: "cesar27@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 28",
        email: "cesar28@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 29",
        email: "cesar29@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 30",
        email: "cesar30@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cesar 31",
        email: "cesar31@celke.com.br",
        password: await bcrypt.hash('123456', 8),
        situationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    
  },

  async down (queryInterface, Sequelize) {
    
  }
};
