console.log("working");

const catImage = document.querySelector('.catImage');
const toggleFrameBtn = document.querySelector('.toggleFrame');
const zoomInBtn = document.querySelector('.zoomIn');
const zoomOutBtn = document.querySelector('.zoomOut');

let zoomLevel = 1;

const toggleFrameHandler = function () {
    if(catImage.classList.contains('imageFrame')){
        catImage.classList.remove('imageFrame')
    } else {
        catImage.classList.add('imageFrame')
    }
}

const zoomInBtnHandler = function () {
    zoomLevel++;
    if(zoomLevel < 4){
        catImage.width *= zoomLevel; 
    } else {
        zoomLevel--;
    }
    
}

const zoomOutBtnHandler = function () {
    if(catImage.width>catImage.naturalWidth){
        //catImage.width = catImage.width - (catImage.width - catImage.naturalWidth)
        catImage.width = catImage.width / zoomLevel;
        zoomLevel--;
    }
}

toggleFrameBtn.addEventListener('click', toggleFrameHandler)
zoomInBtn.addEventListener('click', zoomInBtnHandler)
zoomOutBtn.addEventListener('click', zoomOutBtnHandler)
