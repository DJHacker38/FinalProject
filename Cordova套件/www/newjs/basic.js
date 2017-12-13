window.onload = function(){
//alert('basic.js');
    getUserName("userName");

    var data;
    var gen = document.getElementById("genre").name;
    var kind = document.getElementById("kind").name;
    
    if(gen != "-1"){
        data = {'genre': gen};
    }
    
    if(kind != "-1"){
        data = {'kind': kind};
    }
    
    
    //gen =3;
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
        //alert("歡迎 "+N);
        
        
        document.getElementById("hello").innerHTML = '你好 '+N;
        //alert("edit");
    }
    
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    
    var str;
    
    
    
        $.ajax({
            url: "http://120.108.116.176:25080/loadIndex.php",
            crossDomain: true,
            data: data,
            type: "POST",
            success: function(response){
                str = response;
                //alert(str);
                processJSON(str)
            },
            error: function(xhr,ajaxOptions,thrownError){
                alert(xhr.status);
                alert(thrownError);
            }
        });
    
    function processJSON(data){
        var jsonData = JSON.parse(data);
        //alert(jsonData[0].Name);
        var a = '<div data-role="main" class="ui-content"><div class="ui-grid-a">';
        
        var max = Object.keys(jsonData).length;
        var z = '';
        for(var i=0 ; i<max ; i+=2){
            var b = '<div class="ui-block-a" style="text-align: center;"><a data-role="button"><img id="'+i+'"src="';
            var b_1 = "http://120.108.116.176:25080/"+jsonData[i].Address;
            var b_2 = '" width=50% height=50%></a><h3>';
            var b_3 = jsonData[i].Name;
            
            
            if(i+1==max){
                z += b+b_1+b_2+b_3+'</h3></div>';
                break;
            }
                
            var c = '</h3></div><div class="ui-block-b" style="text-align: center;"><a data-role="button"><img id="'+(i+1)+'" src="';
            var c_1 = "http://120.108.116.176:25080/"+jsonData[i+1].Address;
            var c_2 = '" width=50% height=50%></a><h3>';
            var c_3 = jsonData[i+1].Name+'</h3></div>';
            
            z += b+b_1+b_2+b_3+c+c_1+c_2+c_3;
        }
        
        document.getElementById("mainField").addEventListener("click",function(e){
            var str = e.target.id;
            if(str!=""){
                setCookie('item',jsonData[str].product_id ,2);
                setCookie('genre',gen,2);
                window.location = 'items.html';
            }
        });
        


        var d = '</div></div>';

        var e = a+z+d;
        
        document.getElementById("mainField").innerHTML = e;
        
        //alert("okay");
    }
    
    //alert(str);
    
    /*
    var a = '<div data-role="main" class="ui-content"><div class="ui-grid-a">';
    
    
        
    
    var b = '<div class="ui-block-a" style="text-align: center;"><a href="#" data-role="button"><img src="';
    var b_1 = "picture/clothes/1.jpg";
    var b_2 = '" width=50% height=50%></a><h3>';
    var b_3 = "good looking clothes1";
    
    var c = '</h3></div><div class="ui-block-b" style="text-align: center;"><a href="#" data-role="button"><img src="';
    var c_1 = 'picture/clothes/2.jpg';
    var c_2 = '" width=50% height=50%></a><h3>';
    var c_3 = 'good looking clothes2</h3></div>';

    
    
    var d = '</div></div>';

    var e = a+b+b_1+b_2+b_3+c+c_1+c_2+c_3+d;
    document.getElementById("mainField").innerHTML = e;
    */
};
/*
<div class="ui-block-b" style="text-align: center;">
    <a href="#" data-role="button"><img src="picture/clothes/4.jpg" width=50% height=50%></a>
    <h3>good looking clothes4</h3>
</div>
*/