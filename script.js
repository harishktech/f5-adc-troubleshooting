function loadPage(page){

let c = document.getElementById("content")
let streamInterval;

/* Dashboard */
if(page === "dashboard"){

c.innerHTML = `

<h2 style="padding:20px;">ADC Monitoring Dashboard</h2>

<div class="card">
<canvas id="trafficChart"></canvas>
</div>

`;

/* Ensure DOM is ready */
setTimeout(() => {
    loadCharts();
}, 200);

}

/* LTM */
else if(page === "ltm"){

c.innerHTML = `
<h2>LTM Troubleshooting</h2>

<div class="card">
<div class="command">tmsh show ltm virtual</div>
<div class="command">tmsh show ltm pool</div>
<div class="command">tmsh show sys connection</div>
</div>
`

}

/* SSL */
else if(page === "ssl"){

c.innerHTML = `
<h2>SSL Debug</h2>

<div class="card">
<div class="command">tmsh list ltm profile client-ssl</div>
<div class="command">openssl s_client -connect VIP:443</div>
</div>
`

}

/* GTM */
else if(page === "gtm"){

c.innerHTML = `
<h2>GTM DNS</h2>

<div class="card">
<div class="command">tmsh list gtm wideip</div>
<div class="command">tmsh show gtm dns</div>
</div>
`

}

/* TCPDUMP */
else if(page === "tcpdump"){

c.innerHTML = `
<h2>Packet Capture</h2>

<div class="card">

<input id="ip" placeholder="IP">
<input id="port" placeholder="Port">

<button onclick="gen()">Generate</button>

<div id="out"></div>

</div>
`

}

/* AI Assist */
else if(page === "ai"){

c.innerHTML = `
<h2>AI Troubleshooting</h2>

<input id="issue" placeholder="Describe issue">

<button onclick="analyze()">Analyze</button>

<div id="solution"></div>
`

}

}

/* TCPDUMP */
function gen(){

let ip = document.getElementById("ip").value
let port = document.getElementById("port").value

document.getElementById("out").innerHTML =
"tcpdump -i 0.0:nnn host " + ip + " and port " + port

}

/* AI */
function analyze(){

let issue = document.getElementById("issue").value.toLowerCase()

let res = ""

if(issue.includes("pool")){

res = "Check pool: tmsh show ltm pool"

}
else if(issue.includes("ssl")){

res = "Check SSL: tmsh list ltm profile client-ssl"

}
else{

res = "Try keywords: pool, ssl, traffic"

}

document.getElementById("solution").innerHTML = res

}

/* Dark mode */
function toggleMode(){

document.body.classList.toggle("dark")

}

let trafficChart;
let trafficData = [120, 150, 180, 200, 170];
let labels = ["1","2","3","4","5"];

let trafficChart;
let streamInterval;

function loadCharts(){

let canvas = document.getElementById("trafficChart");

if(!canvas){
console.log("Canvas not found ❌");
return;
}

console.log("Chart loading ✅");

/* Destroy old chart */
if(trafficChart){
trafficChart.destroy();
}

/* Initial Data */
let data = [100,150,200,180,220];
let labels = ["1","2","3","4","5"];

/* Create Chart */
trafficChart = new Chart(canvas, {
type: "line",
data: {
labels: labels,
datasets: [{
label: "Requests/sec",
data: data,
borderWidth: 2
}]
},
options: {
animation: false
}
});

/* Start live updates */
if(streamInterval) clearInterval(streamInterval);

streamInterval = setInterval(() => {

data.shift();
labels.shift();

let newVal = Math.floor(Math.random()*300)+100;

data.push(newVal);
labels.push(new Date().toLocaleTimeString());

trafficChart.update();

}, 1000);

}

function startStreaming(){

setInterval(() => {

/* Remove old data */
trafficData.shift();
labels.shift();

/* Add new data */
let newValue = Math.floor(Math.random() * 300) + 100;

trafficData.push(newValue);
labels.push(new Date().toLocaleTimeString());

/* Update chart */
trafficChart.update();

}, 1000); // every 1 second

}
function startStreaming(){

if(streamInterval) return; // prevent duplicates

streamInterval = setInterval(() => {

trafficData.shift();
labels.shift();

let newValue = Math.floor(Math.random() * 300) + 100;

trafficData.push(newValue);
labels.push(new Date().toLocaleTimeString());

trafficChart.update();

}, 1000);
    window.onload = function(){
loadPage("dashboard");
}

}
