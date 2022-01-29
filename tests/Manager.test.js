const Manager = require("../lib/Manager");

test("Can set office number via constructor", () =>{
    const testValue = "officeNumber";
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber()).toBe(testValue);
});

test("getRole() should return \"Manager\"", () =>{
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", "officeNumber");
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number", () =>{
    const testValue = "school";
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber()).toBe(testValue);
});