
function findbiggestFraction(a,b){
    var result;
    if (a>b){
        result = ["First Fraction is larger ",a];
    }
    else if(a<b){
        result = ["Second Fraction is larger ",b];
                }
    else
    {
        result= "equal"
    }

    return result;
}

function displayresult(newresult)
{
    document.write(Fractionsresult);
}


var Fraction1 = 3/4;
var Fraction2 = 7/8;
var Fractionsresult=findbiggestFraction(Fraction1,Fraction2);
displayresult(Fractionsresult)








