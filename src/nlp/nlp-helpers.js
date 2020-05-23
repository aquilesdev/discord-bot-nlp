const { dockStart } = require('@nlpjs/basic');
const path = require('path');
const util = require('util');


const askBot = async (message) => {
  //const
  const dock = await dockStart({ use: ['Basic']});
  const nlp = dock.get('nlp');
  await nlp.addCorpus(path.resolve(__dirname, 'corpus-pt.json'));
  await nlp.train();
  const response = await nlp.process('pt', message);
  //console.log(response);
  return response;
};

exports.askBot = askBot;