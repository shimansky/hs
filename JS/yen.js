var leftXDistanceYen=-10;
var rightXDistanceYen=10;
var upYDistanceYen=10;
var downYDistanceYen=-10;
var tempYen;
var verticalYen;
var yenLife=500;
var toggle=1;
var flagSpeak=0;
yen=document.getElementById('yen');


tempYen=+yen.style.left.toString().slice(0, -2);
  console.log("yen: " + tempYen);
  verticalYen=+yen.style.bottom.toString().slice(0, -2);
  console.log("yen: " + verticalYen);



function yen_get_coordinates(unit){
  var y = yen.getBoundingClientRect();


  // определение имени класса элемента "слева" от юнита
left_empty = document.elementFromPoint((unit.right-55),(unit.bottom-5)).className;
if ( left_empty!="world" && left_empty!="we" && left_empty!="person" && left_empty!="w" && left_empty!="wc"&& left_empty!="ws" && left_empty!="wp" &&left_empty!="locked_door_white"&&left_empty!="locked_door_black" ) {
 leftTemp=1;
 
}
else{
  leftTemp=0;
}

// определение имени класса элемента "справа" от юнита
right_empty  = document.elementFromPoint((unit.right+5),(unit.bottom-5)).className;
if ( right_empty!="world" && right_empty!="we" && right_empty!="person" && right_empty!="w" && right_empty!="wc"&& right_empty!="ws" && right_empty!="wp" &&right_empty!="locked_door_white"&&right_empty!="locked_door_black" ) {
 rightTemp=1;
 
}
else{
  rightTemp=0;
}

// определение имени класса элемента "снизу" от юнита
down_empty = document.elementFromPoint((unit.right-25),(unit.bottom+5)).className;
if ( down_empty!="world" && down_empty!="we" && down_empty!="person" && down_empty!="w" && down_empty!="wc"&& down_empty!="ws" && down_empty!="wp" &&down_empty!="locked_door_white"&&down_empty!="locked_door_black" ) {
 downTemp=1;
 
}
else{
  downTemp=0;
}

// определение имени класса элемента "сверху" от юнита
up_empty = document.elementFromPoint((unit.right-25),(unit.bottom-55)).className;
if ( up_empty!="world" && up_empty!="we" && up_empty!="person" && up_empty!="w" && up_empty!="wc"&& up_empty!="ws" && up_empty!="wp" &&up_empty!="locked_door_white"&&up_empty!="locked_door_black" ) {
 upTemp=1;
 
}
else{
  upTemp=0;
}


}

// блок функций анимации юнита
yen.moveRight=function(distance) {
  var y = yen.getBoundingClientRect();
  yen_get_coordinates(y);
  this.style.backgroundImage='URL("IMG/yen_r.gif")';
if (rightTemp==1) {
  tempYen=tempYen+distance;
  this.style.left = tempYen + 'px';
  this.innerHTML=yenLife;
    }
}
yen.moveLeft=function(distance) {
  var y = yen.getBoundingClientRect();
  yen_get_coordinates(y);
  this.style.backgroundImage='URL("IMG/yen_l.gif")';
if (leftTemp==1) {
  tempYen=tempYen+distance;
  this.style.left = tempYen + 'px';
  this.innerHTML=yenLife;
    }
}
yen.moveUp=function(distance) {
  var y = yen.getBoundingClientRect();
  yen_get_coordinates(y);
  this.style.backgroundImage='URL("IMG/yen_l.gif")';
if (upTemp==1) { 
  verticalYen=verticalYen+distance;
  this.style.bottom = verticalYen + 'px';
  this.innerHTML=yenLife;
    }
}
yen.moveDown=function(distance) {
  var y = yen.getBoundingClientRect();
  yen_get_coordinates(y);
  this.style.backgroundImage='URL("IMG/yen_r.gif")';
if (downTemp==1) {
  verticalYen=verticalYen+distance;
  this.style.bottom = verticalYen + 'px';
  this.innerHTML=yenLife;
    }
}


// ИИ для юнита
function yenMove(){
  
	try{
   var p = figure.getBoundingClientRect();
   var y = yen.getBoundingClientRect();
     
// отслеживание столкновений с ботом
 if(( (p.bottom-y.bottom)<=50 && (p.bottom-y.bottom)>=-50 ) && ( (p.right-y.right)<=50 && (p.right-y.right)>=-50 ) ) {
       if(flagSpeak==0){
        yenSay();
       }
}



    if(p.right-y.right<200 && p.right-y.right>0){
      yen.moveRight(rightXDistanceYen);
    }
    
     if(p.right-y.right>-200 && p.right-y.right<0){
      yen.moveLeft(leftXDistanceYen);
    }
    
      if(p.bottom-y.bottom<200 && p.bottom-y.bottom>0){
      yen.moveDown(downYDistanceYen);
    }
    
     if(p.bottom-y.bottom>-200 && p.bottom-y.bottom<0){
      yen.moveUp(upYDistanceYen);
    }

    else{
    

    var rand=Math.floor(Math.random() * (4 - 0)) + 0;
    
    if(rand==0){
      yen.moveRight(rightXDistanceYen);
      
      
    }
    else
    if(rand==1){
      yen.moveLeft(leftXDistanceYen);
      
      
    }
    else
    if(rand==2){
      yen.moveUp(upYDistanceYen);
      
      
    }
    else
    if(rand==3){
      yen.moveDown(downYDistanceYen);
      
      
    }
}
}
catch(e){
  
}
}


function yenSay(){
   if(inTeleportation==0){
         flagSpeak=1;
         clearInterval(ym);
         inTeleportation=1;
         tab = document.createElement('div');
         tab.className = "tab";
         if (language==1){
              tab.innerHTML= '<div id="robertIMG"></div><br>Роберт:<br> -Кто ты?  Ты ранен!? Что здесь происходит!!!?<br> <div id="frankIMG"></div><br>Френк:<br>- Я Френк, работаю здесь в отделе технического обслуживания. Не знаю как, но наш сервер сошел с ума - как только наш новый сотрудник Сэм обновил его программную часть - терминал вдруг  перевел все телепорты внутри здания в режим удаленного управления, а после из них стали появляться ужасные монстры!!! Всё сотрудники в панике бросились бежать из здания,  но сработала система безопасности и заблокировала этажи и выходы, наверное не все успели выбраться... Я не могу сам найти выход потому, что плохо вижу без своих очков, тут полно этих тварей из телепортов, пожалуйста помоги мне добраться до лифта!<br>Роберт:- Хорошо, Френк, я постараюсь вывести тебя отсюда иди за мной.<br><button onclick="closeTab(), intervalYenMove()">ok</button>' 
              }else
              {tab.innerHTML= '<div id="robertIMG"></div><br>Robert:<br> -Who are you? Are you hurt !? Whats going on here!!!? <br><div id="frankIMG"></div><br>Frank:<br> - Im Frank, I work here in the maintenance department. I dont know how, but our server went crazy - as soon as our new employee Sam updated its software - the terminal suddenly switched all the teleports inside the building to the remote control mode, and then horrible monsters began to appear from them !!! All employees in panic rushed to flee the building, but the security system worked and blocked the floors and exits, probably not all of them managed to get out ... I cant find a way out myself because I cant see well without my glasses, there are a lot of these creatures from teleporters, please help me get to the elevator! <br>Robert:<br>- Okay, Frank, Ill try to get you out of here, follow me.<br><button onclick="closeTab(), intervalYenMove()">ok</button>' };
          tab.style.left="40%";
          tab.style.bottom="45%";
          inTeleportation=1;
          wievport.append(tab);
          tab.onclick = function(){flagInHit=1};
          doc.style.display="none";
          picSound.play();
          flagLeft=0;
          leftInMove=0;
          clearInterval(timerLeft);
          flagRight=0;
          rightInMove=0;
          clearInterval(timerRight);
          flagDown=0;
          downInMove=0;
          clearInterval(timerDown);
          flagUp=0;
          upInMove=0;
          clearInterval(timerUp);
          changePlayerImgThenButtonUp();
          clearInterval(timerId);
          clearInterval(timerId2);
          
    }
 
}



function intervalYenMove(){
   ym= setInterval(yenMove,100);
}

 ym= setInterval(yenMove,100);

