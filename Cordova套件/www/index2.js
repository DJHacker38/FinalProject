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
        alert(userName);
        /*
        if(N==""){
            return;
        }*/
        alert("歡迎 "+N);
        
        
        document.getElementById("hello").innerHTML = '你好 '+N;
        alert("edit");
    }
        
    function logout(){
        document.cookie = "";
        window.location = "index.html";
    }

    
}