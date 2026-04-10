const { getWeather } = require('./script');

test('يجب أن تعيد الدالة نجاحاً عند طلب طقس لندن', async () => {
    // سنحاول تشغيل الدالة
    const result = await getWeather('London');
    
    // سنضع شرطاً تعجيزياً: نتوقع أن الدالة تعيد كلمة "success"
    // وبما أن دالتك لا تعيد شيئاً (undefined)، سيفشل الاختبار
    expect(result).toBe('success');
});
