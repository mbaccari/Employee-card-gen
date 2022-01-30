const Engineer = require("../lib/Engineer")

test("checking github value", () => {
    const testValue = "mbaccari";
    const e = new Engineer("Keith", 5, "Keith@google", testValue);
    expect(e.github).toBe(testValue)
})

test("testing getGithub() method", () => {
    const testValue = "mbaccari";
    const e = new Engineer("keith", 1, "keith1@google", testValue);
    expect(e.getGithub()).toBe(testValue)
})

test("testing getRole() method", () => {
    const e = new Engineer()
    expect(e.getRole()).toBe("Engineer")
})