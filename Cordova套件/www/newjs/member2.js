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
    document.getElementById('name').innerHTML = getCookie('userName');
    var data = {owner: getCookie('userID')};
    $.ajax({
        url: "http://120.108.116.176:25080/loadRes.php",
        crossDomain: true,
        data: data,
        type: "POST",
        success: function(response){
            //alert('sussess');
            var str = response;
            //alert(str[0].renter);
            firstRent(str);
        },
        error: function(xhr,ajaxOptions,thrownError){
            alert(xhr.status);
            alert(ajaxOptions);
            alert(thrownError);
        }
    });
    //firstRent();
    var arr;
    function firstRent(str){
        var str1 = JSON.parse(str);
        //alert(str1[0].imgAddress);
        var max = Object.keys(str1).length;
        arr = new Array(max);
        var a = "";
        for(var i=0; i<max; i++){
            var url = str1[i].imgAddress;
            var renter = str1[i].renter;
            var time = str1[i].date_start+"~"+str1[i].date_end;
            var cont = str1[i].renter_contact;
            a += '<div class="ui-grid-a">                    <div class="ui-block-a">                        <img src="'+url+'" height="200" width="130">                    </div>                    <div class="ui-block-b">                        <div class="ui-grid-solo">                                                          <h2>'+renter+'</h2>                                                             <h4>'+time+'</h4>                                                                                        <h3>'+cont+'</h3>                                                    </div>                 </div>                </div>';
            
        }
    
    
    document.getElementById('mainField').innerHTML = a;
    
    //alert("done");
        
    }

var script = document.createElement('script');
    script.onload = function () {
        
    };
    script.src = "newjs/user.js";

    document.head.appendChild(script);
    /*
    var url = "http://120.108.116.176:25080/uploads/customer/123/Product_123_55.jpg";
    var renter = "租借人";
    var time = "rent time";
    var cont = "contact way";
    var a = '<div class="ui-grid-a">                    <div class="ui-block-a">                        <img src="'+url+'" height="170" width="120">                    </div>                    <div class="ui-block-b">                        <div class="ui-grid-solo">                            <div class="ui-block-a">                                <h4>'+renter+'</h4>                            </div>                            <div class="ui-block-a">                                <h4>'+time+'</h4>                            </div>                            <div class="ui-block-a">                                <h4>'+cont+'</h4>                            </div>                        </div>                 </div>                </div>';
    a+=a;
    document.getElementById('mainField').innerHTML = a;
    */
    //alert("done");
    

    /*
    try{
        document.getElementById('rent').onclick = function(){
            alert('rent');
            var data = {owner: getCookie('userID')};
            $.ajax({
                url: "http://120.108.116.176:25080/loadRes.php",
                crossDomain: true,
                data: data,
                type: "POST",
                success: function(response){
                    //alert('sussess');
                    var str = response;
                    alert(str);
                    firstRent(str);
                },
                error: function(xhr,ajaxOptions,thrownError){
                    alert(xhr.status);
                    alert(ajaxOptions);
                    alert(thrownError);
                }
            });    
        }
    }catch(e){
        
    }
    
    function firstRent(data){
        var jsonData = JSON.parse(data);
        var max = Object.keys(jsonData).length;
        
        var fd = new FormData();
        for(var i=0 ; i<max ; i++){
            fd.append('product_id',jsonData[i].product_id);
        }
        var arr = fd.getAll('product_id');
        alert(arr);
        fd = new FormData();
        
        for(var i=0 ; i<max ; i++){
            if(!inside(fd.getAll('product_id'),arr[i])){
                fd.append('product_id',arr[i]);
            }
        }
        arr = fd.getAll('product_id');
        alert(arr);         //complete removing repeat
        
        max = arr.length;
        alert(max);
        
        
        
    
    
        var a = "";
        var d = 0;
        var b =0;
        fd = new FormData();
        for(var i=0; i<max; i++){
            var url = "";
            $.ajax({
                url: "http://120.108.116.176:25080/Test.php",
                crossDomain: true,
                data: {product_id: arr[i]},
                type: "POST",
                success: function(response){
                    var st = response;
                    //alert("dddd"+st);
                    jsondata = JSON.parse(st);
                    url = '120.108.116.176:25080/'+jsondata[0].Address;
                    fd.append('url',url);
                },
                error: function(xhr,ajaxOptions,thrownError){
                    alert(xhr.status);
                    alert(ajaxOptions);
                    alert(thrownError);
                }
            });
        }
        var arr1 = fd.getAll('url');
        for(var i=0; i<max; i++){
            
            
            $.ajax({
                url: "http://120.108.116.176:25080/loadRes.php",
                crossDomain: true,
                type: "POST",
                data: {product_id: arr[i]},
                success: function(response){
                alert("ajax2");
                    var str = response;
                    var Jsondata = JSON.parse(str);
                    var ma = Object.keys(Jsondata).length;
                    alert(str);
                    alert(ma);
                    for(var j=0; j<ma; j++){
                        //var url = "120.108.116.176:25080/";
                        var renter = "租借人:";
                        var time = "租借時間:";
                        var cont = "聯絡方式:";
                        //get product url
                        alert(Jsondata[j].product_id);
                        
                        
                        renter += Jsondata[j].renter;
                        time += Jsondata[j].date_start+" ~ "+Jsondata[j].date_end;
                        cont += Jsondata[j].renter_contact;
                        
                        a += '<div class="ui-grid-a">                    <div class="ui-block-a">                        <img url="'+arr1[i]+'" height="170" width="120">                    </div>                    <div class="ui-block-b">                        <div class="ui-grid-solo">                            <div class="ui-block-a">                                <h4>'+renter+'</h4>                            </div>                            <div class="ui-block-a">                                <h4>'+time+'</h4>                            </div>                            <div class="ui-block-a">                                <h4>'+cont+'</h4>                            </div>                        </div>                 </div>                </div>';
                        
                        alert("time"+time);
                        d++;
                    }
                },
                error: function(xhr,ajaxOptions,thrownError){
                    alert(xhr.status);
                    alert(thrownError);
                }
            });
        }
        
        document.getElementById('mainField').innerHTML = a;
        
        for(var i=0 ; i<max ; i++){
            var str;
            var jsondata;
            $.ajax({
                url: "http://120.108.116.176:25080/Test.php",
                crossDomain: true,
                data: {product_id: arr[i]},
                type: "POST",
                success: function(response){
                    
                    str = response;
                    jsondata = JSON.parse(str);
                    //alert(str);
                },
                error: function(xhr,ajaxOptions,thrownError){
                    alert(xhr.status);
                    alert(ajaxOptions);
                    alert(thrownError);
                }
            });
            fd.append('Address',jsondata[i].Address);
        }
        var arr = fd.getAll('Address');
        alert(arr);
        
    }
    function inside(arr,a){
        for(var i=0;i<arr.length;i++){
            if(arr[i]==a){
                return true;
            }
        }
        return false;
    }
}
*/
/*
                <div class="ui-grid-a">
                    <div class="ui-block-a">
                        <img src="http://120.108.116.176:25080/uploads/customer/123/Product_123_55.jpg" height="170" width="120">
                    </div>
                    <div class="ui-block-b">
                        <div class="ui-grid-solo">
                            <div class="ui-block-a">
                                <h4>租借人</h4>
                            </div>
                            <div class="ui-block-a">
                                <h4>租借時間</h4>
                            </div>
                            <div class="ui-block-a">
                                <h4>連絡方式</h4>
                            </div>
                        </div>
                    </div>
                </div>

/*
        document.getElementById("mainField").addEventListener("click",function(e){
            var str = e.target.id;
            if(str!=""){
                setCookie('item',jsonData[str].product_id ,2);
                setCookie('genre',gen,2);
                window.location = 'items.html';
            }
        });
*/
}