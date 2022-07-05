const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
})

document.addEventListener('click', ()=>{
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove("expand");
    }, 500);
})

function changebg(){
    document.getElementById('projets').style.background = "black";
    document.getElementById('projets2').style.background = "black";
    document.getElementById('title-projet').style.color = "#7451EB";
}

function changebginit(){
    document.getElementById('projets').style.background = "#3e3e3e";
    document.getElementById('projets2').style.background = "#3e3e3e";
    document.getElementById('title-projet').style.color = "white";
}

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 400) {
      $('#backtop').show();
    } else {
      $('#backtop').hide();
    }
  });


  "use strict";
  window.addEventListener("DOMContentLoaded", (event) => {
    /* MENU */
    const LeMenu = document.getElementById("LeMenu");
    const CmdMenu = document.getElementById("CmdMenu");
    CmdMenu.addEventListener('click',function(){
      LeMenu.style.display = (LeMenu.style.display == 'none')? '':'none';
    });
    // au chargement de la page
    window.onload = function(){
      // on teste la largeur de la fenêtre
      var ww = window.innerWidth; // en pixels
      LeMenu.style.display = ( ww > 768 )? '':'none';
      CmdMenu.style.display = ( ww > 768 )? 'none':'';
    };
    // au redimensionnement de la fenêtre
    window.onresize = function(){
      // on teste la largeur de la fenêtre
      var ww = window.innerWidth; // en pixels
      LeMenu.style.display = ( ww > 768 )? '':'none';
      CmdMenu.style.display = ( ww > 768 )? 'none':'';
    };
  
  });