var age= document.getElementById("age");
var salary= document.getElementById("salary");
var saved= document.getElementById("Saved");
var goal= document.getElementById("Goal");
var ss;
var Employer;
var age1;
var total;
var form = document.getElementById("form");
             
function validateForm(){
  if(age.value=='' || salary.value==''|| saved.value==''|| goal.value==''){
    alert("All fields are required!");
    document.getElementById("submit").removeEventListener("click", retire);
  }else{
    retire();
  }
}
document.getElementById("submit").addEventListener("click", validateForm);

function reset()
{
  location.reload(true)
}


function retire(){
  var p = [saved.value, salary.value,goal.value,age.value];

    ss= (Number(p[0]) / 100) * p[1];
    Employer = Number(ss * 0.35);
    total = Number(Employer + ss);
    age1 = Number(p[2])/Number(total);
  
  //form.reset();
 var a=true;
  var result = '';
  if(Number(p[3])>=100){
    result = 'wait a moment...you are dead..come back when you are alive and working';
    a=false;
     }else if(p[3]<0){
    result = 'wait a moment...you are not not alive..come back when you are alive and working';
     a=false;
     }
  

  console.log(result);
  var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");

  var t = document.createTextNode(result);
  if(age1<100 && a==true){
  var b = document.createTextNode('You will reach your goal at age : ');
  var r = document.createTextNode(parseFloat(age1 + Number(p[3])).toFixed(0));
  h1.appendChild(t);
  h2.appendChild(b);
  h2.appendChild(r);
  }
  else if(a==true){ 
  var b = document.createTextNode('Sorry..at this rate you will die before you meet your savings goal ');
      h1.appendChild(t);
      h2.appendChild(b);
  } 
  else {
       h1.appendChild(t);
  }
  
  

  
  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.getElementById("submit").removeEventListener("click", retire);
  document.getElementById("submit").removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", retire);