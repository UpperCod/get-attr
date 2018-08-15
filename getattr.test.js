let getAttr = require("./dist/get-attr");

test("select 1", () => {
    let base = { name: "matias" };
    expect(getAttr({ name: "matias" }, "name")).toBe(base.name);
});

test("select 2", () => {
    let base = { name: "matias" };
    expect(getAttr({ name: "matias" }, ["name"])).toBe(base.name);
});

test("select 3", () => {
    let base = {
        a: {
            b: {
                c: {
                    d: 1000
                }
            }
        }
    };

    expect(getAttr(base, "a.b.c.d")).toBe(base.a.b.c.d);
});

test("select 3, with option", () => {
    let base = {
        a: {
            b: {
                c: {
                    d: 1000
                }
            }
        }
    };

    let option = -1;

    expect(getAttr(base, "a.b.c.d.e", option)).toBe(option);
});

test("select 4, with option", () => {
    let base = {
        a: {
            b: {
                c: {
                    d: 1000
                }
            }
        }
    };

    let option = undefined;

    expect(getAttr(base, "a.b.c.d.e.f.g", option)).toBe(option);
});

test("select 5, with option", () => {
    let base = [[[0]]];
    let option = undefined;
    expect(getAttr(base, "[0][0][0]", option)).toBe(base[0][0][0]);
});
