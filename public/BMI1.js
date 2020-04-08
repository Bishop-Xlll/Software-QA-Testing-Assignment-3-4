


function BMI1(a,b,c){
 var  height = (Number(a.value) * 12) + Number(b.value);
  var p = [height, c ,a ,b ];

p[0]=(Number(p[2]) * 12) + Number(p[3]);

  var bmi = (Number(p[1])*703)/(Number(p[0])*Number(p[0]));


  var result = '';
  if(bmi<18.5){
    return  "Underweight";
     }else if(18.5<=bmi&&bmi<=24.9){
    return  "Healthy";
     }else if(25<=bmi&&bmi<=29.9){
    return  "Overweight";
     }else if(30<=bmi&&bmi<=34.9){
    return  "Obese";
     }else if(35<=bmi){
    return "Extremely obese";
     }

}
module.exports = BMI1;