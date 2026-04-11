// في بداية ملف script.test.js
const { sum, convertToSAR } = require('./script');

test('فحص دالة الجمع - النجاح الحقيقي', () => {
    expect(sum(2, 2)).toBe(4); 
});

test('فحص دقة تحويل العملة', () => {
    expect(convertToSAR(100)).toBe(375);
});

test('فحص التعامل مع الأرقام السالبة', () => {
    expect(convertToSAR(-10)).toBe(0);
});
