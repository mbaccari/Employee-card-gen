const Manager = require("../lib/Manager.js");

test("checking office value", () => {
    const testValue = 25;
    const e = new Manager(testValue);
    expect(e.office).toBe(testValue)
})

test("testing getOffice() method", () => {
    const testValue = 25;
    const e = new Manager("keith", 1, "keith1@google", testValue);
    expect(e.getOffice()).toBe(testValue)
})