
window.onload = function(){

    

    
    var owner;
    //load itme data
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
    for(var i=0; i<4; i++){
        $.ajax({
            url: "http://120.108.116.176:25080/loadIndex.php",
            crossDomain: true,
            type: "POST",
            data: {genre: i},
            success: function(response){
                var str = response;
                //alert(str);
                processJSON(str);
                //alert(i);
            },
            error: function(xhr,ajaxOptions,thrownError){
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }
    
    

    function processJSON(data){
        var jsonData = JSON.parse(data);
        var max = Object.keys(jsonData).length;

        for(var i=0 ; i<max ; i++){
            var id = getCookie('item');
            if(jsonData[i].product_id == id){
                document.getElementById('im').src="http://120.108.116.176:25080/"+jsonData[i].Address;
            
                //alert('done');
                document.getElementById('pName').innerHTML = jsonData[i].Name;
                document.getElementById('price').innerHTML = "價格："+jsonData[i].Price+"/周";
                document.getElementById("intro").innerHTML = jsonData[i].intro;
                owner = jsonData[i].owner;
                
                if(owner == getCookie('userID')){
                    //alert("same");
                    var own = document.getElementById('book');
                    own.onclick = function(){window.location="editMyP.html";}
                    own.innerHTML = '<span class="ui-btn-inner"><span class="ui-btn-text">編輯商品</span></span>';
                }
                
                
                $.ajax({
                    url: "http://120.108.116.176:25080/Conta.php",
                    crossDomain: true,
                    type: "POST",
                    data: {account_id: owner},
                    success: function(response){
                        var str = JSON.parse(response);
                        if(str[0].contact==""){
                            document.getElementById('contact').innerHTML = "賣家未提供";
                        }else{
                            document.getElementById('contact').innerHTML = str[0].contact;
                        }
                    },
                    error: function(xhr,ajaxOptions,thrownError){
                        alert(xhr.status);
                        alert(thrownError);
                    }
                });
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
        if(n>b.value||n>a.value){
            alert("不可輸入今日之前的日期");
            a.value = n;
            b.value = n;
            return;
        }
        if(a.value>b.value){
            alert("請輸入開始租用後(包含)的日期");
            b.value = a.value;
        }
        var from_date = new Date(a.value);
        var end_date = new Date(b.value);

        var time_different = (end_date - from_date) / 86400000;
        //alert(time_different);
        
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
    
    
    
    //submit request
    
    document.getElementById('book').onclick = function(){
        
        
        var product_id = getCookie('item');
        var date1 = document.getElementById('date').value;
        var date2 = document.getElementById('date2').value;
        var renter = getCookie('userID');
        var contact = document.getElementById('contact2').value;
        var address = document.getElementById('im').src;
        
        
        var fd = new FormData();
        fd.append('product_id',product_id);
        fd.append('date1',date1);
        fd.append('date2',date2);
        fd.append('owner',owner);
        fd.append('renter',renter);
        fd.append('contact',contact);
        fd.append('imgAddress',address);
        
        $.ajax({
            url: "http://120.108.116.176:25080/BookRequest.php",
            crossDomain: true,
            type: "POST",
            data: fd,
            contentType: false,   // 告诉jQuery不要去這置Content-Type
            processData: false,
            success: function(response){
                var str = response;
                alert(str);
                
                window.location = "index2.html";
            },
            error: function(xhr,ajaxOptions,thrownError){
                alert(xhr.status);
                alert(thrownError);
            }
        });
        
    }
    
    
    //load reservation
    //alert(getCookie('item'));
        $.ajax({
            url: "http://120.108.116.176:25080/loadRes.php",
            crossDomain: true,
            type: "POST",
            data: {product_id: getCookie('item')},
            success: function(response){
                var str = response;
                //alert(str);
                Reservation(str);
            },
            error: function(xhr,ajaxOptions,thrownError){
                alert(xhr.status);
                alert(thrownError);
            }
        });
    
    function Reservation(str){
        var jsonData = JSON.parse(str);
        var max = Object.keys(jsonData).length;
        var res = "" ;
        for(var i=0 ; i<max ; i++){
            res +=jsonData[i].date_start+" ~ "+jsonData[i].date_end;
            res += "<br>"
        }
        if(res!=""){
            document.getElementById('res').innerHTML=res;
        }
        
        //尚未做防呆
    }
    
    
    
    
    //引入user.js
    
    var script = document.createElement('script');
        script.onload = function () {
            //alert();
        };
        script.src = "newjs/user.js";

        document.head.appendChild(script);
    
};
