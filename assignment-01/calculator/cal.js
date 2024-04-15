function calculate()
{
    let number1 = parseFloat(document.getElementById('num1').value);
    let number2 = parseFloat(document.getElementById('num2').value);

    let calOperator = document.getElementById('operator').value;



    if(isNaN(number1) || isNaN(number2)){
        document.getElementById('result').value = "Fields cannot be empty";
        
    }

    if(calOperator === '+'){
        document.getElementById('result').value = number1 + number2;
    }

    if(calOperator === '-'){
        document.getElementById('result').value = number1 - number2;
    }

    if(calOperator === '*'){
        document.getElementById('result').value = number1 * number2;
    }
    
    if(number2 === 0){
        document.getElementById('result').value = "Second number cannot be zero";
    }else if(calOperator === '/'){
        document.getElementById('result').value = number1 / number2;
    }
}













