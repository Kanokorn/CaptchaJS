function Captcha(pattern, leftOperand, operator, rightOperand) {
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

    this.pattern = pattern;
    this.leftOperand = leftOperand;
    this.operator = new Operator(operator);
    this.rightOperand = rightOperand;

    this.string = function() {
        return  this.getLeftOperand() + " " + this.operator + " " + this.getRightOperand();
    }

    this.getLeftOperand = function() {
        if (this.pattern === 1) {
            return integerString[this.leftOperand];
            return;
        }

        return this.leftOperand;
    };

    this.getRightOperand = function() {
        if (this.pattern === 1) {
            return this.rightOperand;
            return;
        }

        return integerString[this.rightOperand];
    }
}

function Operator(operator) {
    var operatorToStr = {
        1: "+",
        2: "-",
        3: "*",
        4: "/"
    };

    this.operator = operator;
    this.toString = toString;

    function toString() {
        return operatorToStr[this.operator];
    }
}
