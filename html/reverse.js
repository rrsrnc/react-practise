window.onload=function(){
    var Num = document.getElementById('reverseNumber');
    // let firstName = prompt("What is your first name?")

document.getElementById("rn").onclick=function(){reverse()};

function reverse()
{
    input1=Num.value;
    let reverse;
    var p=document.getElementById("rev");
    // tens=parseInt(input1/10);
    // unit=parseInt(input1%10);
    // reverse=tens+unit*10;
    console.log(input1.split("").reverse().join(""));
    reverse=input1.split("").reverse().join("")
    p.innerText="reverse number = "+reverse;
    p.style.display="block";
    if(reverse==input1)
    {
        p.innerText="Palindrome";
    }
}
document.getElementById("order").onclick=function(){order()};
function order(){
    input2=document.getElementById("alphaorder");
    var val=input2.value;
    var order=" " ;
    
    for (let i = 0; i <val.length; i++) {
        if(val[i]<=val[i+1]){
            order = order +val[i];
        }
        else
        {
            order += val[i+1];
            val=val.replace(val[i+1],val[i])
         
            // order += val[i];
        console.log(order);
    }
        // console.log(order)
    }
}
}