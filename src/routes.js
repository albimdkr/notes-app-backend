const  { addNoteHandlers } = require('./handlers/addNoteHandlers');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandlers,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: () => {},
  }
];

module.exports = routes;
 