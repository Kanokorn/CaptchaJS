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

        if (this.operator === 1) {
            return integerString[this.leftOperand] + " + " + this.rightOperand;
        }

        if (this.operator === 2) {
            return integerString[this.leftOperand] + " - " + this.rightOperand;
        }

        if (this.operator === 3) {
            return integerString[this.leftOperand] + " * " + this.rightOperand;
        }
    }
}
