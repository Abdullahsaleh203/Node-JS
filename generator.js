// استيراد المكتبة
import MemoryStorage from 'memorystorage';

// إنشاء كائن جديد من MemoryStorage
const memoryStorage = new MemoryStorage();

// تخزين بيانات
memoryStorage.setItem('key1', 'value1');
memoryStorage.setItem('key2', JSON.stringify({ name: 'John', age: 30 }));

// قراءة البيانات
console.log(memoryStorage.getItem('key1')); // Output: 'value1'
console.log(JSON.parse(memoryStorage.getItem('key2'))); // Output: { name: 'John', age: 30 }

// حذف بيانات
memoryStorage.removeItem('key1');

// التحقق من وجود مفتاح
console.log(memoryStorage.getItem('key1')); // Output: null

// مسح جميع البيانات
memoryStorage.clear();
console.log(memoryStorage.getItem('key2')); // Output: null
