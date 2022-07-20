var read = document.getElementById('read');
read.onclick =()=> {
    document.getElementById('dem').style.backgroundColor ="darkslategrey";
}

var open = document.getElementById('open')
open.onclick =()=> {
    document.getElementById('demarcus').style.display = 'block';
    var frame = document.createElement("iframe");
    frame.src = "bills/demarcus.html"
    frame.style.width = "400px";
    frame.style.height = "550px";
    var sub = document.createElement('p');
        sub.innerHTML = 'Subcription has Ended. Please Renew it.';
        sub.style.width = '300px';
        sub.style.height = '30px';
        sub.style.color = 'orangered';
        sub.style.backgroundColor = 'orange';
    
    document.addEventListener('keyup', function(event) {
      if (event.code == 'KeyF') {
        const audio = new Audio();
        audio.src = "Error.wav";
        
        document.getElementById('demarcus').appendChild(sub);
        audio.play()
        setTimeout(() => sub.remove(), 5000)
      }
    });
    var close = document.getElementById('close');
close.onclick =()=> {
  frame.remove();
  document.getElementById('demarcus').style.display = 'none';
  sub.remove();

  
}

var full = document.getElementById('full');
full.onclick =()=> {
  //fix this some time later I am losing my poopoo
  frame.style.width = "1500px";
  frame.style.height = "700px";

}
 




  document.getElementById("demarcus").appendChild(frame);



  
}

dragElement(document.getElementById("demarcus"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



const audio = new Audio();
audio.src = "Error.wav";


