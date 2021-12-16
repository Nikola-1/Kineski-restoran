
function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    
  }
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    
  }
  //slider
  var brojac = 1;
  setInterval(function(){
    document.getElementById('radio' + brojac).checked = true;
    brojac++;
    if(brojac>4){
      brojac=1;
    }
  },5000);
