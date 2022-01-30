const Employee = require('../lib/Employee');

test("testing if its an object", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object")
});

test("can get name via constructor", () => {
    const name = "keith";
    const e = new Employee(name);
    expect(e.name).toBe(name);
})

test("can get id via constructor", () => {
    const id = "5";
    const e = new Employee(name);
    expect(e.name).toBe(name);
})

test("testing getName(), getID(), and getEmail() method", () => {
    const testName = "keith";
    const testId = 5;
    const testEmail = "coolguy@gmail.com"

    const e = new Employee(testName, testId, testEmail);
    expect(e.getName()).toBe(testName);
    expect(e.getId()).toBe(testId);
    expect(e.getEmail()).toBe(testEmail);
})
