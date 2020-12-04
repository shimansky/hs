      var map =[
["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w",],
["w","oa","oa","oa","gr","gr","w","w","w","gr","gr","w","w","w","gr","gr","w","w","w","w","w","o","o","o","o","w","o","o","o","w",],
["w","w","oa","w","gr","gr","w","w","w","gr","gr","w","w","w","gr","gr","w","w","w","w","w","o","w","w","w","w","o","w","w","w",],
["w","w","oa","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","o","w","o","o","w","o","w","w","w",],
["w","w","oa","w","gr","gr","w","w","w","gr","gr","w","w","w","gr","gr","w","w","w","w","b","o","ud","o","o","w","o","o","o","w",],
["w","w","oa","w","gr","gr","w","oa","gr","gr","gr","gr","oa","w","gr","gr","w","w","w","w","o","o","w","w","w","w","o","o","o","w",],
["w","w","ws","w","w","w","w","b","w","w","w","w","b","w","w","w","w","w","o","o","o","o","w","w","w","w","o","o","o","w",],
["w","gr","oa","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","gr","w","o","w","w","w","w","w","o","w","w","w","o","w",],
["w","oa","oa","oa","oa","gr","oa","oa","oa","oa","oa","oa","oa","oa","oa","oa","oa","w","o","o","o","w","o","o","o","o","o","w","o","w",],
["w","w","w","w","oa","gr","oa","as","as","as","as","as","as","as","as","as","b","w","o","o","o","o","o","o","o","w","o","w","o","w",],
["w","oa","oa","oa","oa","gr","oa","as","as","as","as","as","as","as","as","as","b","w","o","o","o","w","o","o","o","w","o","w","o","w",],
["w","gr","gr","gr","gr","gr","oa","as","as","as","as","as","as","as","as","as","as","op","o","o","o","o","o","o","o","w","o","w","o","w",],
["w","oa","oa","oa","oa","oa","oa","ash","ash","ash","ash","ash","ash","ash","ash","ash","b","w","o","o","o","w","o","o","o","w","o","w","o","w",],
["w","as","as","as","as","as","as","as","as","as","as","as","as","as","as","as","b","w","o","o","o","o","o","o","o","w","o","w","o","w",],
["w","as","as","as","as","as","as","as","as","as","as","as","as","as","as","as","oa","w","o","o","o","w","o","o","o","w","o","w","o","w",],
["w","ash","ash","ash","ash","ash","ash","ash","ash","ash","ash","ash","as","as","as","as","oa","w","o","o","o","w","o","o","o","o","o","w","o","w",],
["w","as","as","as","as","as","as","as","as","as","as","as","asv","as","as","as","oa","w","o","o","o","w","w","w","w","w","w","w","o","w",],
["w","as","as","as","as","as","as","as","as","as","as","as","asv","as","as","as","oa","w","o","o","o","w","o","o","o","o","o","o","o","w",],
["w","oa","oa","oa","oa","oa","oa","oa","oa","oa","as","as","asv","as","as","oa","oa","w","w","w","w","w","o","w","w","w","w","w","w","w",],
["w","gr","gr","gr","gr","gr","gr","gr","gr","oa","w","as","asv","as","b","oa","gr","w","w","w","w","w","o","ws","o","o","o","o","w","w",],
["w","w","w","w","w","w","w","w","w","w","w","as","asv","as","w","w","w","w","w","w","w","w","o","w","o","o","o","o","w","w",],
["w","gr","gr","gr","gr","gr","gr","w","gr","oa","as","as","asv","as","as","oa","gr","w","w","w","w","w","o","w","o","o","o","o","w","w",],
["w","oa","oa","oa","oa","oa","gr","w","bg","oa","as","as","asv","as","as","oa","bg","w","w","w","w","w","o","w","w","w","w","w","w","w",],
["w","w","w","w","w","oa","gr","w","gr","oa","as","as","asv","as","as","oa","gr","w","w","w","w","w","o","w","w","w","w","o","w","w",],
["w","w","w","w","w","oa","gr","w","bg","oa","as","as","asv","as","as","oa","bg","w","w","w","w","w","o","w","w","w","w","o","w","w",],
["w","w","w","w","w","oa","gr","w","gr","oa","oa","oa","oa","oa","oa","oa","gr","o","o","o","o","o","o","o","o","o","o","o","w","w",],
["w","w","w","w","w","oa","gr","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w",],
["w","w","w","w","w","oa","gr","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w",],
["w","w","w","w","w","oa","gr","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w",],
["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w",],
         ];
   
   var teleportX = 400;
   var teleportY = -50;

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

