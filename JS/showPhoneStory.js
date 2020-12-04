  var textPhoneRu='<div id="lisaIMG"></div><br>Лиса: Что-то произошло в здании - погас свет и были слышны крики я успела добежать до лифта и подняться на 10й этаж, кажется здесь наверху кто-то есть! Код в лифте 6702';
  
  var textPhoneEng='<div id="lisaIMG"></div><br>Lisa: Something happened in the building - the lights went out and screams were heard, I managed to run to the elevator and go up to the 10th floor, it seems there is someone up here! Elevator code 6702';

  function showPhoneStory(Ru,Eng){
  flagInHit=0;
  tab = document.createElement('div');
  tab.className = "tab";
  if (language==1){
    tab.innerHTML=  Ru + '<br><button onclick="closeTab()">ok</button>' 
  }else
     {tab.innerHTML= Eng + '<br><button onclick="closeTab()">ok</button>' };
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





