let display = document.getElementById( 'display' );
//display.innerHTML= 'Nothing to display'
let buttons = Array.from(document.querySelectorAll('.button'));

buttons.map((button)=>{
    console.log(button)

    button.addEventListener('click',(e)=>{
        // (e)- element which we are getting for that perticular listner 
        // console.log(e);
        // console.log(e.target.innerText);
       switch(e.target.innerText){
        case "C":
            display.innerText = "";
            break
        case "<=":
            display.innerText = display.innerText.substring(0,display.innerText.length-1);
            break
        case "=":
            if(display.innerText === ""){
                alert('no value is entered')
            }else{
                try{
                    display.innerText = eval(display.innerText);
                }catch{
                    display.innerHTML = 'Error';
                }
            }
            break
        default: {
            display.innerText = display.innerText + e.target.innerText;
        }
       }
    })
})
// let cbutton = document.getElementById( 'buttonOne');
// cbutton.addEventListener('click',function(){
//     alert('C is clicked');
//     display.innerHTML = 'Clear Clicked'
// })