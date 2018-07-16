import Component from '@ember/component';

export default Component.extend({
    actions: {
        addNumber(number){
            let tempNumber = this.get('result');
            let newNumber;

            // Check if empty or first number is 0
            if(typeof tempNumber === 'undefined') {
                newNumber = number;
                this.set('result', newNumber);
            } else {
                // Check if there's an operator
                if(this.get('operator')){
                    this.send('calculate', this.get('operator'), tempNumber, number);
                } else {
                    newNumber = tempNumber + '' + number;
                    this.set('result', newNumber);   
                }
            }

        },
        setOperator(operator){
            this.set('operator', operator);
        },
        calculate(operator, prevNumber, newNumber){
            let result;
            switch(operator){
                case "+":
                result = prevNumber + newNumber;
                break;
                case "-":
                result = prevNumber - newNumber;
                break;
                case "/":
                result = prevNumber / newNumber;
                break;
                case "*":
                result = prevNumber * newNumber;
                break;
            }
            this.set('result', result);
        }
    }
});
