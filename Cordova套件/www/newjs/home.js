document.getElementById("home").onclick = function(){
        var N = getCookie('userName');
        alert(N);
        if(N==null){
            window.location = "index.html";
        }
        window.location = "index2.html";
    }