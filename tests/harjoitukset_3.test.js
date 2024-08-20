const printTenTimes = require("../Harjoitukset_3/t1")
const n1 = "Tiina"
const n2 = "Jussi"

/* 1 */
describe('printTenTimes', () => {
    test('printTenTimes: tulostaa nimen 10 kertaa', () => {
        expect(printTenTimes(n1)).toBe(`1. ${n1}\n2. ${n1}\n3. ${n1}\n4. ${n1}\n5. ${n1}\n6. ${n1}\n7. ${n1}\n8. ${n1}\n9. ${n1}\n10. ${n1}\n`);
        expect(printTenTimes(n2)).toBe(`1. ${n2}\n2. ${n2}\n3. ${n2}\n4. ${n2}\n5. ${n2}\n6. ${n2}\n7. ${n2}\n8. ${n2}\n9. ${n2}\n10. ${n2}\n`);
    });
})