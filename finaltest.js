function makepage(){
var obj=window.open();
obj.document.open();
var write1=document.getElementById('step1');
obj.document.write(write1);
obj.document.close();
}
