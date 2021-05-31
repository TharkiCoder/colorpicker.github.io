function main(){
  var r=document.getElementById('red').value;
  var g=document.getElementById('green').value;
  var b=document.getElementById('blue').value;
  var a=document.getElementById('A').value;
  a=a/100;
  // alert(0);
  document.getElementById('D').style.backgroundColor="rgba"+"("+r+","+g+","+b+","+a+")";
  document.getElementById('info').innerHTML="rgba"+"("+r+","+g+","+b+","+a+")";
}
