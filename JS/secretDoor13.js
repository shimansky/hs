secretLift=document.getElementById('secretLift');
figure=document.getElementById('player');




function watchSecret(){
	var p = figure.getBoundingClientRect();
    var sec = secretLift.getBoundingClientRect();
       if (( (p.bottom-sec.bottom)<=25 && (p.bottom-sec.bottom)>=-25 ) && ( (p.right-sec.right)<=25 && (p.right-sec.right)>=-25 )) {
            tab = document.createElement('div');
            tab.className = "tab";
            tab.innerHTML='You find the secret Lift!!!' ;
            tab.style.left=window.innerWidth/2-90+"px";
            tab.style.top=window.innerHeight/3+"px";
            inTeleportation=1;
            wievport.append(tab);
            accessCard.play();
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
            // clearInterval(timerId);
            // clearInterval(timerId2);
             clearInterval(timerLeft);
          flagLeft=0;
          leftInMove=0;
          if(rightInMove==0 && upInMove==0 && downInMove==0){
              figure.style.backgroundImage='URL("IMG/player_l.png")';
       }
    figure.moveLeft(-50);
             // сохранение статуса жизни игрока при выходе с уровня
        localStorage.setItem('life', life);
        localStorage.setItem('flagPistol', flagPistol);
        localStorage.setItem('flagShootgun', flagShootgun);
        localStorage.setItem('flagPlasmagun', flagPlasmagun);
        localStorage.setItem('plCells', plCells);
        localStorage.setItem('cells', cells);
        localStorage.setItem('sCells', sCells);
            setTimeout(goToURL,3000);
       }
     }
function goToURL(){
	document.location.href = "room13.html";
}
setInterval(watchSecret,100);