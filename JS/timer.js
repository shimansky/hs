// таймер окончания уровня
var tm;
var t=151; /* Даём 150 секунд +1 */
function refr_time()
{
  if (t>0)
  {
    t--;
     document.getElementById('timer').innerHTML="time:" + t;
       if(moduls==0 ){
            clearInterval(tm);
            document.getElementById('timer').style.display="none";
          }
  }
   else
  { 
    showMassege();
    clearInterval(tm); 
    setTimeout(exit, 5000); 
  }
}
function startTimer(){
tm=setInterval(refr_time,1000);
}





var timerTextRu='Сработала сигнализация и будет пущен нервнопаралитический газ, нужно найти контрольный модуль <br> <div class="modul">modul</div> <br> <br> и отключить её, осталось 150секунд!!!';
  
  var timerTextEng='The alarm went off and nerve gas will be released, you need to find the control module <br> <div class="modul">modul</div> <br> <br> and turn it off, 150 seconds left!!!';

  function showTimerText(Ru,Eng){
  flagInHit=0;
  tab = document.createElement('div');
  tab.className = "tab"; 
  if (language==1){
    tab.innerHTML=  Ru + '<br><button onclick="closeTab(), startTimer(), ambient1.play()">ok</button>' 
  }else
     {tab.innerHTML= Eng + '<br><button onclick="closeTab(), startTimer(), ambient1.play()">ok</button>' };
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

  showTimerText(timerTextRu,timerTextEng);

