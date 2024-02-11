let outputScreen=document.getElementById("display");
function display(num){
outputScreen.value+=num;
}
function calculate(){
try{
outputScreen.value=eval(outputScreen.value);
}
catch(ERROR){
alert("invalid")
}
}
function cleardisplay(){
outputScreen.value="";
}
function del(){
outputScreen.value=outputScreen.value.slice(0,-1);
}
