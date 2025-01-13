import Sequential from 'sequential-ids';

const generator = new Sequential.Generator({
    digits: 6,
    letters: 3,
    
    restore: "000" 
  });

generator.start();

export default generator;
