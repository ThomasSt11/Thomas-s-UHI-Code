
function findbiggestFraction(a,b){
    if (a>b){
        document.write("Fraction A ("+ a +") Fraction is greater than B ");
    }
    else if(a<b){
        document.write("Fraction B ("+ b +") Fraction is greater than A ");
                }
    else
    {
        document.write("Fraction A ("+ a +") is equal to B ");
    }
}

var Fraction1 = 3/4;
var Fraction2 = 7/8;

findbiggestFraction(Fraction1,Fraction2);








