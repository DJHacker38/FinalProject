
window.onload = function(){
    
    
    
    
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
    
    var gen = getCookie('genre');
    
        $.ajax({
            url: "http://120.108.116.176:25080/loadIndex.php",
            crossDomain: true,
            type: "POST",
            data: {genre: gen},
            success: function(response){
                var str = response;
                //alert(str);
                processJSON(str);
            },
            error: function(xhr,ajaxOptions,thrownError){
                alert(xhr.status);
                alert(thrownError);
            }
        });
    
    function processJSON(data){
        var jsonData = JSON.parse(data);
        var max = Object.keys(jsonData).length;

        for(var i=0 ; i<max ; i++){
            var id = getCookie('item');
            if(jsonData[i].product_id == id){
                document.getElementById('clothes').innerHTML = '<img align="center" src="http://120.108.116.176:25080/'+jsonData[i].Address+'" height="500" width="500">';
                //alert('done');
                document.getElementById('pName').innerHTML = jsonData[i].Name;
                document.getElementById('price').innerHTML = "價格："+jsonData[i].Price;
                document.getElementById("intro").innerHTML = jsonData[i].intro;
            }
        }
    }
    
    
    

    //日期設定
    
    var n = toDateFormat(new Date());
    
    document.getElementById("date").onchange = function(){
        var a = document.getElementById("date");
        var b = document.getElementById("date2");
        if(n>a.value){
            alert("不可輸入今日之前的日期");
            a.value = n;
            return;
        }
        if(a.value>b.value && b.value!=""){
            alert("請輸入開始租用後(包含)的日期");
            b.value = a.value;
        }
    }
    document.getElementById("date2").onchange = function(){ 
        var a = document.getElementById("date");
        var b = document.getElementById("date2");
        if(n>b.value){
            alert("不可輸入今日之前的日期");
            a.value = n;
            return;
        }
        if(a.value>b.value){
            alert("請輸入開始租用後(包含)的日期");
            b.value = a.value;
        }
        var from_date = new Date(a.value);
        var end_date = new Date(b.value);

        var time_different = (end_date - from_date) / 86400000;
        alert(time_different);
    }
    
    function toDateFormat(d){
        //alert(d);
        var str = "";
        str += d.getFullYear();
        str += "-";
        str += d.getMonth()+1;
        str += "-";
        str += d.getDate();
        return str;
    }
    
    $( document ).bind( "mobileinit", function(){
        $.mobile.page.prototype.options.degradeInputs.date = true;
    });	
    
    
    
    document.getElementById('book').onclick = function(){
        /*
        $.ajax({
            url: "http://120.108.116.176:25080/loadIndex.php",
            crossDomain: true,
            type: "POST",
            data: {genre: gen},
            success: function(response){
                var str = response;
                //alert(str);
                processJSON(str);
            },
            error: function(xhr,ajaxOptions,thrownError){
                alert(xhr.status);
                alert(thrownError);
            }
        });
        */
    }
    
    
    
    
    
    
    
    
    
    
    
    //引入user.js
    
    var script = document.createElement('script');
        script.onload = function () {
            //alert();
        };
        script.src = "newjs/user.js";

        document.head.appendChild(script);
    
};
