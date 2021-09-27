document.getElementById("burger").onclick = function() {
    open()
  };
  
  function open() {
    document.getElementById("menu").classList.toggle("trigger");
}
document.getElementById("close").onclick = function(){
      document.getElementById("menu").classList.add("trigger");
      
  }


// let headerSlider = new Swiper('.image-slider', {
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true,
//     },
//     initialSlide: 1,
//     direction: 'vertical',
// });

// let teamSlider = new Swiper('.team-slider', {
//     loop: true,
//     autoplay: {
//         delay: 3000,
//         disableOnInteration: false,
//     }

// });



let NewSlider = new Swiper('.news-slider ', {

    loop: true,
    effect: 'coverflow',
    // grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 78,
    coverflowEffect: {
    CSSSelector: 'contain',
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 200,
    slideShadows : false,
    
    },
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },



});



// const anchors = document.querySelectorAll('a[href*="#"]');

// for (let anchor of anchors){
//     anchor.addEventListener("click", function(e){
//         e.preventDefault();
//         const blockID = anchor.getAttribute('href');
//         document.querySelector('' + blockID).scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//         })
//     });
// }


// let popup = document.querySelectorAll('.popup')
// let popupContent = document.querySelectorAll('.popup_content')
// // let slideNews = document.querySelectorAll('.news_drk-filter')
// document.getElementById('slidenews1').click = function(){

//     console.log(popup[0])

// }


// const wrap = document.querySelector('.about');
// const ball = document.querySelector('.ball');
// let { width, height } = ball.getBoundingClientRect();
// [width, height] = [(width / 2) | 0, (height / 2) | 0];
 
// const setBallPosition = ({ x = 0, y = 0 } = {}) => ball.style.transform = `translateX(${x}px) translateY(${y}px)`;
// wrap.addEventListener('mousemove', ({ clientX, clientY }) =>  setBallPosition({ x: clientX - width, y: clientY - height }));
// wrap.addEventListener('mousemove', function(){
//     ball.classList.remove('opaciteee');
//     ball.classList.add('opaciteee2');
// }
// );
// wrap.addEventListener('mouseout', () => setBallPosition());
// wrap.addEventListener('mouseout',function(){
//     ball.classList.add('opaciteee');
//     ball.classList.remove('opaciteee2');

// });




// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    let mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(47.5274998,-122.0298996,14.13), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"color":"#868686"},{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#d2d2d2"}]},{"featureType":"administrative.province","elementType":"geometry","stylers":[{"color":"#676767"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#848484"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#0F1114"},{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#0F1114"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#0F1114"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#0F1114"},{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#0F1114"},{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21},{"color":"#0F1114"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#131E1E"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#3c3c3c"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"lightness":29},{"weight":0.2}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"},{"visibility":"simplified"},{"lightness":"-20"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#373737"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"lightness":16},{"color":"#313131"},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#0F1114"},{"lightness":19},{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"visibility":"on"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    let mapElement = document.querySelector('.maaaap');

    // Create the Google Map using our element and options defined above
    let map = new google.maps.Map(mapElement, mapOptions);


    const iconBase = "../img/"
    // Let's also add a marker while we're at it
    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(47.5279228,-122.0323272,15.13),
        map: map,
        icon: `${iconBase}cardpoint.png`,
        // title: 'Snazzy!'
    });
}