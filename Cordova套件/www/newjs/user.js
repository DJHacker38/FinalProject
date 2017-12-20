
    getUserName('userName');
    
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
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
    
    
    function getUserName(userName){
        var N = getCookie(userName);
        //alert(N);
        if(N==null||N==""||N=="null"){
            return;
        }
        var login = document.getElementById("login");
        login.className += " ui-icon-myicon ui-user1";
        login.innerHTML = "";
        
        if(getCookie("welcome")==0){
            alert("歡迎 "+N);
            setCookie("welcome",1,1);
        }
        document.getElementById("hello").innerHTML = '你好 '+N;
        var mem = document.getElementById("member");
        //alert("mem");
        mem.href = "member.html";
        mem.innerHTML = '<span class="ui-btn-inner"><span class="ui-btn-text">個人頁面</span></span>';
    }
    
    function clearAllCookie() {  
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);  
        if(keys) {  
            for(var i = keys.length; i--;)  
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()  
        }  
    }  


    document.getElementById("logout").onclick = function(){
        setCookie('userName',null);
        alert("已登出");
        
        window.location = "index.html";
    }
    
