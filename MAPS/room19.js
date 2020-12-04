   var map =[
["we","we","we","w","w","w","w","w","w","we","we","we","we","we","we","we","we","we","we","we","we","we","we","we","we","we","we","we","we","we",],
["we","we","we","w","o","o","o","o","w","we","we","we","we","w","w","w","we","w","w","w","we","we","we","we","we","we","we","we","we","we",],
["w","w","w","w","o","wc","wc","o","w","we","we","we","we","w","op","w","w","w","op","w","we","we","we","we","we","we","we","we","we","we",],
["w","o","wc","o","o","o","wc","o","w","w","w","w","w","w","o","o","o","o","o","w","w","w","w","we","we","w","w","w","w","w",],
["w","o","o","wc","wc","o","o","o","o","o","w","o","o","o","o","o","o","o","o","o","o","o","w","we","we","w","o","o","o","w",],
["w","o","wc","o","wc","wc","o","o","wc","ow","w","ow","o","grass","grass","grass","grass","grass","grass","grass","o","o","w","w","w","w","o","op","o","w",],
["w","o","grass","grass","grass","o","o","o","o","ow","ws","ow","o","w","w","w","w","w","w","w","o","o","ud","grass","grass","ud","o","o","o","w",],
["w","o","w","w","w","wc","o","wc","wc","ow","w","ow","o","w","oa","oa","oa","oa","oa","w","o","o","w","w","w","w","o","op","o","w",],
["w","grass","w","we","w","o","o","wc","o","o","w","o","o","w","oa","o","oa","o","oa","w","o","o","w","we","we","w","o","o","o","w",],
["w","w","w","we","w","wc","grass","grass","grass","wc","w","o","o","w","oa","oa","oa","oa","oa","w","o","o","w","we","we","w","o","op","o","w",],
["we","we","we","we","w","w","w","w","w","w","w","o","o","w","oa","o","oa","o","oa","w","o","o","w","we","we","w","o","o","o","w",],
["we","we","we","we","we","we","we","we","we","we","w","o","o","w","oa","oa","oa","oa","oa","w","o","o","w","w","w","w","o","op","o","w",],
["we","we","we","we","we","we","w","w","w","we","w","o","o","w","oa","oa","w","w","w","w","o","o","ud","grass","grass","ud","o","o","o","w",],
["we","we","we","we","w","w","w","o","w","we","w","o","o","w","oa","oa","w","o","o","o","o","o","w","w","w","w","o","op","o","w",],
["we","we","we","we","w","wp","o","o","w","w","w","o","o","w","oa","oa","w","o","o","grass","grass","grass","w","we","we","w","o","o","o","w",],
["we","we","we","we","w","o","o","o","o","o","w","o","o","w","oa","oa","w","o","o","w","w","w","w","we","we","w","o","op","o","w",],
["we","we","we","we","w","wp","o","wp","o","wp","w","o","o","w","oa","oa","w","o","o","w","we","we","we","we","we","w","o","o","o","w",],
["we","we","we","we","w","o","o","o","o","o","w","o","o","w","ws","w","w","o","o","w","we","we","we","we","we","w","ow","ow","ow","w",],
["w","w","w","w","w","wp","o","wp","o","wp","w","o","o","o","o","o","o","o","o","w","w","we","we","we","we","w","w","ud","w","w",],
["w","o","o","grass","grass","grass","grass","o","grass","grass","w","grass","o","grass","grass","grass","grass","grass","o","op","w","we","we","we","we","we","w","ow","w","we",],
["w","o","o","w","w","w","w","ud","w","w","w","w","ud","w","w","w","w","w","grass","op","w","we","we","we","we","we","w","o","w","we",],
["w","grass","o","w","grass","grass","o","o","o","w","wp","o","o","wp","o","wp","o","w","w","w","w","we","we","we","w","w","w","o","w","we",],
["w","w","ws","w","w","w","o","o","o","ud","o","o","o","o","o","o","o","w","we","we","we","we","we","we","w","wc","o","o","w","we",],
["w","oa","oa","oa","oa","w","grass","grass","grass","w","o","o","o","o","o","o","o","w","we","we","we","we","we","w","w","wc","o","grass","w","we",],
["w","se","oa","oa","se","w","w","w","w","w","wp","o","grass","wp","grass","wp","grass","w","we","we","we","w","w","w","wc","o","grass","w","w","we",],
["w","oa","oa","oa","oa","w","we","we","we","w","w","ud","w","w","w","w","w","w","we","we","we","w","o","o","o","grass","wc","w","we","we",],
["w","se","oa","oa","se","w","we","we","w","w","o","o","o","o","o","w","we","we","we","we","we","w","wc","o","o","w","w","w","we","we",],
["w","oa","oa","oa","oa","w","we","we","w","op","o","o","o","o","o","w","w","w","w","we","we","w","wc","wc","grass","w","we","we","we","we",],
["w","se","oa","oa","se","w","we","we","w","op","grass","grass","grass","grass","grass","ud","grass","grass","w","we","we","w","w","w","w","w","we","we","we","we",],
["w","w","w","w","w","w","we","we","w","w","w","w","w","w","w","w","w","w","w","we","we","we","we","we","we","we","we","we","we","we",]

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