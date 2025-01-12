import generator from '../util/generator.js';

export const getNotes = (req, res) => { 
    var seqId = generator.generator();
    res.send(`Notes route ${seqId}`);
};

export const createNote = (req, res) => {
    res.send('Create note route');
};

export const getNote = (req, res) => {
    res.send('Get note route');
};
export const deleteNote = (req, res) => {
    res.send('Delete note route');
};

export const updateNote = (req, res) => {
    res.send('Update note route');
};
