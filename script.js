





const sounds = [
    {
        key: "a",
        soundName: "clap.wav"
    },
    {
        key: "s",
        soundName: "hihat.wav"
    },
    {
        key: "d",
        soundName: "kick.wav"
    },
    {
        key: "f",
        soundName: "openhat.wav"
    },
    {
        key: "g",
        soundName: "boom.wav"
    },
    {
        key: "h",
        soundName: "ride.wav"
    },
    {
        key: "j",
        soundName: "snare.wav"
    },
    {
        key: "k",
        soundName: "tom.wav"
    },
     {
        key: "l",
        soundName: "tink.wav"
    }

]


// window.addEventListener("keydown", checkKeyPressed, false);

function initialize() {
    
    for (let i = 0; i < sounds.length; i++) {

    
    
    document.querySelector(".keyss").innerHTML += `
    
    <div class="key key${sounds[i].key}" onclick="checkKeyPressed(${i})">
    <kbd>${sounds[i].key.toUpperCase()}</kbd>
    <span class="sound">${sounds[i].soundName.split('.').shift()}</span>
  </div>   
    `
    }
}
document.addEventListener('keydown', e => {
    let sound = sounds.filter(sound => sound.key.toLowerCase() == e.key.toLowerCase())[0];
    if (sound) {
     
        new Audio(`sounds/${sound.soundName}`).play();
    }
});

// function checkKeyPressed(evt) {
//     if (evt.keyCode == "65") {
        
//         let clap = new Audio('sounds/clap.wav');
//         clap.play();
        
//     }
//     if (evt.keyCode == "83") {
//         let hihat = new Audio('sounds/hihat.wav');
//         hihat.play();
//     }
//     if (evt.keyCode == "68") {
//         let kick = new Audio('sounds/kick.wav');
//         kick.play();
//         }
//     if (evt.keyCode == "70") {
//         let openhat = new Audio('sounds/openhat.wav');
//         openhat.play();
//     }
//     if (evt.keyCode == "71") {
//         let boom = new Audio('sounds/boom.wav');
//         boom.play();
//     }
//     if (evt.keyCode == "72") {
//         let ride = new Audio('sounds/ride.wav');
//         ride.play();
//     }
//     if (evt.keyCode == "74") {
//         let snare = new Audio('sounds/snare.wav');
//         snare.play();
//     }
//     if (evt.keyCode == "75") {
//         let tom = new Audio('sounds/tom.wav');
//         tom.play();
//     }
//     if (evt.keyCode == "76") {
        
//         let tink = new Audio('sounds/tink.wav');
//         tink.play();
//     }
// }
  
  