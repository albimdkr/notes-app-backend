const  { addNoteHandlers } = require('./handlers');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandlers,
    // option: {
    //   cors: {
    //     origin: ['*'],
    //   }
    // }
  },
];

module.exports = routes;
 