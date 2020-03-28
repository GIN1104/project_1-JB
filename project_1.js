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
const LOCAL_STORAGE_KEY = 'stickers';
// Local Storage helpers
const localStorageHelpers = {
    getAll: function(){
        const rawStickers = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(rawStickers){
            return JSON.parse(rawStickers);
        }else{
            return [];
        }
    },
    setAll: function(stickers){
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stickers));
    }
};

// Storage object
const stickerStorage = {
    addSticker: function (stickerModel) {
        const stickers = localStorageHelpers.getAll();
        stickers.push(stickerModel);
        localStorageHelpers.setAll(stickers);
    },
    removeSticker: function (stickerModel) {
        const stickers = localStorageHelpers.getAll();
        const index = stickers.findIndex(s => s.id === stickerModel.id);
        if (index > -1) {
            stickers.splice(index, 1)
            localStorageHelpers.setAll(stickers);
        }
    },
    getAllStickers: function () {
        return localStorageHelpers.getAll();
    }
};
function drawAll(){
    const stickers = stickerStorage.getAllStickers();
    stickers.forEach(createSticker);
}
drawAll();

function createSticker(initialStickerModel) {

    const stickerModel = initialStickerModel || {
        id: `sticker-${Date.now()}`,
        task: document.getElementById('task').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value
    };


    const sticker = document.createElement('div');
    sticker.id = stickerModel.id;
    sticker.className = 'col-sm-12 sticker';
    document.getElementsByClassName('row')[0].appendChild(sticker);


    const closeBtn = document.createElement('button');
    const glyphIcon = document.createElement('span');
    closeBtn.className = 'btn ';
    closeBtn.id = 'close';
    sticker.appendChild(closeBtn);
    closeBtn.style.display = "none";
    closeBtn.appendChild(glyphIcon);
    glyphIcon.className = 'glyphicon glyphicon-remove-sign';

    sticker.addEventListener('mouseover', function addCloseBtn() {
        closeBtn.style.display = "block";

    });

    const taskArea = document.createElement('textarea');
    taskArea.className = 'taskArea';
    sticker.appendChild(taskArea);
    taskArea.innerHTML = stickerModel.task;

    const dateDiv = document.createElement('div');
    dateDiv.className = 'block-1';
    sticker.appendChild(dateDiv);
    dateDiv.innerHTML = stickerModel.date;

    const timeDiv = document.createElement('div');
    timeDiv.className = 'block-2';
    sticker.appendChild(timeDiv);
    timeDiv.innerHTML = stickerModel.time;

    if(!initialStickerModel) stickerStorage.addSticker(stickerModel);
    closeBtn.addEventListener('click', function removeSticker() {
        stickerStorage.removeSticker(stickerModel);
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