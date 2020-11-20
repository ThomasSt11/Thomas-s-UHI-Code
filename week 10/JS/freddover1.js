function findFreddo()
{
    var result;
    result= wagehour/cost
    return result;
}

function displayValue(){
    if (result>72){
        document.write("you can buy more than 72 freddos per hour, you can buy "+ result +" per hour, In" +year );
    }
    else if(result<72){
        document.write("You can only buy "+result+" freddos per hour in " +year);
                }
    else if(result=72)
    {
        document.write("you can buy 72 freddos per hour in "+year);
    }
}

var year = parseInt(window.prompt("Input year", "0"));
var wagehour = parseInt(window.prompt("Input the average wage/hour in pence", "0"));
var cost=parseInt(window.prompt("Input cost in pence", "0"));
result=findFreddo();
displayValue();










