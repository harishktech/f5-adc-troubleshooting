function loadPage(page){

let c = document.getElementById("content")

/* Dashboard */
if(page === "dashboard"){

c.innerHTML = `
<h2 style="padding:20px;">ADC Monitoring Dashboard</h2>

<div class="card">
<canvas id="trafficChart"></canvas>
</div>

<div class="card">
<canvas id="poolChart"></canvas>
</div>

<div class="card">
<canvas id="sslChart"></canvas>
</div>
setTimeout(() => {
    if(document.getElementById("trafficChart")){
        loadCharts();
    }
}, 300);

<h2 style="padding:20px;">System Status</h2>

<div class="card">
LTM Virtual Servers: <span class="status-up">UP</span>
</div>

<div class="card">
Pool Members: <span class="status-up">HEALTHY</span>
</div>

<div class="card">
SSL Handshake: <span class="status-up">OK</span>
</div>

<div class="card">
GTM DNS: <span class="status-down">DEGRADED</span>
</div>

`

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

function loadCharts(){

let trafficCtx = document.getElementById('trafficChart');
let poolCtx = document.getElementById('poolChart');
let sslCtx = document.getElementById('sslChart');

if(!trafficCtx || !poolCtx || !sslCtx){
    console.log("Charts not ready");
    return;
}

/* Traffic */
new Chart(trafficCtx, {
type: 'line',
data: {
labels: ["1","2","3","4","5"],
datasets: [{
label: 'Requests/sec',
data: [120, 200, 150, 300, 250]
}]
}
});

/* Pool */
new Chart(poolCtx, {
type: 'doughnut',
data: {
labels: ["Healthy","Down"],
datasets: [{
data: [8,2]
}]
}
});

/* SSL */
new Chart(sslCtx, {
type: 'bar',
data: {
labels: ["HTTP","HTTPS"],
datasets: [{
data: [200,450]
}]
}
});

}

/* Load default */
window.onload = function(){

loadPage("dashboard")

}
setInterval(() => {

loadPage("dashboard")

}, 5000)
