const FactoryBot = require('factory-bot');
const { factory } = FactoryBot
const adapter = new FactoryBot.SequelizeAdapter();

factory.setAdapter(adapter);

require('./test-data');
