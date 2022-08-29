const bar= document.getElementById('bar');
 var nav=document.getElementById('nav');
 var close=document.getElementById('close');
if(bar){
bar.addEventListener('click',function(){
    nav.classList.add('active');
})
}
if(close){
    close.addEventListener('click',function(){
        nav.classList.remove('active');
    })
    }