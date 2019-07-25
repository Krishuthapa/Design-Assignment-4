var element=document.querySelectorAll('.body-slider-mid div');
var elem=document.querySelectorAll('.slider-content div');

var sliderContent=[];
var slideChanger=[];
var index=0;

sliderContent.push(elem[0]);
sliderContent.push(elem[2]);
sliderContent.push(elem[4]);

slideChanger.push(element[0]);
slideChanger.push(element[8]);

var sliderContainer=document.getElementsByClassName('slider-content');

var bulletDiv=document.createElement('div');
sliderContainer[0].appendChild(bulletDiv);
bulletDiv.style.position='absolute';
bulletDiv.style.zIndex='15';
bulletDiv.style.top='90%';
bulletDiv.style.left='47%';

var buttonArray=[];

function bulletPoints(){
    
    button = document.createElement("button");
    button.style.height=10+'px';
    button.style.width=10+'px';
    button.style.marginRight=3+'px';
    button.style.borderRadius='50%';
    bulletDiv.appendChild(button);
    buttonArray.push(button);
    return button;

}


button1=bulletPoints();
button2=bulletPoints();
button3=bulletPoints();

buttonArray[0].style.backgroundColor='black';

slideChanger[1].onclick=()=>{
    
    
    index=(index+1)%3;
    let prev=index-1;
    if(prev<0){
        prev=3+prev;
    }
    let next=(index+1)%3;
    sliderContent[prev].style.display='none';
    sliderContent[index].style.display='block';
    sliderContent[next].style.display='none';
    buttonArray[index].style.backgroundColor='black';
    buttonArray[prev].style.backgroundColor='lightgray';
}

slideChanger[0].onclick=()=>
{
    
    
    index=(index-1)%3;
    if(index<0){
        index=3+index;
    }
    let prev=index-1;
    if(prev<0){
        prev=3+prev;
    }
    let next=(index+1)%3;
    sliderContent[prev].style.display='none';
    sliderContent[index].style.display='block';
    sliderContent[next].style.display='none';
    buttonArray[index].style.backgroundColor='black';
    buttonArray[next].style.backgroundColor='lightgray';
    
}

