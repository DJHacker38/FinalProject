window.onload = function(){
 //   alert("login.js");
    function loadPHP(){ //php mysql 連線
        
        if (window.XMLHttpRequest){ // Mozilla, Safari, IE7+ ...
            httpRequest = new XMLHttpRequest();
        }
        
        
        //alert("loadphp");
        var acc = document.getElementById("account").value;
        var pw = document.getElementById("password").value;
        
        /*
        $.ajax({
            type: "GET",
            headers: {"X-My-Custom-Header": "some value"},
            url: "http://120.108.116.176:25080/AccountReturn.php"
        }).done(function () {
            alert("prefight done");
        });
        */
        
        $.ajax({
                url: "http://120.108.116.176:25080/AccountReturn.php",
                crossDomain: true,
                
                data: {
                    account: acc,
                    passwd: pw
                },
                type: "POST",

                success: function(response){
                    str = response;
                    getFile(str);
                },
                error: function(response){
                    alert("fail connect");
                }
        }); 
        
    }
    
    //alert(getCookie("userName"));
    
    window.testEnter = function(event){
        if(event.keyCode == 13){
            loadPHP();
        }
    }
    
    $('#loginbtn').click(function() {
        loadPHP();
    });
    
    function getFile(str){
        if(str=="1234"){
            alert("帳號或密碼不正確");
        }else{
            var arr = JSON.parse(str);
            alert("登入成功!!");
            
            setCookie("welcome",0,1);
            setCookie("userName",arr.name,2);
            setCookie("userID",arr.account_id,2);
            
            //alert(getCookie('userName'));
	        window.location = "index2.html";
        }
        
    }
    
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

}