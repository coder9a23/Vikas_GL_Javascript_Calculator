let input = document.querySelector('#display')
let expressionEvaluted;

function addChar(character){
    if(expressionEvaluted){
        expressionEvaluted = false;
        clearContent();
    }
    if(input.innerText == null || input.innerText == "0"){
        input.innerText = character
    }else{
        input.innerText = input.innerText + character;
    }
}

function clearContent(){
    input.innerText = "";
}

function deleteChar(){
    input.innerText = input.innerText.substring(0,input.innerText.length-1);
}

function compute(){
    expressionEvaluted = true;
    if(input.innerText == ""){
        alert('Enter the value');
    }else{
        try{
            input.innerText = eval(input.innerText);
        }catch{
            input.innerText = 'Error'
        }
    }
}

function changeSign(){
    if(input.innerText.substring(0,1) == "-"){
        input.innerText = input.innerText.substring(1,input.innerText.length);
    }else{
        input.innerText = "-" + input.innerText;
    }
}

function square(){
    expressionEvaluted = true;
    if(input.innerText == ""){
        alert("Enter the value")
    }else{
        input.innerText = eval(input.innerText) * eval(input.innerText);
    }
}

function squareRut(){
    expressionEvaluted = true;
    if(input.innerText == ""){
        alert("Enter the value")
    }else{
        input.innerText = Math.sqrt(input.innerText);
    }
}
function ln(){
    expressionEvaluted = true;
    if(input.innerText == ""){
        alert('Enter the value')
    }else{
        input.innerText = Math.log(input.innerText);
    }
}

function ex(){
    expressionEvaluted = true;
    if(input.innerText == ''){
        alert('Enter the value')
    }else{
        input.innerText = Math.exp(input.innerText);
    }
}

function sin(){
    expressionEvaluted = true;
    if(input.innerText == ''){
        alert('Enter the value')
    }else{
        input.innerText = Math.sin(input.innerText);
    }
}

function cos(){
    expressionEvaluted = true;
    if(input.innerText == ''){
        alert('Enter the value')
    }else{
        input.innerText = Math.cos(input.innerText);
    }
}

function tan(){
    expressionEvaluted = true;
    if(input.innerText == ''){
        alert('Enter the value')
    }else{
        input.innerText = Math.tan(input.innerText);
    }
}

function chekNumber(){
    var str = input.innerText;
    
    for(var i = 0; i < str.length; i++){
        var ch = str.substring(i,i+1)
        if(ch<'0' || ch>'9'){
            if(ch!='/' && ch!='*' && ch!='+' && ch!='(' && ch!=')'){
                alert('Invalid input')
                return false
            }
        }
    }
    return true
}