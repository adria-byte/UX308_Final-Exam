import { handleInput, clearInput } from '../src/Order.js';
 
describe("Tests all stages of a nail salon order", function () {
    beforeEach(function () {
        clearInput();
    });
    it("test hello", function () {
        const aResults = handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Polished Nail Studio!");
    });
    it("test classic manicure", function () {
        handleInput("hello");
        const aResults = handleInput("Classic Manicure");
        expect(aResults[0]).toBe("Great choice! A Classic Manicure is $32 and takes about 30 minutes.");
    });
    it("test gel manicure", function () {
        handleInput("hello");
        const aResults = handleInput("Gel Manicure");
        expect(aResults[0]).toBe("Excellent! A Gel Manicure is $48 and lasts 2-3 weeks chip-free.");
    });
    it("test yes to upsell", function () {
        handleInput("hello");
        handleInput("Classic Manicure");
        const aResults = handleInput("yes");
        expect(aResults[0]).toBe("Amazing! Nail art added to your booking.");
    });
    it("test no to upsell", function () {
        handleInput("hello");
        handleInput("Gel Manicure");
        const aResults = handleInput("no");
        expect(aResults[0]).toBe("No problem! Your appointment is confirmed at Polished Nail Studio, 456 Glamour Ave, Burlington.");
    });
});
 