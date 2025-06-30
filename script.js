function calculate()
{
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height");
    height=height.value/100;
    let age=document.getElementById("age").value;
    let result=document.getElementById("result");
    if(weight==0 || height==0 || age==0)
    {
        window.alert("Empty field");
        return;
    }
    let t=weight/(Math.pow(height,2))
    t=parseFloat(t.toFixed(2));
    result.value=t;
    let output=document.getElementById("finalResult");

    if(t<18.8)
        output.innerHTML="Underweight";
    else if(t>18.8 && t<24.9)
        output.innerHTML="Normal Weight";
    else if(t>24 && t<29.9)
        output.innerHTML="Overweight";
    else
        output.innerHTML="Obese";
}