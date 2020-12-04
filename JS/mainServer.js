var mainServer = document.getElementById("mainServer");
var tempArr = document.getElementsByClassName("ws");
var mainServerOff = new Audio('SOUND/mainServerOff.mp3');
var toggleMainServerOff = 0;


figure=document.getElementById('player');
monsterPortal=document.getElementById('monsterPortal');

mainServer.disabled=function(){
    mainServer.style.backgroundImage='URL("IMG/se.png")';
    
}


function controlServerDisabled(){
    var p = figure.getBoundingClientRect();
    var ms = mainServer.getBoundingClientRect();
  if (( (p.bottom-ms.bottom)<=25 && (p.bottom-ms.bottom)>=-25 ) && ( (p.right-ms.right)<=25 && (p.right-ms.right)>=-25 ) ) {
    if(toggleMainServerOff==0){
         getAccessToMainServer();
         figure.moveLeft(-50);
        }
    }
}

function getAccessToMainServer(){

    tab = document.createElement('div');
          tab.className = "tab";
          tab.style.left="40%";
          tab.style.bottom="45%";
          inTeleportation=1;
          tab.innerHTML= 'enter password to disable main server: <br><br><input type="text" size="10" id="password"><br><br><button onclick="closeServerPasswordTab()">ok</button><button onclick="closeTab()">cancel</button>' ;
          wievport.append(tab);
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

function closeServerPasswordTab(){
   var password = document.getElementById("password").value.toLowerCase();
  // var password=prompt("enter ACCESS code:").toLowerCase();
  if(password=="darkwood"){
    localStorage.setItem('serverPass', 1);
    toggleMainServerOff = 1;
    mainServerOff.play();
    mainServer.disabled();
    tab.innerHTML= 'access guaranted<br> server status: OFF';
    setTimeout(closeTab,2000);

  }
  
  else{
    tab.innerHTML= 'wrong code!!!<br> server status: ON';
    setTimeout(closeTab,2000);
  }
}



setInterval(controlServerDisabled,500);
