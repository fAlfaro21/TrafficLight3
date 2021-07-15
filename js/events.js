// Level 1)
// Representar un semáforo con 1 luz (círculo negro) y un botón que al hacer click sobre el la luz cambie de color:
// Negro --> Verde --> Ambar --> Rojo --> Verde
// Level 2)
// LO mismo pero con tres luces...
// Estado inicial: Las 3 están en negro
// Estado 1: Verde la primera y el resto negro
// Estado 2: Ambar la segunda y el resto negro
// Estado 3: Rojo la tercera y el resto negro.

const redLight1 = document.getElementById("redLight1");
const redLight2 = document.getElementById("redLight2");
const redLight3 = document.getElementById("redLight3");
let previousColor = "";

function turnOnGreen(newColor){
  
  //Enciende
  redLight1.classList.remove("blackColor");
  redLight1.classList.add(newColor);
    
  //Apaga
  if (previousColor == "orangeColor"){
    redLight2.classList.remove("orangeColor");
    redLight2.classList.add("blackColor");
    previousColor = newColor;

  }
  else if (previousColor == "redColor"){
    redLight3.classList.remove("redColor");
    redLight3.classList.add("blackColor");
    previousColor = newColor;
  }
  else if (previousColor == ""){
    previousColor = newColor;
    previousRedLight = redLight1;
    firstLap = true;
  }
  return previousColor;
}

function turnOnOrange(newColor){
  
  //Enciende
  redLight2.classList.remove("blackColor");
  redLight2.classList.add(newColor);
    
  //Apaga
  if (previousColor == "greenColor"){
    redLight1.classList.remove("greenColor");
    redLight1.classList.add("blackColor");
    previousColor = newColor;
  }
  else if (previousColor == "redColor"){
    redLight3.classList.remove("redColor");
    redLight3.classList.add("blackColor");
    previousColor = newColor;
  }
  else if (previousColor == ""){
    previousColor = newColor;
    previousRedLight = redLight2;
    firstLap = true;
  }
}

function turnOnRed(newColor){
  
  //Enciende
  redLight3.classList.remove("blackColor");
  redLight3.classList.add(newColor);
    
  //Apaga
  if (previousColor == "greenColor"){
    redLight1.classList.remove("greenColor");
    redLight1.classList.add("blackColor");
    previousColor = newColor;
  }
  else if (previousColor == "orangeColor"){
    redLight2.classList.remove("orangeColor");
    redLight2.classList.add("blackColor");
    previousColor = newColor;
  }
  else if (previousColor == ""){
    previousColor = newColor;
  }
}

redLight1.addEventListener ("click", function(){
  turnOnGreen("greenColor");
});
redLight2.addEventListener ("click", function(){
  turnOnOrange("orangeColor");
});
redLight3.addEventListener ("click", function(){
  turnOnRed("redColor");
});





// let enabledButton;
// const button1 = document.getElementById("btn1");
// const img1 = document.getElementById("img1");

// function init(initialState, initialClass, initialText, initialImage){
//   enabledButton = initialState;
//   button1.className += initialClass;
//   button1.innerText = initialText;

//   //Cambiar la imagen
//   img1.src = initialImage;
// }

// init(false, " off", "OFF", "img/balrog.jfif");

// //-------------------------------- CAMBIOS -------------------------------

// function changeState(){
  
//   if (enabledButton){
//     enabledButton = false;
//     //button1.className += " on"; //con el +=, concatena el texto; con el = machacaría el texto. Para efectos de este ejemplo, quiero aniadir la clase on.
//     button1.classList.remove("on");
//     button1.classList.add("off");
//     button1.innerText = "OFF"; //innerText te pega el texto tal cual, mientras que innerHTML te lo interpreta. Se trata de un CONTENEDOR (Texto)
//     img1.src = "img/balrog.jfif";
//   }
//   else{
//     enabledButton = true;
//     //button1.className += " off"; 
//     button1.classList.remove("off");
//     button1.classList.add("on");
//     button1.innerText = "ON";
//     img1.src = "img/newgandalf.jfif";
//   }
// }

// button1.addEventListener ("click", changeState); 

//cuando haga click en "button1", debe ocurrir function changeState. OJO: la function NO LLEVA parentesis: esto es para que no se ejecute nada hasta que no ocurra el click. Una vez que hace el click, se ejecuta la función.