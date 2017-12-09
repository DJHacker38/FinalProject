window.onload = function(){
    getUserName("userName");

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
        
    function getUserName(userName){
        var N = getCookie(userName);
        
        if(N==null){
            window.location = "index.html";
        }
        //alert(userName);
        /*
        if(N==""){
            return;
        }*/
        alert("歡迎 "+N);
        
        
        document.getElementById("hello").innerHTML = '你好 '+N;
        //alert("edit");
    }
        
    
    document.getElementById("logout").onclick = function(){
        document.cookie = "";
        window.location = "index.html";
    }
    
    document.getElementById("home").onclick = function(){
        var N = getCookie('userName');
        //alert(N);
        if(N==null){
            window.location = "index.html";
        }
        window.location = "index2.html";
    }

    
}