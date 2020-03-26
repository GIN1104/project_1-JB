/*var stickers;
if(localStorage.stickers){
    sticker = JSON.parse(localStorage.stickers)
}

function  printSrickerToHTML(){
    for (var i = 0; i < stickers.length; i++) {
      //console.log(stickers[i]);
        createSticker(stickers[i]);
    }
*/



function createSticker() {

    let task = document.getElementById('task').value,
        date = document.getElementById('date').value,
        time = document.getElementById('time').value;



    var sticker = document.createElement('div');
    sticker.id = 'block';
    sticker.className = 'col-sm-12 sticker';
    document.getElementsByClassName('row')[0].appendChild(sticker);


    var closeBtn = document.createElement('button');
    var glyphIcon = document.createElement('span');
    closeBtn.className = 'btn ';
    closeBtn.id = 'close';
    sticker.appendChild(closeBtn);
    closeBtn.style.display = "none";
    closeBtn.appendChild(glyphIcon);
    glyphIcon.className = 'glyphicon glyphicon-remove-sign';



    sticker.addEventListener('mouseover', function addCloseBtn() {
        closeBtn.style.display = "block";

    });




    var taskArea = document.createElement('textarea');
    taskArea.className = 'taskArea';
    sticker.appendChild(taskArea);
    taskArea.innerHTML = task;


    var dateDiv = document.createElement('div');
    dateDiv.className = 'block-1';
    sticker.appendChild(dateDiv);
    dateDiv.innerHTML = date;


    var timeDiv = document.createElement('div');
    timeDiv.className = 'block-2';
    sticker.appendChild(timeDiv);
    timeDiv.innerHTML = time;




    closeBtn.addEventListener('click', function removeSticker() {

        sticker.remove();

    })





};



/*
for(let i = 0; i < closeBtn.length; i++){
    closeBtn[i].addEventListener('click', function removeSticker(){
       closeBtn = sticker[i].querySelector('button');  
       sticker[i].remove();
    })  
   }; 
  */