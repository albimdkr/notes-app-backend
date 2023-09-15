const notes = require('../notes');

const editNoteByIdHandler = (request, h) => {
    const { id } = request.params;
    const { title, tags, body } = request.payload;
    const updatedAt = new Date().toISOString();

    const index = notes.findIndex((note) => note.id === id);


    if (index !== -1){
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt,
        };

        const response = h.response({
            status: 'success',
            message: 'Catatan Berhasil di perbarui',
        });
        response.code(200);
        return response;
    };

    const response = h.response ({
        status: 'fail',
        message: 'Gagal Memperbarui',
    });
    response.code(404);
    return response;
};

module.exports = { editNoteByIdHandler };
