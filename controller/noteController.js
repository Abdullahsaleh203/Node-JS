import generator from '../Util/generator.js';
import myStorage from '../Util/memory.stoage.js';


export const getNotes = (req, res) => { 
    var seqId = generator.generate();
    myStorage.store.setItem(seqId, '1st key');
    var seqId2 = generator.generate();
    myStorage.store.setItem(seqId2, '2st key');
    var keys = myStorage.getkeys(myStorage.store);
    var values = myStorage.getValues(myStorage.store);
    res.send(`Notes route  number ${JSON.stringify(keys)} and values ${JSON.stringify(values)}`);
    // res.send(`Notes route  number`);
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
