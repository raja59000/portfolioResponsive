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
 