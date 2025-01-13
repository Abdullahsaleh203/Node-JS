import generator from '../Util/generator.js';
import myStorage from '../Util/memory.stoage.js';
import Note from '../model/node.model.js';



export const getNotes = (req, res) => { 
    let seqId = generator.generate();
    // myStorage.store.setItem(seqId, '1st key');
    // let seqId2 = generator.generate();
    // myStorage.store.setItem(seqId2, '2nd key');
    // let keys = myStorage.getKeys(myStorage.store);
    // let values = myStorage.getValues(myStorage.store);
    res.send(`Notes route number ${seqId}`);
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
