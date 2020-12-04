var megaMedicKit=document.getElementById('megaMedicKit');
figure=document.getElementById('player');

function megaKit(){
var p = figure.getBoundingClientRect();
var mm=megaMedicKit.getBoundingClientRect();
if (( (p.bottom-mm.bottom)<=25 && (p.bottom-mm.bottom)>=-25 ) && ( (p.right-mm.right)<=25 && (p.right-mm.right)>=-25 ) ) {
     megaMedicKit.style.display="none";
    life+=500;
    panel.innerHTML="life: " + life;
    figure.innerHTML="<span>"+life+"</span>";
    console.log(life);
    megaMedikKit.play();
    
  }
}

  setInterval(megaKit,200);