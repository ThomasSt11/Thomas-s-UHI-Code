var a=0;
var b=0;
var NumeratorA=0;
var DenominatorA=0;
var NumeratorB=0;
var DenominatorB=0;


function findbiggestFraction(){
    if (a>b){
        document.write("Fraction A ("+ a +") Fraction is greater than B ");
    }
    else if(a<b){
        document.write("Fraction B ("+ b +") Fraction is greater than A ");
                }
    else if(a=b)
    {
        document.write("Fraction A ("+ a +") is equal to B ");
    }
}

NumeratorA = window.prompt("Input numerator A", "0");
DenominatorA = window.prompt("Input the numerator A", "0");
var a = (NumeratorA/DenominatorA);

NumeratorB = window.prompt("Input numerator B", "0");
DenominatorB = window.prompt("Input the numerator B", "0");
var b = (NumeratorB/DenominatorB);

findbiggestFraction();








