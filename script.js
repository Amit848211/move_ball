let ball=document.getElementById("ball");
let t=0;
let left=0;
let audio=new Audio("click-button-140881.mp3");
document.addEventListener("keydown",function moveball(event){
    // console.log(event);
    // audio.play();
    let browserHeight=document.documentElement.clientHeight;
    let browserWidth=document.documentElement.clientWidth;
    let elementWidth=ball.offsetWidth
    console.log(browserHeight,browserWidth);
    let key=event.keyCode;
    
    // console.log(key);
    // move with d or right arrow
    if(key==68||key==39){
        if(left+elementWidth+10<=browserWidth){
            ball.style.left=left+10+"px";
            left+=10;

        }
        else{
            left=0;
        }

       
    }
    // move with s and
    if(key==83||key==40){
        console.log(t);
        if(t+elementWidth+10<=browserHeight){
            ball.style.top=t+10+"px";
            t+=10;
        }
        else{
            t=0;
        }

       
    }
    // fo w and
    if(key==87||key==38){
        if(t-10>=0){
            ball.style.top=t-10+"px";
            t-=10;
        }
        else{
            t=browserHeight
        }

       
    }
        if(key==65||key==37){
        if(left-10>=0){
            ball.style.left=left-10+"px";
            left-=10;
        }
        else{
            left=browserWidth
        }

       
    }
    

})