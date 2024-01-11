let show  = document.querySelector(".box");
let squre =document.querySelector(".square");
let root  =document.querySelector(".root");
let log = document.querySelector(".log");
let history = document.querySelector(".history");
let answerStore= document.querySelector(".answerStore");


let calculator = (newValue) =>{
   
    if (show.innerHTML === '0') {
        show.innerHTML = newValue; 
    } 
    else {
        show.innerHTML += newValue;
    }
}



let deleteOne = () =>{

    if (show.innerHTML === '0') {
        show.innerHTML = 0; }
    else if(show.innerHTML == ''){
        show.innerHTML = 0;
    }
   else{
        show.innerHTML = show.innerHTML.slice(0, -1);
        history.innerHTML = '';} 
}



let deleteAll = () =>{
    show.innerHTML = '';
    show.innerHTML = 0;
    history.innerHTML = '';
}



let answer = () =>{
    let work = show.innerHTML
    console.log(work);
    let π = 3.14;
    let process = eval(work)
    show.innerHTML = process;
    history.innerHTML = `${work} =`;
}


squre.addEventListener('click', () => {

    let double = show.innerHTML
    show.innerHTML = double * double;
})

 root.addEventListener('click', () => {

    let root = show.innerHTML
     if(root === '0') {
     show.innerHTML = 0;
     }else{
     show.innerHTML = Math.sqrt(root).toFixed(5);
     }

    
})


log.addEventListener('click', () => {
 
    let log = show.innerHTML;
    if(log === '0'){
        show.innerHTML = 0;
    }else{
        show.innerHTML = Math.log(log).toFixed(5);
    }

    
})



