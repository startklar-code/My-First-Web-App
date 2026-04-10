const { getWeather } = require('./script');

test('يجب أن تفشل الدالة إذا كانت المدينة فارغة', async () => {
    // سنحاول تشغيل الدالة ونتوقع أنها ستعطي خطأ أو قيمة معينة
    const result = await getWeather(""); 
    expect(result).toBe("error"); // هذا سيفشل لأن الدالة لا تعيد كلمة error
});
