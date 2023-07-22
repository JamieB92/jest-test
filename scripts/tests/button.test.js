/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

// Use this as the boiler plate for every time your testing a functions and the dom as will check the whole page and run the tests you have built
beforeEach(() => {
    let fs = require("fs") 
    let fileContents = fs.readFileSync("index.html", "utf-8") // Remeber to change to the page you wish to test
    document.open();
    document.write(fileContents)
    document.close()
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked"); // tests the button functioning
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1) //finds the h1 and confirms theres only one 
    })
});