var animExitLift = document.getElementById('animExitLift');


function controlPlayerPosition(){
          flagRight=0;
          flagLeft=0;
          rightInMove=0;
          leftInMove=0;
	 clearInterval(timerLeft);
	 clearInterval(timerRight);
          if(rightInMove==0 && upInMove==0 && downInMove==0){
              figure.style.backgroundImage='URL("IMG/player_l.png")';
       }
    figure.moveLeft(-50);
}



function askPassword(){
  flagInHit=1;
   tab = document.createElement('div');
          tab.className = "tab";
          tab.style.left="40%";
          tab.style.bottom="45%";
          inTeleportation=1;
          tab.innerHTML= 'enter password: <br><br><input type="text" size="10" id="password"><br><br><button onclick="closePasswordTab()">ok</button><button onclick="closeTab()">close</button>' ;
          wievport.append(tab);
          tab.onclick = function(){flagInHit=1};
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

function closePasswordTab(){
   var password = document.getElementById("password").value.toLowerCase();
   // сохранение статуса жизни игрока при выходе с уровня
        localStorage.setItem('life', life);
        localStorage.setItem('flagPistol', flagPistol);
        localStorage.setItem('flagShootgun', flagShootgun);
        localStorage.setItem('flagPlasmagun', flagPlasmagun);
        localStorage.setItem('plCells', plCells);
        localStorage.setItem('cells', cells);
        localStorage.setItem('sCells', sCells);;
  if(password=="6702"){
    document.location.href = "elevator.html";
  }
  else
  if(password=="0014"){
    document.location.href = "room14.html";
  }
  else
  if(password=="0013"){
    document.location.href = "room13.html";
  }
  else
  if(password=="0011"){
    document.location.href = "room11.html";
  }
  else{
    tab.innerHTML= 'wrong password<br><br><button onclick="closeTab()">close</button>' ;
  }
}


function getAccess(){
	 var p = figure.getBoundingClientRect();
     var anEx = animExitLift.getBoundingClientRect();
   if (( (p.bottom-anEx.bottom)<=25 && (p.bottom-anEx.bottom)>=-25 ) && ( (p.right-anEx.right)<=25 && (p.right-anEx.right)>=-25 ) ) {
       controlPlayerPosition();
       setTimeout(askPassword,100);
     }
 }


setInterval(getAccess, 500);
