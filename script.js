var a=true;
var b = document.getElementById('navoption');
function open_it(){
    if(a){
        b.style.display='block';
        a=false;
    }
    else{
        b.style.display='none';
        a=true;
    }
}
function exit(){
    document.getElementById('navoption').style.display='none';
    a=true;
}
