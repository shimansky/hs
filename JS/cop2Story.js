  var cop2Sound = new Audio('SOUND/cop2Radio.mp3');

  var cop2TextRu='<div id="cop2IMG"></div><br>Пожалуйста, отойдите от заграждения - здесь не безопасно!';
  
  var cop2TextEng='<div id="cop2IMG"></div><br>Please move away from the fence - its not safe here!';

  function cop2Story(){
  flagInHit=0;
  tab = document.createElement('div');
  tab.className = "tab";
  if (language==1){
    tab.innerHTML=  cop2TextRu + '<br><button onclick="closeTab()">ok</button>' 
  }else
     {tab.innerHTML= cop2TextEng + '<br><button onclick="closeTab()">ok</button>' };
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
  cop2Sound.play();
  }




