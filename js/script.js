//js


// var
var n1=2;
var n2=8;
var n3=2+8;
function varUse(){
	document.getElementById('var').innerHTML =n3;
}

// const
const num1=2;
const num2=8;
const num3=2+8;
function constUse(){
	document.getElementById('const').innerHTML =num3;
}

// division
let d1,d2;
d1=10;
d2=5;
function divUse(){
	document.getElementById('div').innerHTML =d1/d2;
}

// subtraction
let s1,s2;
s1=10;
s2=5;
function subUse(){
	document.getElementById('sub').innerHTML =s1-s2;
}

// multi
let m1,m2;
m1=10;
m2=5;
function mulUse(){
	document.getElementById('mul').innerHTML =m1*m2;
}

// increment
let i=5;
function incUse(){
	document.getElementById('inc').innerHTML = ++i;
}

// decrement
let di=5;
function decUse(){
	document.getElementById('dec').innerHTML = --di;
}

// +=
let pl=3;
function plusEqual(){
	document.getElementById('p_e').innerHTML= pl+=3;
}


// -=
let m=3;
function minusEqual(){
	document.getElementById('m_e').innerHTML= m-=3;
}

// *=
let mu=3;
function mulEqual(){
	document.getElementById('mu_e').innerHTML= mu*=3;
}

// /=
let dv=3;
function divEqual(){
	document.getElementById('d_e').innerHTML= dv/=3;
}
// exponentiation
let e=5;
function exUse(){
	document.getElementById('exp').innerHTML = e**2;
}

// left shift
let lf=-100;
function leftShift(){
	document.getElementById('ls').innerHTML = lf<<=5;
}

// right shift
let r=-100;
function rightShift(){
	document.getElementById('rs').innerHTML = r>>=5;
}

// and
let l_and = 100;
l_and &= 5;
function And(){
document.getElementById('and').innerHTML = "Value of x is: " + l_and;
}

// or
let l_or= 100;
l_or |= 5;
function Or(){
document.getElementById('or').innerHTML = "Value of x is: " + l_or;
}

// logical and
let l = 100;
l &&= 5;
function logicAnd(){
document.getElementById('lg_and').innerHTML = "Value of x is: " + l;
}

// logical or
let or = undefined;
or ||= 5;
function logicOr(){
document.getElementById('lg_or').innerHTML = "Value of x is: " + or;
}

// double quoete
function queote(){
	document.getElementById('dq').innerHTML="And they lived \"Happily\" ever after";
}
// substring
let s="Apple,Orrange, Mango";
function substr(){
	document.getElementById('subs_str').innerHTML=s.substring(6,12);
}
// property access
let p="Apple,Orrange, Mango";
function property(){
	document.getElementById('pro').innerHTML=p[0];
}

// slice method
let f="Apple,Orrange, Mango";
let part = f.slice(7,13);
function slice(){
	document.getElementById('slice').innerHTML=part;
}

// double click
function dblOut(){
	document.getElementById('dbl_out').innerHTML="The double click event is working";
}

// double click
function focusOut(){
	document.getElementById('fc_out').innerHTML="The focus event is working";
}

// mouseover
function overOut(){
	document.getElementById('over_out').innerHTML="The mouse over event is working";
}

// onscroll
function scrollOut(){
	document.getElementById('over_out').innerHTML="The onscroll event is working";
}

// onkeydown
function downOut(){
	document.getElementById('key_out').innerHTML="You pressed a keydown";
}

// alert
function alertOut(){
	let a = document.getElementById('al_out');
    alert("How was your day?");
}

// console
function consoleOut(){
	let a= document.getElementById('cl_out');
    console.log("How was your day?");
}

// split
function textSplit(){
let text=document.getElementById("s_t").innerHTML;
document.getElementById("s_t").innerHTML=text.split("new");
}

// upper case
function textUpper(){
let text=document.getElementById("u_t").innerHTML;
document.getElementById("u_t").innerHTML=text.toUpperCase();
}

// lower case
function textLower(){
let text=document.getElementById("l_t").innerHTML;
document.getElementById("l_t").innerHTML=text.toLowerCase();
}

// text break with backlash
function textBreak(){
document.getElementById('br_t').innerHTML="Hello \ People";
}

// function with argument
function myFunction(name,job){
document.getElementById('f_a').innerHTML="Welcome "+ name +" the "+ job+".";
}

// % operator
let x;
x=10;
function remainder(){
document.getElementById('rem').innerHTML=x % 5;
}

// font size change
function fontChange(){
document.getElementById('f_c').style.fontSize="30px";
}

// bg color change
function bgChange(){
	document.getElementById('bg_chng').style.backgroundColor="red";
}

// text add
let text1,text2;
text1 ="How";
text2 ="was your day?";
function textAdd(){
document.getElementById('add').innerHTML=text1+text2;
}

// text add with space
let txt1,txt2;
txt1 ="How";
txt2 ="was your day?";
function textAddSpace(){
document.getElementById('add_s').innerHTML=txt1+" "+txt2;
}

// adding text and number
let t1;
t1="Hello";
function textAddNum(){
	document.getElementById('add_tn').innerHTML=t1+5;
}

// index
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
function wordIndex(){
	document.getElementById("ind").innerHTML = index; 
}

// text change getelements by tag name
function textChangeTag(){
	var info = document.getElementsByTagName('h3');
	alert(info.length);
}

// text change getelements by class name
function textChangeClass(){
	document.getElementsByClassName('t_c')[2].innerHTML="Hi";
}

// variable calc
let number1, number2;
number1 = 5;
number2 = 2;
// number3 = number1+number2;
number1+=number2;

function calculation(){
	document.getElementById('value').innerHTML=number1;
}

// show/hide
function textShow(){
	document.getElementById('text').style.display="block"
}
function textHide(){
	document.getElementById('text').style.display="none"
}

// change color
function colorChange(){
	document.getElementById('c_c').style.color="red";
}

// bulb on/off
function bulbOn(){
    document.getElementById('bulb').src='images/on.gif';
}
function bulbOff(){
    document.getElementById('bulb').src='images/off.gif';
}

// show date
function showDate(){
	document.getElementById('s_d').innerHTML=Date();
}

// text change
function textChange(){

	document.getElementById('t_c').innerHTML="Hello";

}

// toggle
function toggle(){
	alert("The ontoggle function occured");
}