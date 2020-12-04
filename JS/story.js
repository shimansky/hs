  var textRu='<div id="robertIMG"></div><br>Машина мчалась по шоссе как сумасшедшая, я резко затормозил - дорогу перекрыли полицейские машины. Что произошло, где Лиса!?';
  
  var textEng='<div id="robertIMG"></div><br>The car rushed along the highway like crazy, i braked sharply - the road was blocked by police cars. What happened, where is Lisa !?';

  function showStory(Ru,Eng){
  flagInHit=0;
  tab = document.createElement('div');
  tab.className = "tab";
  if (language==1){
    tab.innerHTML=  Ru + '<br><button onclick="closeTab(), ambient1.play()">ok</button>' 
  }else
     {tab.innerHTML= Eng + '<br><button onclick="closeTab(), ambient1.play()">ok</button>' };
  tab.style.left=window.innerWidth/2-90+"px";
  tab.style.top=window.innerHeight/3+"px";
  inTeleportation=1;
  wievport.append(tab);
  tab.onclick = function(){flagInHit=1};
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



setTimeout(function(){showStory(textRu,textEng)},3000);
  // showStory(textRu,textEng);

