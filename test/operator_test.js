describe("Operator", function() {
    it("plus", function() {
        var captcha = new Captcha(1, 1, 1, 1);
        expect(captcha.string()).toEqual("ONE + 1");
    });

    it("minus", function() {
        var captcha = new Captcha(1, 1, 2, 1);
        expect(captcha.string()).toEqual("ONE - 1");
    });

    it("multiply", function() {
        var captcha = new Captcha(1, 1, 3, 1);
        expect(captcha.string()).toEqual("ONE * 1");
    });
});
