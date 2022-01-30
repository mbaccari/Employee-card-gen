const Manager = require("../lib/Manager.js");

test("checking office value", () => {
    const testValue = 25;
    const e = new Manager("Keith", 5, "Keith@google", testValue);
    expect(e.office).toBe(testValue)
})

test("testing getOffice() method", () => {
    const testValue = 25;
    const e = new Manager("keith", 1, "keith1@google", testValue);
    expect(e.getOffice()).toBe(testValue)
})

test("testing getRole() method", () => {
    const e = new Manager()
    expect(e.getRole()).toBe("Manager")
})