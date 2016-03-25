describe("Captcha", function(){
	it("string should be ONE plus 1", function() {
		var captcha = new Captcha(1,1,1,1);
		expect(captcha.string()).toEqual("ONE + 1");
	});

    it("string should be TWO plus 1", function() {
        var captcha = new Captcha(1,2,1,1);
        expect(captcha.string()).toEqual("TWO + 1");
    });
});
