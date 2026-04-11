// استيراد دالة sum من ملف script.js
const { sum } = require('./script');

test('فحص دالة الجمع - النجاح الحقيقي', () => {
    // الآن الدالة أصبحت معرفة وسيعمل الاختبار
    expect(sum(2, 2)).toBe(4); 
});
const { convertToSAR } = require('./script');

test('فحص دقة تحويل العملة', () => {
    // نتوقع أن 100 دولار تساوي 375 ريال
    expect(convertToSAR(100)).toBe(375);
});

test('فحص التعامل مع الأرقام السالبة', () => {
    // نتوقع أن الرقم السالب يعطي صفر
    expect(convertToSAR(-10)).toBe(0);
});
