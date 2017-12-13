
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
        if(N==null){
            window.location = "index.html";
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
        alert("mem");
        mem.href = "member.html";
        mem.innerHTML = '<span class="ui-btn-inner"><span class="ui-btn-text">會員中心</span></span>';
    }
    
    document.getElementById("logout").onclick = function(){
        document.cookie = "";
        alert("已登出");
        window.location = "index.html";
    }
    
