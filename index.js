
function calc ()
{
    var n1 = parseFloat(prompt("Enter first number"));
    const operation = prompt("Enter an operation(+, -, /, *)");
    var n2 = parseFloat(prompt('Enter second number'));
    
    if (isNaN(n1) || isNaN(n2)) {
        alert('Wrong datatype, put in a number')
    }else {
        if (operation == '+')
        {
        result = n1+n2;
        
        } else if (operation == '-')
        {
        result = n1-n2;
        } else if (operation == '/')
        {
        result = n1/n2;
        } else if (operation == '*')
        {
        result = n1*n2;
        }
        alert('result = '+ result)
    }
        
}
calc()
