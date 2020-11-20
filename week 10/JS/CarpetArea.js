function findArea()
{
    var result;
    result= length*width
    return result;
}

function displayresult(newresult)
{
    document.write("area of carpet = " + result + " meters squared");
}

var length = parseInt(window.prompt("Input length(meters)", "0"));
var width = parseInt(window.prompt("Input the width(meters)", "0"));
result=findArea();
displayresult(result)









