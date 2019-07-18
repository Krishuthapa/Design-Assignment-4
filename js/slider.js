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

console.log(slideChanger[1]);
 
slideChanger[1].onclick=()=>{
    console.log(sliderContent[index]);
    
    index=(index+1)%3;
    let prev=index-1;
    if(prev<0){
        prev=3+prev;
    }
    console.log(prev);
    let next=(index+1)%3;
    sliderContent[prev].style.display='none';
    sliderContent[index].style.display='block';
    sliderContent[next].style.display='none';
    
}

slideChanger[0].onclick=()=>{
    console.log(sliderContent[index]);
    
    index=(index-1)%3;
    if(index<0){
        index=3+index;
    }
    let prev=index-1;
    if(prev<0){
        prev=3+prev;
    }
    //console.log(prev);
    let next=(index+1)%3;
    sliderContent[prev].style.display='none';
    sliderContent[index].style.display='block';
    sliderContent[next].style.display='none';
    
}