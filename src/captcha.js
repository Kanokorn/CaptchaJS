function Captcha(pattern, leftOperand, operator, rightOperand) {
    this.pattern = pattern;
    this.leftOperand = leftOperand;
    this.operator = operator;
    this.rightOperand = rightOperand;

    this.string = function() {
        var integerString = {
            1: "ONE",
            2: "TWO",
            3: "THREE",
            4: "FOUR",
            5: "FIVE",
            6: "SIX",
            7: "SEVEN",
            8: "EIGHT",
            9: "NINE"
        };

        if (this.leftOperand === 2) {
            return integerString[this.leftOperand] + " + 1";
        }

        if (this.leftOperand === 3) {
            return integerString[this.leftOperand] + " + 1";
        }

        if (this.leftOperand === 4) {
            return integerString[this.leftOperand] + " + 1";
        }

        if (this.leftOperand === 5) {
            return integerString[this.leftOperand] + " + 1";
        }

        if (this.leftOperand === 6) {
            return integerString[this.leftOperand] + " + 1";
        }

        if (this.leftOperand === 7) {
            return integerString[this.leftOperand] + " + 1";
        }

        if (this.leftOperand === 8) {
            return integerString[this.leftOperand] + " + 1";
        }

        if (this.leftOperand === 9) {
            return integerString[this.leftOperand] + " + 1";
        }

        return integerString[this.leftOperand] + " + 1";
    }
}
