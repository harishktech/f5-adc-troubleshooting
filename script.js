function searchCommands(){

let input=document.getElementById("search").value.toLowerCase()

let output=""

commands.forEach(c=>{

if(
c.title.toLowerCase().includes(input) ||
c.cmd.toLowerCase().includes(input) ||
c.desc.toLowerCase().includes(input)
){

output+=`

<div class="card">

<h3>${c.title}</h3>

<p>${c.desc}</p>

<div class="command">${c.cmd}</div>

</div>

`

}

})

document.getElementById("results").innerHTML=output

}