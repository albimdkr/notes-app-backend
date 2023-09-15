const  { addNoteHandler } = require('./handlers/addNoteHandler');
const  { getAllNotesHandler } = require('./handlers/getAllNotesHandler');
const  { getNoteByIdHandler } = require('./handlers/getNoteByIdHandler');
const  { editNoteByIdHandler } = require('./handlers/editNoteByIdHandler');



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
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
];

module.exports = routes;
 