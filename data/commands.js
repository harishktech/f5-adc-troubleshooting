const commands=[

{
title:"Show Virtual Servers",
cmd:"tmsh list ltm virtual",
desc:"Displays all configured virtual servers"
},

{
title:"Check Pool Status",
cmd:"tmsh show ltm pool",
desc:"Shows pool member health"
},

{
title:"Check Connection Table",
cmd:"tmsh show sys connection",
desc:"Displays active connections"
},

{
title:"Check SSL Profiles",
cmd:"tmsh list ltm profile client-ssl",
desc:"List client SSL profiles"
},

{
title:"Check Logs",
cmd:"tail -f /var/log/ltm",
desc:"View LTM logs"
},

{
title:"Packet Capture",
cmd:"tcpdump -i 0.0:nnn host <IP>",
desc:"Capture traffic on TMM interface"
}

]
