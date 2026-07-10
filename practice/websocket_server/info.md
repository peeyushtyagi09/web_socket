we are starting from the start fisrt we are exploring different method fo creating fo websocket_server

Method1 - that is ( RAW TCP)
<!-- IN THAT WE are only uing net -->


The problem with tcp is that ki ye koi message protocal nahi h ye ek byte stream h, ok
That means you must define your own framing oir parse the highet-level protocal correctly


<!-- what is the problem in that  -->

suppose you send heloo 
so in tcp is can came like

hel
oo 

or 

he 
loo

or

hellohello

<!-- websocket solve this problem using frames -->