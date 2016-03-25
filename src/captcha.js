function Captcha(pattern, leftOperand, operator, rightOperand) {
    this.pattern = pattern;
    this.leftOperand = leftOperand;
    this.operator = operator;
    this.rightOperand = rightOperand;

    this.string = function() {
        if (this.leftOperand === 2) {
            return "TWO + 1";
        }

        if (this.leftOperand === 3) {
            return "THREE + 1";
        }

        if (this.leftOperand === 4) {
            return "FOUR + 1";
        }

        if (this.leftOperand === 5) {
            return "FIVE + 1";
        }

        if (this.leftOperand === 6) {
            return "SIX + 1";
        }

        if (this.leftOperand === 7) {
            return "SEVEN + 1";
        }

        if (this.leftOperand === 8) {
            return "EIGHT + 1";
        }

        if (this.leftOperand === 9) {
            return "NINE + 1";
        }

        return "ONE + 1";
    }
}
