function accepted () {
    alert("Surat dari hati! :)");
    // redireciona para um URL após clicar no SIM
    location.href = "https://alfansatoruu.github.io/amplop/";
  }
  
  function newPosition(min, max) {
    return (Math.random() * (max - min) + min) + "%";
  }
  
  function declined(btn) {
    // btn declarado na função
    btn.style.position = 'absolute';
    btn.style.bottom = newPosition(10, 50);
    btn.style.left = newPosition(10, 50);
    console.log('ops......');
  }