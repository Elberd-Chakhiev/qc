let PhSource = document.getElementById('man1');
let PhSource2 = document.getElementById('man2');
let PhSource3 = document.getElementById('man3');
let info = document.getElementById('firstinfo');
let info2 = document.getElementById('firstinfo2');
let info3 = document.getElementById('firstinfo3');


const animItems = document.querySelectorAll('._anim-items_margin');


if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight ){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < animItemOffset + animItemHeight){
                animItem.classList.add('_active');
                
            }else{
                animItem.classList.remove('_active');
                
            }
        }
    }

    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}

const animItems2 = document.querySelectorAll('._anim-items_p');




document.getElementById('alex').onmousemove = function() {


                    setTimeout(function(){
            PhSource.classList.add('normalize_team');
            PhSource.classList.remove('effects_teams'); 
    
        }, .0001);


        info.classList.add('txtshow');
        info.classList.remove('txtfade');

    
};


document.getElementById('alex').onmouseout = function(){
    PhSource.classList.add('effects_teams');
    PhSource.classList.remove('normalize_team');

    info.classList.remove('txtshow');
    info.classList.add('txtfade');
};



document.getElementById('egor').onmousemove = function() {


                    setTimeout(function(){
            PhSource2.classList.add('normalize_team');
            PhSource2.classList.remove('effects_teams'); 
    
        }, .0001);


        info2.classList.add('txtshow');
        info2.classList.remove('txtfade');

    
};


document.getElementById('egor').onmouseout = function(){
    PhSource2.classList.add('effects_teams');
    PhSource2.classList.remove('normalize_team');

    info2.classList.remove('txtshow');
    info2.classList.add('txtfade');
};




document.getElementById('max').onmousemove = function() {


                    setTimeout(function(){
            PhSource3.classList.add('normalize_team');
            PhSource3.classList.remove('effects_teams'); 
    
        }, .0001);


        info3.classList.add('txtshow');
        info3.classList.remove('txtfade');

    
};


document.getElementById('max').onmouseout = function(){
    PhSource3.classList.add('effects_teams');
    PhSource3.classList.remove('normalize_team');

    info3.classList.remove('txtshow');
    info3.classList.add('txtfade');
};


// let title = document.getElementById('title');
// let p = document.getElementById('paragraphe');


let title1 = document.querySelectorAll('.scripttake');
let videoPlayer = document.getElementById('activiesBg');
// console.log(videoPlayer)


document.getElementById('am1').onmousemove = function(){

    title1[0].classList.add('opastrans2');
    title1[6].classList.add('opastrans2');
    title1[0].classList.remove('opastrans');
    title1[6].classList.remove('opastrans');


    title1[1].classList.remove('opastrans2');
    title1[1].classList.add('opastrans');
    title1[7].classList.remove('opastrans2');
    title1[7].classList.add('opastrans');

    title1[2].classList.remove('opastrans2');
    title1[2].classList.add('opastrans');
    title1[8].classList.remove('opastrans2');
    title1[8].classList.add('opastrans');

    
    title1[3].classList.remove('opastrans2');
    title1[3].classList.add('opastrans');
    title1[9].classList.remove('opastrans2');
    title1[9].classList.add('opastrans');

    
    title1[4].classList.remove('opastrans2');
    title1[4].classList.add('opastrans');
    title1[10].classList.remove('opastrans2');
    title1[10].classList.add('opastrans');


    title1[5].classList.remove('opastrans2');
    title1[5].classList.add('opastrans');
    title1[11].classList.remove('opastrans2');
    title1[11].classList.add('opastrans');
    // videoPlayer.currentTime = 0;

    
};

document.getElementById('am1').onmouseout = function(){

    title1[0].classList.remove('opastrans2');
    title1[6].classList.remove('opastrans2');
    title1[0].classList.add('opastrans');
    title1[6].classList.add('opastrans');

};


document.getElementById('am2').onmousemove = function(){

    title1[1].classList.add('opastrans2');
    title1[7].classList.add('opastrans2');
    title1[1].classList.remove('opastrans');
    title1[7].classList.remove('opastrans');


    title1[0].classList.remove('opastrans2');
    title1[0].classList.add('opastrans');
    title1[6].classList.remove('opastrans2');
    title1[6].classList.add('opastrans');

    title1[2].classList.remove('opastrans2');
    title1[2].classList.add('opastrans');
    title1[8].classList.remove('opastrans2');
    title1[8].classList.add('opastrans');

    
    title1[3].classList.remove('opastrans2');
    title1[3].classList.add('opastrans');
    title1[9].classList.remove('opastrans2');
    title1[9].classList.add('opastrans');

    
    title1[4].classList.remove('opastrans2');
    title1[4].classList.add('opastrans');
    title1[10].classList.remove('opastrans2');
    title1[10].classList.add('opastrans');
    // videoPlayer.currentTime = 1.2;

    
};

document.getElementById('am2').onmouseout = function(){

    title1[1].classList.remove('opastrans2');
    title1[7].classList.remove('opastrans2');
    title1[1].classList.add('opastrans');
    title1[7].classList.add('opastrans');

};


document.getElementById('am3').onmousemove = function(){

    title1[2].classList.add('opastrans2');
    title1[8].classList.add('opastrans2');
    title1[2].classList.remove('opastrans');
    title1[8].classList.remove('opastrans');


    title1[1].classList.remove('opastrans2');
    title1[1].classList.add('opastrans');
    title1[7].classList.remove('opastrans2');
    title1[7].classList.add('opastrans');

    title1[0].classList.remove('opastrans2');
    title1[0].classList.add('opastrans');
    title1[6].classList.remove('opastrans2');
    title1[6].classList.add('opastrans');

    
    title1[3].classList.remove('opastrans2');
    title1[3].classList.add('opastrans');
    title1[9].classList.remove('opastrans2');
    title1[9].classList.add('opastrans');

    
    title1[4].classList.remove('opastrans2');
    title1[4].classList.add('opastrans');
    title1[10].classList.remove('opastrans2');
    title1[10].classList.add('opastrans');

    // videoPlayer.currentTime = 2.4;
    
};

document.getElementById('am3').onmouseout = function(){

    title1[2].classList.remove('opastrans2');
    title1[8].classList.remove('opastrans2');
    title1[2].classList.add('opastrans');
    title1[8].classList.add('opastrans');

};


document.getElementById('am4').onmousemove = function(){

    title1[3].classList.add('opastrans2');
    title1[9].classList.add('opastrans2');
    title1[3].classList.remove('opastrans');
    title1[9].classList.remove('opastrans');


    title1[1].classList.remove('opastrans2');
    title1[1].classList.add('opastrans');
    title1[7].classList.remove('opastrans2');
    title1[7].classList.add('opastrans');

    title1[0].classList.remove('opastrans2');
    title1[0].classList.add('opastrans');
    title1[6].classList.remove('opastrans2');
    title1[6].classList.add('opastrans');

    
    title1[2].classList.remove('opastrans2');
    title1[2].classList.add('opastrans');
    title1[8].classList.remove('opastrans2');
    title1[8].classList.add('opastrans');

    
    title1[4].classList.remove('opastrans2');
    title1[4].classList.add('opastrans');
    title1[10].classList.remove('opastrans2');
    title1[10].classList.add('opastrans');
    // videoPlayer.currentTime = 3.6;

    
};

document.getElementById('am4').onmouseout = function(){

    title1[3].classList.remove('opastrans2');
    title1[9].classList.remove('opastrans2');
    title1[3].classList.add('opastrans');
    title1[9].classList.add('opastrans');

};



document.getElementById('am5').onmousemove = function(){

    title1[4].classList.add('opastrans2');
    title1[10].classList.add('opastrans2');
    title1[4].classList.remove('opastrans');
    title1[10].classList.remove('opastrans');


    title1[1].classList.remove('opastrans2');
    title1[1].classList.add('opastrans');
    title1[7].classList.remove('opastrans2');
    title1[7].classList.add('opastrans');

    title1[0].classList.remove('opastrans2');
    title1[0].classList.add('opastrans');
    title1[6].classList.remove('opastrans2');
    title1[6].classList.add('opastrans');

    
    title1[2].classList.remove('opastrans2');
    title1[2].classList.add('opastrans');
    title1[8].classList.remove('opastrans2');
    title1[8].classList.add('opastrans');

    
    title1[3].classList.remove('opastrans2');
    title1[3].classList.add('opastrans');
    title1[9].classList.remove('opastrans2');
    title1[9].classList.add('opastrans');


    // videoPlayer.currentTime = 4.8;
};

document.getElementById('am5').onmouseout = function(){

    title1[4].classList.remove('opastrans2');
    title1[10].classList.remove('opastrans2');
    title1[4].classList.add('opastrans');
    title1[10].classList.add('opastrans');

};


document.getElementById('am6').onmousemove = function(){

    title1[5].classList.add('opastrans2');
    title1[11].classList.add('opastrans2');
    title1[5].classList.remove('opastrans');
    title1[11].classList.remove('opastrans');


    title1[1].classList.remove('opastrans2');
    title1[1].classList.add('opastrans');
    title1[7].classList.remove('opastrans2');
    title1[7].classList.add('opastrans');

    title1[0].classList.remove('opastrans2');
    title1[0].classList.add('opastrans');
    title1[6].classList.remove('opastrans2');
    title1[6].classList.add('opastrans');

    
    title1[2].classList.remove('opastrans2');
    title1[2].classList.add('opastrans');
    title1[8].classList.remove('opastrans2');
    title1[8].classList.add('opastrans');

    
    title1[3].classList.remove('opastrans2');
    title1[3].classList.add('opastrans');
    title1[9].classList.remove('opastrans2');
    title1[9].classList.add('opastrans');

    title1[4].classList.remove('opastrans2');
    title1[4].classList.add('opastrans');
    title1[10].classList.remove('opastrans2');
    title1[10].classList.add('opastrans');
    // videoPlayer.currentTime = 5;
};

document.getElementById('am6').onmouseout = function(){

    title1[5].classList.remove('opastrans2');
    title1[11].classList.remove('opastrans2');
    title1[5].classList.add('opastrans');
    title1[11].classList.add('opastrans');

};
