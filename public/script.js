var weight = document.getElementById("weight");
var feet = document.getElementById("Ft");;
var inches= document.getElementById("Inch");;
var height = (Number(feet.value) * 12) + Number(inches.value);
var form = document.getElementById("form");
            
function validateForm(){
  if(height.value=='' || weight.value==''){
    alert("All fields are required!");
    document.getElementById("submit").removeEventListener("click", countBmi);
  }else{
    countBmi();
  }
}
document.getElementById("submit").addEventListener("click", validateForm);

function reset()
{
  location.reload(true)
}
function countBmi(){
  var p = [height.value, weight.value,feet.value,inches.value];
          console.log(feet.value);
          console.log(inches.value);
          console.log(height.value);
p[0]=(Number(p[2]) * 12) + Number(p[3]);
  form.reset();
  var bmi = (Number(p[1])*703)/(Number(p[0])*Number(p[0]));
        console.log(p[1]);
          console.log(p[0]);


  var result = '';
  if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
     }else if(35<=bmi){
    result = 'Extremely obese';
     }
  console.log(result);
  var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");

  var t = document.createTextNode(result);
  var b = document.createTextNode('BMI: ');
  var r = document.createTextNode(parseFloat(bmi).toFixed(2));
  
  h1.appendChild(t);
  h2.appendChild(b);
  h2.appendChild(r);
  
  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.getElementById("submit").removeEventListener("click", countBmi);
  document.getElementById("submit").removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmi);