function myFunction(){
if (typeof userName === 'undefined') {
var userName = "foo";}
if (typeof passWord === 'undefined') {
var passWord = "bar";}
var userText = document.getElementById('username');
userText.value = userName;
var passText = document.getElementById('password');
passText.value = passWord;
var submit = document.getElementById('signin');
submit.click();};
myFunction();



