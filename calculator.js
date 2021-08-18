var numType='D';
function toBin(){
    let value1 = eval(document.getElementById('res').value);
    document.getElementById('res').value = value1.toString(2);
    numType='B'; 
}
function toDec(){
    let value1;
    if(numType=='B'){
        value1 = parseInt(document.getElementById('res').value,2);
    }
    else if(numType=='O'){
        value1 = parseInt(document.getElementById('res').value,8);
    }
    else if(numType=='H'){
        value1 = parseInt(document.getElementById('res').value,16);
    }
    document.getElementById('res').value = value1;
    numType='D';
}
function toOct(){
    let value1 = parseInt(document.getElementById('res').value);
    if(numType=='B'){
        value1 = parseInt(value1,2);
    }
    else if(numType=='H'){
        value1 = parseInt(value1,16);
    }
    document.getElementById('res').value = value1.toString(8);
    numType='O'; 
}
function toHex(){
    let value1 = eval(document.getElementById('res').value);
    if(numType=='B'){
        value1 = parseInt(value1,2);
    }
    else if(numType=='O'){
        value1 = parseInt(value1,8);
    }
    document.getElementById('res').value = value1.toString(16);
    numType='H'; 
}
function getSQRT(){
    let value1 = eval(document.getElementById("res").value);
    document.getElementById("res").value = Math.sqrt(value1);
}
function backOne(){
    let value = document.getElementById("res").value;
    document.getElementById("res").value = value.substr(0, value.length - 1);
    setFocus();
}
function setFocus(){
    document.getElementById('res').focus();
}
function getPercentage(){
    if(document.getElementById('res').value==''){
        alert('Wrong Expression');
        return false;
    }
    let value1 = document.getElementById('res').value;
    value1 = eval(value1)/100;
    document.getElementById('res').value=value1;
}
function clearRes(){
    document.getElementById('res').value='';
    setFocus();
}
function solve(){
    /* global scope*/
    var value1 = document.getElementById('res').value;
    /*
    let will reduce the scope of a varibale as a block scope
    */
    let result = eval(value1);
    document.getElementById('res').value=result;
    setFocus();
}
function setValue(data){
    var value = document.getElementById('res').value;
    if(document.getElementById('res').value=='' && (data=='+' || data=='-' || data=='%'
    ||data=='*' ||data=='/' || data=='0' || data=='**')){
        alert('Press a number first');
    }
    else if(document.getElementById('res').value=='' && data=='.'){
        document.getElementById('res').value=0+data;
    }
    else{
        document.getElementById('res').value = value+data;
    }
    
}