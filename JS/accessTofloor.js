function accessToFlorDisabled(){

    tab = document.createElement('div');
          tab.className = "tab";
          tab.style.left="40%";
          tab.style.bottom="45%";
          inTeleportation=1;
          tab.innerHTML= 'Find the ACCESS CODE & disable main server!!!: <br><br><button onclick="enterToElevator()">ok</button>' ;
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
          document.location.href = "elevator.html";
}

function accessToFlorEnabled(){

    tab = document.createElement('div');
          tab.className = "tab";
          tab.style.left="40%";
          tab.style.bottom="45%";
          inTeleportation=1;
          tab.innerHTML= 'Access to floor guaranted <br><br><button onclick="closeTab()">ok</button>' ;
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

function checkAccesstoFlor(){
  var chek= localStorage.getItem('serverPass');
  if(chek==1){
    accessToFlorEnabled();
  }
  else{
    
    accessToFlorDisabled();
  }
}

checkAccesstoFlor();

// function closeServerPasswordTab(){
//    var password = document.getElementById("password").value.toLowerCase();
//   // var password=prompt("enter ACCESS code:").toLowerCase();
//   if(password=="darkwood"){
//     localStorage.setItem('serverPass', 1);
//     toggleMainServerOff = 1;
//     mainServerOff.play();
//     mainServer.disabled();
//     tab.innerHTML= 'access guaranted<br> server status: OFF';
//     setTimeout(closeTab,2000);

//   }
  
//   else{
//     tab.innerHTML= 'wrong code!!!<br> server status: ON';
//     setTimeout(closeTab,2000);
//   }
// }