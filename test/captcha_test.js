describe("Captcha", function(){
    describe("First pattern", function(){
        describe("Left operand should be string", function() {
            it("ONE plus 1", function() {
                var captcha = new Captcha(1,1,1,1);
                expect(captcha.string()).toEqual("ONE + 1");
            });

            it("TWO plus 1", function() {
                var captcha = new Captcha(1,2,1,1);
                expect(captcha.string()).toEqual("TWO + 1");
            });

            it("THREE plus 1", function() {
                var captcha = new Captcha(1,3,1,1);
                expect(captcha.string()).toEqual("THREE + 1");
            });

            it("FOUR plus 1", function() {
                var captcha = new Captcha(1,4,1,1);
                expect(captcha.string()).toEqual("FOUR + 1");
            });

            it("FIVE plus 1", function() {
                var captcha = new Captcha(1,5,1,1);
                expect(captcha.string()).toEqual("FIVE + 1");
            });

            it("SIX plus 1", function() {
                var captcha = new Captcha(1,6,1,1);
                expect(captcha.string()).toEqual("SIX + 1");
            });

            it("SEVEN plus 1", function() {
                var captcha = new Captcha(1,7,1,1);
                expect(captcha.string()).toEqual("SEVEN + 1");
            });

            it("EIGHT plus 1", function() {
                var captcha = new Captcha(1,8,1,1);
                expect(captcha.string()).toEqual("EIGHT + 1");
            });

            it("NINE plus 1", function() {
                var captcha = new Captcha(1,9,1,1);
                expect(captcha.string()).toEqual("NINE + 1");
            });
        });

        describe("Right operand should be number", function() {
            it("ONE + 2", function(){
                var captcha = new Captcha(1,1,1,2);
                expect(captcha.string()).toEqual("ONE + 2");
            });
        });
    });

    describe("Operator", function() {
        it("minus", function() {
            var captcha = new Captcha(1,1,2,1);
            expect(captcha.string()).toEqual("ONE - 1");
        });

        it("multiply", function() {
            var captcha = new Captcha(1,1,3,1);
            expect(captcha.string()).toEqual("ONE * 1");
        });
    });
});
