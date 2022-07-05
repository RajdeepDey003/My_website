document.querySelector('.cross').style.display = 'none';
document.querySelector('.ham').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.cross').style.display='none';
        setTimeout(()=>{
            document.querySelector('.hamburger').style.display='inline';
        },300);
    }
    else{
        document.querySelector('.hamburger').style.display='none';
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline';
        },300);
    }
})