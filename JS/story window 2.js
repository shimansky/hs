var TextRu='Здесь подозрительно тихо...';
  
  var TextEng='its suspiciously quiet here ...';

  function showWindowText(Ru,Eng){
  flagInHit=0;
  tab = document.createElement('div');
  tab.className = "tab"; 
  if (language==1){
    tab.innerHTML=  Ru + '<br><button onclick="closeTab(), ambient2.play()">ok</button>' 
  }else
     {tab.innerHTML= Eng + '<br><button onclick="closeTab(), ambient2.play()">ok</button>' };
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
  // clearInterval(timerId2);
  }

setTimeout(function(){showWindowText(TextRu,TextEng)},3000);