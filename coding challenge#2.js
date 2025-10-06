//Use the BMI from Challenge#1 , and the code  you already wrote and improve it.
//TASk:
//1. print a nice output to the console.saying who has higher BMI. The message is eitherr "Marks" BMI is  higer than johan!  or  Jhon BMI is higher  than Marks
//Use a template literal to  include the BMI values  in the output. Example "marks BMI(28.3) is higher than JHOns (23.9)"
let BMI='BODY MASS INDEX MARKS';
console.log(BMI);
//let BMI = 'JHON';
//console.log(BMI);
const Marksmass = 78;
const  Marksheight = 1.68;
console.log(Marksmass/Marksheight*2) ;
let BMIJhons='BODY MASS INDEX Jhons';
console.log(BMIJhons);

const Jhonsmass = 92;
const  Jhonsheight = 1.95;
console.log(Jhonsmass/Jhonsheight*2);

const JHONSBMI = 93.35;
const MARKSBMI = 92.85;

console.log(JHONSBMI>MARKSBMI);

         
        
        if(MARKSBMI> JHONSBMI){
            console.log('MARKS BMI  is Higher than JHONS!')
        } else{
            console.log('JHONS is Higher BMI ThanMarks!🏋️‍♀️🏋️‍♀️');
            
        }
        
           
