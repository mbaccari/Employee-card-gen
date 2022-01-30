const Intern = require("../lib/Intern")

test("checking School value", () => {
    const testValue = "UW";
    const e = new Intern("Keith", 5, "Keith@google", testValue);
    expect(e.school).toBe(testValue)
})

test("testing getSchool() method", () => {
    const testValue = "UW";
    const e = new Intern("keith", 1, "keith1@google", testValue);
    expect(e.getSchool()).toBe(testValue)
})

test("testing getRole() method", () => {
    const e = new Intern()
    expect(e.getRole()).toBe("Intern")
})