
var ss;
var Employer;
var age1;
var total;

function retire1(a,b,c,d){
  var p = [a,b,c,d];

    ss= (p[0] / 100) * p[1];
    Employer = ss * 0.35;
    total = Employer + ss;
    age1 = p[2]/Number(total);


  
  
 var ap=true;
  var result = '';
  if(p[3]>=100){
    result = 'wait a moment...you are dead..come back when you are alive and working';
    ap=false;
     }else if(p[3]<0){
    result = 'wait a moment...you are not not alive..come back when you are alive and working';
     ap=false;
     }
  
  //var h1 = document.createElement("h1");
  //var h2 = document.createElement("h2");

  //var t = document.createTextNode(result);
  if(age1<100 && ap==true){
    console.log(age1);
  //var b = document.createTextNode('You will reach your goal at age : ');
  return "Yes"; 
  }
  else if(ap==true){ 
  return "No"; 
  } 
  else {
    return "No1";
  }
  
  

}

module.exports = retire1;