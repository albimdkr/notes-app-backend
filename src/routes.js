const  { addNoteHandler } = require('./handlers/addNoteHandler');
const  { getAllNotesHandler } = require('./handlers/getAllNotesHandler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  }
];

module.exports = routes;
 