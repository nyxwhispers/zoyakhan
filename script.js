// ===========================================
// NYX
// script.js
// Part A
// ===========================================
// ===========================================
// Progress
// ===========================================

let completedSections=0;

let cameraDone=false;
let flowerDone=false;
let memoryDone=false;
let musicDone=false;

function unlockLetter(){

if(cameraDone && flowerDone && memoryDone && musicDone){

const card=document.getElementById("letterCard");

card.classList.remove("locked");

document.getElementById("letterStatus").innerHTML=

"Ready whenever you are... 🤍";

}

}
const loadingScreen = document.getElementById("loadingScreen");
const passwordScreen = document.getElementById("passwordScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const homeScreen = document.getElementById("homeScreen");

const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const beginBtn = document.getElementById("beginBtn");

const wrongPassword = document.getElementById("wrongPassword");

// -------------------------------------------
// Loading Screen (5 seconds)
// -------------------------------------------

setTimeout(() => {

    loadingScreen.classList.add("hidden");

    passwordScreen.classList.remove("hidden");

}, 5000);

// -------------------------------------------
// Password
// -------------------------------------------

function checkPassword(){

    let value = passwordInput.value
        .toLowerCase()
        .replace(/\s+/g,"");

    if(value === "amongus"){

        passwordScreen.classList.add("hidden");

        welcomeScreen.classList.remove("hidden");

    }

    else{

        wrongPassword.innerText = "Wrong password 🥹";

        passwordInput.animate([

            {transform:"translateX(-6px)"},

            {transform:"translateX(6px)"},

            {transform:"translateX(-6px)"},

            {transform:"translateX(6px)"},

            {transform:"translateX(0px)"}

        ],{

            duration:350

        });

    }


}

unlockBtn.addEventListener("click",checkPassword);

passwordInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        checkPassword();

    }

});

// -------------------------------------------
// Welcome
// -------------------------------------------

beginBtn.addEventListener("click",()=>{

    welcomeScreen.classList.add("fadeOut");

    setTimeout(()=>{

        welcomeScreen.classList.add("hidden");

        welcomeScreen.classList.remove("fadeOut");

        homeScreen.classList.remove("hidden");

        homeScreen.classList.add("fadeIn");

    },700);

});
// ===========================================
// Popup System
// ===========================================

const popupPage = document.getElementById("popupPage");
const popupContent = document.getElementById("popupContent");
const closePopup = document.getElementById("closePopup");

function openPopup(html){

    popupContent.innerHTML = html;

    popupPage.classList.remove("hidden");

}

closePopup.addEventListener("click",()=>{

    popupPage.classList.add("hidden");

});

// ===========================================
// Camera Section
// ===========================================

document.getElementById("cameraCard").addEventListener("click",()=>{

openPopup(`

<div class="cameraSection">

<h1>A Few Smiles 🤍</h1>

<p class="cameraIntro">

Four tiny moments that somehow mean a lot more.

</p>

<div class="cameraBody">

<div class="cameraLens"></div>

<div class="cameraFlash"></div>

</div>

<button id="takePhotoBtn">

Take a photo 📸

</button>

<div class="progressText">

Photo 0 / 4

</div>

<div class="progressDots">

<span></span>

<span></span>

<span></span>

<span></span>

</div>

<div id="photoArea">

</div>

</div>

`);

});
// ===========================================
// Camera Logic
// ===========================================

const photos=[

{
image:"images/photo1.jpg",
caption:"Flex yrrr 😭🤍"
},

{
image:"images/photo2.jpg",
caption:"Babeeee 🥹"
},

{
image:"images/photo3.jpg",
caption:"My blushing queen... those cheekssss 🫠🤍"
},

{
image:"images/photo4.jpg",
caption:"My cattt 🐱🤍"
}

];

let currentPhoto=0;

document.addEventListener("click",(e)=>{

if(e.target.id!=="takePhotoBtn") return;

if(currentPhoto>=photos.length) return;

const flash=document.querySelector(".cameraFlash");
const camera=document.querySelector(".cameraBody");

flash.classList.add("flash");
camera.classList.add("shake");

setTimeout(()=>{

flash.classList.remove("flash");
camera.classList.remove("shake");

},300);

const area=document.getElementById("photoArea");
const takeBtn=document.getElementById("takePhotoBtn");
if(currentPhoto===0){

    camera.style.display="none";

takeBtn.innerText="Next Photo 🤍";
}

area.innerHTML += `

<div class="polaroid">

<img src="${photos[currentPhoto].image}">

<p>${photos[currentPhoto].caption}</p>

</div>

`;

document.querySelector(".progressText").innerText=

`Photo ${currentPhoto+1} / 4`;

const dots=document.querySelectorAll(".progressDots span");

dots[currentPhoto].style.background="#f4b9cb";

currentPhoto++;

if(currentPhoto===4){
    cameraDoneone = true;
unlockLetter();
document.querySelector(".progressText").innerHTML=
"That's all...<br>but somehow still not enough. 🤍";
cameraDonene = true;
unlockLetter();
}


});
// ===========================================
// Little Things
// ===========================================

const littleThings = [

"I wish i could be one of ur tears... so i could be born in ur eyes... run down ur cheeks... and die on ur lips mon coeur 🤍",

"Ur smile is the most beautiful curve i have ever seen. 🤍",

"Loving u and bieng loved by u is the mission impossible that couldnt even Tom Cruise would have accomplished. 😭🤍",

"Tum meri jaanu ho hehe 🥹🤍"

];

document.getElementById("flowerCard").addEventListener("click",()=>{

openPopup(`

<div class="flowerSection">

<div id="flowerEmoji">🌱</div>

<p id="flowerText">

Click below...

</p>

<button id="flowerBtn">

Reveal 🌸

</button>

</div>

`);

let step=0;

const flower=document.getElementById("flowerEmoji");
const text=document.getElementById("flowerText");
const btn=document.getElementById("flowerBtn");

const flowers=["🌱","🌿","🌷","🌸"];

btn.addEventListener("click",()=>{

if(step<littleThings.length){

flower.innerText=flowers[step];

text.innerText=littleThings[step];

step++;

}

if(step===littleThings.length){

btn.innerText="Hehe... that's all 🤍";
flowerDoneone = true;
unlockLetter();

}

});

});
// ===========================================
// One Memory
// ===========================================

document.getElementById("memoryCard").addEventListener("click",()=>{

openPopup(`
    
<div class="memorySection">

<h1>📖 One Memory</h1>

<div class="diaryPage">

<p>

There isn't a specific date for this...

but I'll never forget it.

<br><br>

I remember being completely exhausted.

Everything felt heavy.

I was tired...

sad...

drained...

and honestly, I had almost given up.

<br><br>

I wasn't easy to deal with that day.

But you never got annoyed.

You never left.

You stayed.

You listened.

You handled me with so much patience and care.

<br><br>

That day made me realize something.

Love isn't always grand gestures.

Sometimes...

it's simply choosing to stay when leaving would've been easier.

<br><br>

Thank you...

for being there for me, Mon Cœur. 🤍

</p>

</div>

</div>

`);

memoryDone = true;
unlockLetter();

});
// ===========================================
// Final Letter
// ===========================================

document.getElementById("letterCard").addEventListener("click",()=>{

openPopup(`

    <div class="letterSection">

        <h1>💌 for you</h1>

        <p class="letterIntro">Read patiently... okay? 🤍</p>

        <div class="letterPaper">

            <p>So u reached till here atlastt!!!! Hehe…… dekho I did all this just for for YOU!!..... for my queen and for my grace. Hum dono among us mien mily thy and like who would have thought we would come this far???? Its just soooo unreal….. and its not like we are just passing time… we actually love each other</p>

            <p>Eversince turning 14 I faced every problem in the flippin world, paretns sy relation acha hy nhi, dosto ko btany ka ko faida nhi tha, like I just needed someone to be MINE and to be HERS. But aaj kl no one takes this thing srsly… I am the only gadha u will find that wants to just be locked down with one girl that he loves and spend the rest of his life treating her the best he can. I was like broke especially after that ex thingy but u healed me…. U are funny, caring, lovely, talkative, possessive too hehe ik and like everythingggg</p>

            <p>I never said this out of respect for her but u should hear the TRUTH. You are WAYYYYYY BETTER then aima….. like not talking about physical appearances (yrrr u slayyy in that too!!!u are just goateddddd…. Stunning) like yk the personality….. theres this unique and different feeling with u that I feel… I am damn sure that’s lovee!!!!!</p>

            <p>You are so niceeee zoya like mughy nhi pta how to express it huhhhh. You remember when one day I like directly asked u about this relation thingy and u said that u haven’t moved on properly… I really made up my mind that I would neverrr bring this thing again but next day u said that u had moved on and you don’t know howwwww happy I wassss. You really changed ur mind just to get closer to mee and I cant thnkyou much about itt. You are mine and mine only and I am urs and urs onlyyyy okii????</p>

            <p>Your voice and the way u talkkk its just soo cute ngl its really fcking cute. U asked me why I was so serious on the call??? Cuz I was trying to control my idiot blushing face because of urr cuteee voice and accent. I was just listening to u and not payed attention to what I was replying with. I was so happy that u let me call u and like I really wanted to hear youuu… it was magical</p>

            <p>I really really really want u in my life and I hope that I become worthy of it….. I will work on myself even more just to get you!!! Like I don’t even know how do I stay on one topic… like ur eyes are as deep as a black hole….. ur beauty as Quasar-birghtest thing in the universe….. ur smileeeeee as the radiant creasent moon….. my thoughts are all about u everytime…. And like I am rogue without you-rogue is the lonliest plannet.</p>

            <p>I love you meri jaan… domain expansion---"love” activated… mwahhhhh 😘</p>

            <div style="text-align:center;margin-top:40px;">
                <button id="finishBtn">Continue... 🤍</button>
            </div>

        </div>

    </div>

    `);

    document.addEventListener("click",(e)=>{
        if(e.target.id==="finishBtn"){
            openPopup(`
                <div style="text-align:center;padding:80px 20px;">
                    <h1>🤍</h1>
                    <h2>Okii this was itt hehe...</h2>
                    <p>now keep thinking mwahhh 😘</p>
                    <p>— Yours,<br>Ali 🤍</p>
                </div>
            `);
        }
    });


});
// ===========================================
// Music Section
// ===========================================

document.getElementById("musicCard").addEventListener("click",()=>{

openPopup(`

<div class="musicSection">

<img src="images/obhordo-prem.jpg" class="albumCover">

<h1>Obhordo Prem</h1>

<h3>Arijit Singh</h3>

<audio id="songPlayer">
<source src="music/obhordo-prem.mp3" type="audio/mpeg">
</audio>

<div class="progressBar">
<div id="musicProgress" class="progressFill"></div>
</div>

<div class="timeRow">
<span id="currentTime">0:00</span>
<span id="totalTime">0:00</span>
</div>

<button id="playSong">
Play our song 🤍
</button>

<p class="musicNote">

<b>Why this song? 🤍</b>

<br><br>

Ahmm ahmm dekhoo i love you hehe 😭🤍

And this song reminds me of u and our relationnnnn heheh.

</p>

</div>

`);

const player=document.getElementById("songPlayer");
const play=document.getElementById("playSong");
const progress=document.getElementById("musicProgress");
const current=document.getElementById("currentTime");
const total=document.getElementById("totalTime");

player.addEventListener("loadedmetadata",()=>{

let m=Math.floor(player.duration/60);
let s=Math.floor(player.duration%60);

total.innerText=`${m}:${String(s).padStart(2,"0")}`;

});

play.addEventListener("click",()=>{

if(player.paused){

player.play();

play.innerText="Pause 🤍";

}else{

player.pause();

play.innerText="Play our song 🤍";

}

});

player.addEventListener("timeupdate",()=>{

let percent=(player.currentTime/player.duration)*100;

progress.style.width=percent+"%";

let m=Math.floor(player.currentTime/60);
let s=Math.floor(player.currentTime%60);

current.innerText=`${m}:${String(s).padStart(2,"0")}`;

});

player.addEventListener("ended",()=>{

play.innerText="Play our song 🤍";

progress.style.width="0%";

current.innerText="0:00";
musicDoneone = true;
unlockLetter();

});

});