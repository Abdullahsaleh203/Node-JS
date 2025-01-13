import Sequential from 'sequential-ids';
// إنشاء مثيل جديد للمولد

const generator = new Sequential.Generator({
    digits: 6,
    letters: 3,
    
    restore: "000" // استعادة آخر معرف مُخزن
  });

generator.start();

export default generator;
