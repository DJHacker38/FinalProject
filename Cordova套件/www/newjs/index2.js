window.onload = function(){
       
    
    document.getElementById("home").onclick = function(){
        var N = getCookie('userName');
        //alert(N);
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
    
    //unfinsih button
    document.getElementById('bell').onclick = function(){unfinish();}
    document.getElementById('message').onclick = function(){unfinish();}
    document.getElementById('setting').onclick = function(){unfinish();}
    function unfinish(){
        alert("此功能尚未完成");
    }
    
    
    function clearAllCookie() {  
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);  
        if(keys) {  
            for(var i = keys.length; i--;)  
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()  
        }  
    }  

}