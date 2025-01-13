import MemoryStorage from 'memorystorage';

// here, the MemoryStorage function is available
let myStorage = new MemoryStorage('my-app');


export const getkeys = (myStorage) => {
    let keys = [];
    for (let i=0; i<myStorage.length; i++) {
        let key = myStorage.key(i);
        keys.push(key);
    }
    return keys;
}
export var getValues = (myStorage) => {
    var values  = [];
    for (let i=0; i<myStorage.length; i++) {
        var key = myStorage.key(i);
        var value = myStorage.getItem(key);
        values.push(value);
    }
    return values;
}



export default myStorage;
