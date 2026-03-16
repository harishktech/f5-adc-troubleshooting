function analyze(){

let issue = document.getElementById("issue").value.toLowerCase();

let result = "";

if(issue.includes("pool")){

result = `
<h3>Pool Troubleshooting</h3>

Step 1: List the pool configurations<br>
tmsh list ltm pool &lt;poolname&gt;<br><br>

Step 2: Check the status of the members by looking at the state<br>
tmsh list ltm pool &lt;poolname&gt;<br><br>

Step 3: Check the assigned Monitor<br>
tmsh list ltm monitor &lt;monitor type&gt &lt;monitor name&gt;<br><br>

Step 4: Show the members status<br>
tmsh show ltm pool  &lt;poolname&gt;<br><br>

Step 5: Check monitor status to know the pool status time<br>
tmsh show ltm monitor &lt;monitor type&gt &lt;monitor name&gt;<br><br>

Step 6: Take packet capture<br>
tcpdump -i 0.0:nnn host &lt;serverIP&gt;
`;

}

else if(issue.includes("ssl")){

result = `
<h3>SSL Troubleshooting</h3>

tmsh list ltm profile client-ssl<br>
tmsh list sys crypto cert<br>
openssl s_client -connect VIP:443
`;

}

else if(issue.includes("traffic")){

result = `
<h3>Traffic Troubleshooting</h3>

tmsh show ltm virtual<br>
tmsh show sys connection<br>
tcpdump -i 0.0:nnn host &lt;clientIP&gt;
`;

}

else{

result = "No match found. Try keywords like pool, ssl, traffic.";

}

document.getElementById("solution").innerHTML = result;

}
