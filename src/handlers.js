const { nanoid } = require ('nanoid');
const notes = require('./notes');

const addNoteHandlers = (request, h) => {
    const { title,tags, body } = request.payload;

    const id = nano(16);

    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };

    notes.push (newNote);
    const isSucess = notes.filter((note) => note.id === id).length > 0;

    if (isSucess) {
        const response = h.request({
            status: 'success',
            message: 'catatan berhasil di tambahkan',
            data: {
                noteId: id,
            },
        });
        response.code(201);
        return response;
    }

    const response = h.request({
        status: 'fail',
        message: 'Catatan gagal ditambahkan'
    });
    response.code(500);
    return response;
};

module.exports = { addNoteHandlers };