let boxTop = 200;
let boxLeft = 200;



          
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if(keyName === 'ArrowDown'){
    boxTop += 10; 
    document.getElementById("box").style.backgroundImage = "url('img/down.png')"; 
    document.getElementById("box").style.top = `${boxTop}px`; 
  };
  if(keyName === 'ArrowRight'){
    boxLeft += 10;
    document.getElementById("box").style.backgroundImage = "url('img/right.png')";  
    document.getElementById("box").style.left = `${boxLeft}px`;
  }
  if(keyName === 'ArrowUp'){
    boxTop -= 10; 
    document.getElementById("box").style.backgroundImage = "url('img/up.png')"; 
    document.getElementById("box").style.top = `${boxTop}px`;
  }
  if(keyName === 'ArrowLeft'){
    boxLeft -= 10;  
    document.getElementById("box").style.backgroundImage = "url('img/left.png')";
    document.getElementById("box").style.left = `${boxLeft}px`;
  }
});

