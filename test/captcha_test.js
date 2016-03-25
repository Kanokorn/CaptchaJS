describe("Captcha", function(){
    describe("left operand", function(){
        it("string should be ONE plus 1", function() {
    		var captcha = new Captcha(1,1,1,1);
    		expect(captcha.string()).toEqual("ONE + 1");
    	});

        it("string should be TWO plus 1", function() {
            var captcha = new Captcha(1,2,1,1);
            expect(captcha.string()).toEqual("TWO + 1");
        });

        it("string should be THREE plus 1", function() {
            var captcha = new Captcha(1,3,1,1);
            expect(captcha.string()).toEqual("THREE + 1");
        });

        it("string should be FOUR plus 1", function() {
            var captcha = new Captcha(1,4,1,1);
            expect(captcha.string()).toEqual("FOUR + 1");
        });

        it("string should be FIVE plus 1", function() {
            var captcha = new Captcha(1,5,1,1);
            expect(captcha.string()).toEqual("FIVE + 1");
        });

        it("string should be SIX plus 1", function() {
            var captcha = new Captcha(1,6,1,1);
            expect(captcha.string()).toEqual("SIX + 1");
        });

        it("string should be SEVEN plus 1", function() {
            var captcha = new Captcha(1,7,1,1);
            expect(captcha.string()).toEqual("SEVEN + 1");
        });

        it("string should be EIGHT plus 1", function() {
            var captcha = new Captcha(1,8,1,1);
            expect(captcha.string()).toEqual("EIGHT + 1");
        });

        it("string should be NINE plus 1", function() {
            var captcha = new Captcha(1,9,1,1);
            expect(captcha.string()).toEqual("NINE + 1");
        });
    });

    it("First pattern and right operand is 2", function(){
        var captcha = new Captcha(1,1,1,2);
        expect(captcha.string()).toEqual("ONE + 2");
    });
});
