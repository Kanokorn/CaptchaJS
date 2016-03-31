describe("Second pattern", function() {
    describe("left operand should be number", function() {
        it("1 + ONE", function() {
            var captcha = new Captcha(2, 1, 1, 1);
            expect(captcha.string()).toEqual("1 + ONE");
        });

        it("2 + ONE", function() {
            var captcha = new Captcha(2, 2, 1, 1);
            expect(captcha.string()).toEqual("2 + ONE");
        });
    });

    describe("right operand should be string", function() {
        it("1 + TWO", function() {
            var captcha = new Captcha(2, 1, 1, 2);
            expect(captcha.string()).toEqual("1 + TWO");
        });
    });

    describe("operator", function() {
        it("1 - THREE", function() {
            var captcha = new Captcha(2, 1, 2, 3);
            expect(captcha.string()).toEqual("1 - THREE");
        });
    });
});
