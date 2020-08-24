var myImage = document.querySelector('img');
var imageExplanation = document.querySelector('h2')

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/hts.jpg'){
        myImage.setAttribute('src', 'images/kodac.png');
        imageExplanation.textContent="これはコダックです。ポケダンにハマっていた時に描きました。";
    }else{
        myImage.setAttribute('src', 'images/hts.jpg');
        imageExplanation.textContent="これはハピネスツリースライムです。僕の名前の漢字と、スライムツリーをかけています。";
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName(){
    var myName = prompt('あなたの名前を入力してください');
    if(!myName || myName===null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent=myName+"、ぽよぽよ！"; 
       
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName+"、ぽよぽよ！";
   
}

myButton.onclick = function(){
    setUserName();
}