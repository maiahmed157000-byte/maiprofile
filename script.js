const typing=
document.getElementById(
"typing"
);

const text=
"Hello I'm Mai 👋";

let i=0;

function typeEffect(){

if(i<text.length){

typing.innerHTML+=
text.charAt(i);

i++;

setTimeout(
typeEffect,
100
);

}

}

typeEffect();


//dark mode

const modeBtn=
document.getElementById(
"modeBtn"
);

modeBtn.onclick=()=>{

document.body
.classList
.toggle("dark");

};


//background

const hero=
document.querySelector(
".hero"
);

const button=
document.getElementById(
"changeBtn"
);

button.onclick=()=>{

const colors=[

"linear-gradient(to right,#141e30,#243b55)",

"linear-gradient(to right,#ff512f,#dd2476)",

"linear-gradient(to right,#00c6ff,#0072ff)"

];

hero.style.background=

colors[Math.floor(
Math.random()*3
)];

};


//scroll

const topBtn=
document.getElementById(
"topBtn"
);

window.onscroll=()=>{

if(window.scrollY>300)

topBtn.style.display="block";


else

topBtn.style.display="none";


};

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


//CRUD + localStorage

class TaskManager{

constructor(){

this.tasks=

JSON.parse(

localStorage.getItem(
"tasks"
)

)||[];

}

add(task){

this.tasks.push(
task
);

this.save();

}

save(){

localStorage.setItem(

"tasks",

JSON.stringify(this.tasks
)

);

}

show(){

taskList.innerHTML="";

this.tasks.forEach(

task=>{

taskList.innerHTML+=

`<li>${task}</li>`;

}

);

}

}

const manager=new TaskManager();

const taskInput=document.getElementById(
"taskInput"
);


const taskList=document.getElementById(
"taskList"
);

document
.getElementById(
"addTask"
)

add.
onclick=()=>{

manager.add(

taskInput.value

);

manager.show();

taskInput.value="";

};

manager.show();


//validation

const email=document.getElementById(
"email"
);


email.onblur=()=>{

if(

!email.value
.includes("@")

){

alert(
"Invalid Email"
);

}

};


//Async JS

document
.getElementById(
"weatherBtn"
)

.onclick=async()=>{

const city=

document
.getElementById(
"city"
).value;

document
.getElementById(
"weatherResult"
)

.innerHTML=

"Loading...";

setTimeout(()=>{

document
.getElementById(
"weatherResult"
)

.innerHTML=

`Weather in
${city}
Sunny ☀`;

},1000);

};
