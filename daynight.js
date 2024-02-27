let sun=document.getElementsByClassName('sun')[0];
let b=document.getElementsByClassName('b')[0];
let container=document.getElementsByClassName('container')[0];
let buttonState=0;
/*button.addEventListener('click',()=>{
    sun.style.animationName=`ani1`;
    sun.style.animationDuration=`0.5s`;
    sun.style.animationTimingFunction=`cubic-bezier(0.68, -0.55, 0.27, 1.55);`;
    if(buttonState==0){sun.style.animationFillMode=`forwards`; buttonState=1; container.style.backgroundColor=`grey`;}
    else {sun.style.animationFillMode=`backwards`;buttonState=0;container.style.backgroundColor=`aqua`;}
    button.style.backgroundColor=`rgb(31 36 50)`
    button.style.boderColor=`blue`;
})*/
let con=document.getElementsByClassName('con')[0];
let car=document.getElementsByClassName('car');
//console.log(containerWidth);


let x=new Array(0,0,0,0,0,0,0,0);
let y=new Array(false,false,false,false,false,false,false,false);

const race=()=>{
    let containerWidth=con.offsetWidth;
    for(let i=0;i<8;i++)
    {
        if(x[i]+car[0].offsetWidth>containerWidth)
        {
            y[i]=true;
        }
        if(x[i]<1)
        {
            y[i]=false;
        }
        if(!y[i])
        {
            x[i]=x[i]+((i/10+1)/1);
        }
        else{
            x[i]=x[i]-((i/10+1)/1);
        }
        car[i].style.left=`${x[i]}px`;
    }
}

let press=false;
let e=new Array();
let level=0;
b.addEventListener("click",()=>{
    {
        if(!press)
        {
            e=setInterval(ani,1);
            press=true;
        }
        else{
            clearInterval(e);
            press=false;
        }
        
    }
})

let i=80;
let ani=()=>{

    if(i>car[0].style.offsetWidth)
    {
        i=i-0.05;
        con.style.width=`${i}%`;
    }
    race();
}
