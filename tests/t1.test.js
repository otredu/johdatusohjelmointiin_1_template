const sayHello = require('../t1');

test('sayHello tervehtii Liisaa oikein', () => {
    expect(sayHello("Liisa")).toBe("Hei, Liisa, mitä kuuluu?");
});

test('sayHello tervehtii Kallea oikein', () => {
    expect(sayHello("Kalle")).toBe("Hei, Kalle, mitä kuuluu?");
});