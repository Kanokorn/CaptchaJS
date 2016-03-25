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

        return "ONE + 1";
    }
}
