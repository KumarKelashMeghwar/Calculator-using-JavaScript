const largeScreen = document.querySelector(".screen2");
const smallScreen = document.querySelector(".screen1");
const buttons = document.querySelectorAll(".btn");
const deleteBtn = document.querySelector(".btnDel");
const clearBtn = document.querySelector(".btnC");
const equalBtn = document.querySelector(".btnEqual");
const butns = document.querySelectorAll(".Butn");


let  arr,number1,number2,char,textArray,anotherString;

let text = "", smartValue=0, stringAgain;

function reset(){
    smallScreen.innerHTML = "";
    largeScreen.innerHTML = "";
}

buttons.forEach((item) =>{
    item.addEventListener("click", () =>{

        if(item.innerHTML === "."){
            if(largeScreen.innerHTML.includes(".")){
                //
            }
            else{
                text += item.innerHTML;
                largeScreen.innerHTML = text;
            }
        }
        
        else{
            if(smartValue > 0){
                text =  smartValue;
                text += item.innerHTML;
                largeScreen.innerHTML = text;
                arr = Array.from(String(largeScreen.innerHTML),String);
                textArray = Array.from(text,String);
                smartValue = 0;
            }
            else{
                text += item.innerHTML;
                largeScreen.innerHTML = text;
                textArray = Array.from(text,String);
                arr = Array.from(String(largeScreen.innerHTML),String);    
            }
        }
    });
});


butns.forEach((item)=>{
    item.addEventListener("click",()=>{
        let newTemp;

        if(largeScreen.innerHTML === "")
        {
            //
        }
        else{
            if(smartValue > 0){
                newTemp = smartValue;
                text = "";
                smallScreen.innerHTML += newTemp + item.innerHTML;
                text = "";
                largeScreen.innerHTML = "";
                smartValue = 0;
            }
            else{
                newTemp = item.innerHTML;
                smallScreen.innerHTML += text + newTemp;
                text = "";
                largeScreen.innerHTML = "";
            }
            
        } 
        
    });
});


equalBtn.addEventListener("click",()=>{
    smallScreen.innerHTML += largeScreen.innerHTML;    
    largeScreen.innerHTML = eval(smallScreen.innerHTML);
    smartValue = largeScreen.innerHTML;
    smallScreen.innerHTML = "";
  
});




deleteBtn.addEventListener("click",() =>{
    arr.pop();
    textArray.pop();
    stringAgain = arr.join("");
    anotherString = textArray.join("");
    text = anotherString;
    largeScreen.innerHTML = stringAgain;
    if(stringAgain == ""){
        reset();
    }

    if(smartValue>0){
        reset();
        smartValue = 0;
        text = "";
    }
    
});

clearBtn.addEventListener("click",()=>{
    reset();
    text = "";
    smartValue = 0;

});





