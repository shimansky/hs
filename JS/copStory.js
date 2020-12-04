  var copSound = new Audio('SOUND/copRadio.mp3');

  var copTextRu='<div id="copIMG"></div><br>Я не могу вас пропустить в это здание, здесь все оцеплено!';
  
  var copTextEng='<div id="copIMG"></div><br>I cannot let you into this building, everything is cordoned off here!';

  function copStory(){
  flagInHit=0;
  tab = document.createElement('div');
  tab.className = "tab";
  if (language==1){
    tab.innerHTML=  copTextRu + '<br><button onclick="closeTab()">ok</button>' 
  }else
     {tab.innerHTML= copTextEng + '<br><button onclick="closeTab()">ok</button>' };
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
  copSound.play();
  }




