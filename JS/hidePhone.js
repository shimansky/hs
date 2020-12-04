phoneSmall=document.getElementById('phoneSmall');
iconPhone=document.getElementById('iconPhone');

var phoneRu = '<div id="robertIMG"></div><br>Это телефон Лисы!!! Где же она!? Где все люди!??? Почему здесь столько крови? Кажется она пыталась отправить мне сообщение, но не успела.';
var phoneEng = '<div id="robertIMG"></div><br>This is Lisa phone !!! Where is she !? Where are all the people! ??? Why is there so much blood here? It seems she tried to send me a message, but she didnt have time';


function getPhone(){
var p = figure.getBoundingClientRect();
var ph = phoneSmall.getBoundingClientRect();
if (( (p.bottom-ph.bottom)<=25 && (p.bottom-ph.bottom)>=-25 ) && ( (p.right-ph.right)<=25 && (p.right-ph.right)>=-25 ) ) {
    console.log("you have a Lisa mobile phone");
    iconPhone.style.display="inline-block";
    phoneSmall.style.display="none";
    accessCard.play();
    showStory(phoneRu,phoneEng);
  }
}


setInterval(getPhone,200);

