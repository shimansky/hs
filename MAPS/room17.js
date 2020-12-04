      var map =[
["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w",],
["w","o","o","o","o","o","o","o","o","w","o","o","w","o","o","o","o","o","o","o","w","o","o","o","o","o","o","o","o","w",],
["w","o","o","o","o","o","o","o","o","ud","o","o","w","o","o","o","o","o","o","o","ud","o","o","o","o","o","o","o","o","w",],
["w","o","o","o","o","o","o","o","o","w","o","o","w","o","o","o","o","o","o","o","w","o","o","o","o","o","o","o","o","w",],
["w","w","w","w","w","w","w","w","w","w","o","o","w","o","o","o","o","o","o","o","w","w","w","w","w","w","w","w","w","w",],
["w","o","o","o","o","o","o","o","o","w","o","o","w","o","o","o","o","o","o","o","w","o","o","o","o","o","o","o","o","w",],
["w","o","o","o","o","o","o","o","o","ud","o","o","ud","o","o","o","o","o","o","o","ud","o","o","o","o","o","o","o","o","w",],
["w","o","o","o","o","o","o","o","o","w","o","o","w","o","o","o","o","o","o","o","w","o","o","o","o","o","o","o","o","w",],
["w","w","w","w","w","w","w","w","w","w","o","o","w","w","w","w","w","w","w","w","w","w","w","w","w","o","o","o","o","w",],
["w","o","o","o","o","o","o","o","o","w","o","o","o","o","o","o","o","o","o","o","o","o","o","o","w","o","o","o","o","w",],
["w","o","o","o","o","o","o","o","o","w","o","o","o","o","o","o","o","o","o","o","o","o","o","o","w","o","o","o","o","w",],
["w","o","o","o","o","o","o","o","o","w","w","w","w","w","w","w","w","w","w","w","w","w","o","o","w","o","o","o","o","w",],
["w","o","o","o","o","o","o","o","o","w","o","o","o","o","o","o","o","o","o","o","o","w","o","o","w","w","w","w","w","w",],
["w","o","o","o","o","o","o","o","o","w","o","o","o","o","o","o","o","o","o","o","o","w","o","o","w","o","o","o","o","w",],
["w","o","o","o","o","o","o","o","o","w","o","o","o","o","o","o","o","o","o","o","o","w","o","o","w","o","o","o","o","w",],
["w","o","o","o","o","o","o","o","o","ud","o","o","o","o","o","o","o","o","o","o","o","ud","o","o","ud","o","o","o","o","w",],
["w","o","o","o","o","o","o","o","o","w","o","o","o","o","o","o","o","o","o","o","o","w","o","o","w","o","o","o","o","w",],
["w","o","o","o","o","o","o","o","o","w","o","o","o","o","o","o","o","o","o","o","o","w","o","o","w","o","o","o","o","w",],
["w","o","o","o","o","o","o","o","o","w","w","w","w","w","w","w","w","w","w","w","w","w","o","o","w","o","o","o","o","w",],
["w","o","o","o","o","o","o","o","o","w","o","o","o","w","o","o","o","o","o","o","o","w","o","o","w","o","o","o","o","w",],
["w","o","o","o","o","o","o","o","o","w","o","o","o","w","o","o","o","o","o","o","o","w","o","o","w","o","o","o","o","w",],
["w","o","o","o","o","o","w","w","w","w","o","o","o","w","o","o","o","o","o","o","o","w","o","o","w","o","o","o","o","w",],
["w","o","o","o","o","o","w","o","o","o","o","o","o","w","o","o","o","o","o","o","o","w","o","o","w","w","w","w","w","w",],
["w","o","o","o","o","o","w","o","o","o","o","o","o","w","o","o","o","o","o","o","o","ud","o","o","w","o","o","o","o","w",],
["w","o","o","o","o","o","w","o","o","o","o","o","o","w","o","o","o","o","o","o","o","w","o","o","w","o","o","o","o","w",],
["w","o","o","o","o","o","w","o","o","o","o","o","o","w","o","o","o","o","o","o","o","w","o","o","ud","o","o","o","o","w",],
["w","o","o","o","o","o","w","o","o","o","o","o","o","ud","o","o","o","o","o","o","o","w","o","o","w","o","o","o","o","w",],
["w","o","o","o","o","o","w","o","o","o","o","o","o","w","o","o","o","o","o","o","o","w","o","o","w","o","o","o","o","w",],
["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","ws","w","w","w","w","w","w",],
["w","o","o","o","o","o","o","o","o","o","o","o","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w",],

         ];
   
   var teleportX = 400;
   var teleportY = -50;
   var moduls = 5;

   var isVisited = localStorage.getItem('level'+ tempLocation);
   console.log("level is visited: " + isVisited);

   if(isVisited==1){
    monster.style.display="none";
    monster2.style.display="none";
    monsterPortal.style.display="none";
    controlPanel.style.backgroundImage='URL("IMG/controlPanelOFF.jpg")';
   
        try{
            off();
            turelActive=0;
            bullet.style.display="none";
            toggle=0;
            
            }
        catch{

            }
            
   }
   else{
      // alert("Find all the alarm-modules, otherwise you will die from nerve gas. you have 150 seconds!");
   }