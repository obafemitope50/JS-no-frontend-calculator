// var a,b, add, sub, mul, div;

// a=parseInt(window.prompt("Enter first number"));
// operation = add
// b=parseInt(window.prompt("Enter second number"));

// add=a+b;
// sub=a-b;
// mul=a*b;
// div=a/b;

// document.write()

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