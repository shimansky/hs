var monsterDied = new Audio('SOUND/monsterInAttack2.mp3');
var animLogo = document.getElementById('animLogo');

function changeImage(){
	animLogo.src="IMG/animLogotip.gif";
	setTimeout(function(){monsterDied.play()},2500);
}

