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
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
        
    
    
    
    
    document.getElementById("home").onclick = function(){
        var N = getCookie('userName');
        //alert(N);
        if(N==null){
            window.location = "index.html";
        }
        window.location = "index2.html";
    }

    function getUserName(userName){
        var N = getCookie(userName);
        if(N==null){
            window.location = "index.html";
        }
        if(getCookie("welcome")==0){
            alert("歡迎 "+N);
            setCookie("welcome",1,1);
        }
        document.getElementById("hello").innerHTML = '你好 '+N;
    }
}