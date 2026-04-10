const { getWeather } = require('./script');

test('فحص وجود دالة الطقس', () => {
    expect(getWeather).toBeDefined();
});
