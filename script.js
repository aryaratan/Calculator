
var op1 ;
var op2 = null;
var operator = null;

var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("btn");

for(var i =0; i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){

        var value = this.getAttribute('data-value');
        console.log(value);
        if(value == '+' || value == '*' || value == '-' || value == '/'){
            operator = value;
            op1 = parseFloat(display.textContent);
            // op1 = op1.toString();
            display.innerText = "";
            console.log(op1);
        }
        else if(value == '='){
            op2 = parseFloat(display.textContent);
            // op2 = op2.toString();
            var result = eval( op1 + operator + op2);

            if(result < 0 ){
                console.log(result);
            }
            display.innerText = result;
            // op1 = result;
        }
        else if(value == "AC"){
            display.innerText = "";
            op1 = null;
            op2 = null;
            operator = null;
        }
        else if(value == "%"){
            op1 = op1 = parseFloat(display.textContent);
            op2 = parseFloat("100");
            operator = '/';
            var result = eval(op1 + operator + op2);
            display.innerText = result;
            op1 = result;
            op2 = null;
            operator = null;
        }
        else if(value == "sign"){
            if(operator == null){
                op1 = op1 = parseFloat(display.textContent);
                op1 = (-1) * op1;
            }
            else{
                op2 = parseFloat(display.textContent);
                op2 = (-1) * op2;
            }
            
        }
        else{
            display.innerText += value;
        }
    })
}