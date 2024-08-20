const logger = require("../Harjoitukset_3/consoletest")

/* 1 */
describe('logger', () => {
    test('logger: loggaa tekstiä', () => {
        const logSpy = jest.spyOn(console, 'log');
        logger("testaa")
        expect(logSpy).toHaveBeenCalledWith("testaa");
    });
})