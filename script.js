function analyze(){
let issue=document.getElementById("issue").value.toLowerCase()
let result=""
if(issue.includes("pool")){
result=`
<h3>Pool Troubleshooting</h3>
1 Check pool status
tmsh show ltm pool
2 Check nodes
tmsh show ltm node
3 Verify monitor
tmsh list ltm monitor
4 Capture traffic
tcpdump -i 0.0:nnn host <serverIP>
`
}
else if(issue.includes("ssl")){
result=`
<h3>SSL Troubleshooting</h3>
1 Check SSL profile
tmsh list ltm profile client-ssl
2 Verify certificate
tmsh list sys crypto cert
3 Test handshake
openssl s_client -connect VIP:443
`
}
else if(issue.includes("traffic")){
result=`
<h3>Traffic Flow Troubleshooting</h3>
1 Check virtual server
tmsh show ltm virtual
2 Check connections
tmsh show sys connection
3 Capture traffic
tcpdump -i 0.0:nnn host <clientIP>
`
}
else{
result="No match found. Try keywords like pool, ssl, traffic."
}
document.getElementById("solution").innerHTML=result
}
