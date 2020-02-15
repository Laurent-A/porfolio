/*PARTICLE*/
function particleNavBar() {


particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
/*var count_particles, stats, update; 
//stats = new Stats; 
stats.setMode(0); 
stats.domElement.style.position = 'absolute'; 
stats.domElement.style.left = '0px'; 
stats.domElement.style.top = 
document.body.appendChild(stats.domElement); 
count_particles = document.querySelector('.js-count-particles'); */
update = function() { 
    stats.begin(); 
    stats.end(); 
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { 
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
        } 
requestAnimationFrame(update);
 }; requestAnimationFrame(update);;
}

particleNavBar();

/*titre*/
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
console.log(textWrapper);
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  /**BODY */
  window.addEventListener('scroll', () => {
    let page = this;
    let pageTop = this.scrollY;
    let pageHeight = this.outerHeight / 2 ;
    
    let frames = document.querySelectorAll('.scrollAnim');
    frames.forEach( frame => {
      let frameTop = frame.offsetTop;
      let frameHeight = frame.offsetHeight;
      
      if ( pageTop  >= frameTop - pageHeight &&
          pageTop  < frameTop + frameHeight/2 ){
        frame.classList.add('anim');
      }else{
        frame.classList.remove('anim');
      }
    });
  });

  /*SMOOTH SCROLL*/
  // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

/* ROAD */

var c = document.getElementById('bubbles'),

  ctx = c.getContext('2d'),
  
  width = window.innerWidth,
  height = window.innerHeight,
  particles = 60,
  minRadius = 1,
  maxRadius = 10,
  speed = 0.02,
  x = width / particles;

// Bubbles
var Bubbles = [];

for (var i = 0; i < particles; i++) {
  Bubbles.push({
    x: i * x,
    y: height * Math.random(),
    r: minRadius + Math.random() * (maxRadius - minRadius),
    speed: 10 * Math.random()
  });
}

function bubble() {

  c.width = width;
  c.height = height;
  for (i = 0; i < Bubbles.length; i++) {
    var b = Bubbles[i];
    console.log(i, b);
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);
    
    b.alpha = .5 * (b.y / height);
    b.speed += speed;
    
    ctx.strokeStyle = "rgba(145, 93, 202, .5)";
    ctx.stroke();
    ctx.fillStyle = "hsla(0, 0%, 65%," + b.alpha + ")";
    ctx.fill();
    b.y -= b.speed;
    if (b.y < 0) {
      b.y = height;
      b.speed = Math.random() * 5;
    }
  }
}



// Draw
function draw() {
  bubble();
  window.requestAnimationFrame(draw);
}

// Resize Canvas
function resizeCanvas() {
  //width = window.innerWidth,
  //height = window.innerHeight;
  //c.width = width;
  //c.height = height;
  draw();
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas, false);

// COORDONEE

function envoyer() {
  alert("votre message est bien parti")
}