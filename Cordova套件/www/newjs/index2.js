window.onload = function(){
       
    
    document.getElementById("home").onclick = function(){
        var N = getCookie('userName');
        alert(N);
        if(N==null){
            window.location = "index.html";
        }
        window.location = "index2.html";
    }

    
    var script = document.createElement('script');
    script.onload = function () {
        
    };
    script.src = "newjs/user.js";
    
    document.head.appendChild(script);
    
    
    
    function clearAllCookie() {  
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);  
        if(keys) {  
            for(var i = keys.length; i--;)  
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()  
        }  
    }  

}