
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
    
    
    var n;
        $.ajax({
            url: "http://120.108.116.176:25080/loadIndex.php",
            crossDomain: true,
            type: "POST",
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
            if(jsonData[i].ID == id){
                document.getElementById('clothes').innerHTML = '<img align="center" src="http://120.108.116.176:25080/'+jsonData[i].Address+'" height="500" width="500">';
                //alert('done');
                document.getElementById('owner').innerHTML = jsonData[i].Name;
                document.getElementById('price').innerHTML = "價格："+jsonData[i].Price;
            }
        }
    
    }
    
    //alert(getCookie('item'));
    
    
    
}
