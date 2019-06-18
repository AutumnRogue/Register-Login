let login = document.getElementById('login')
let register = document.getElementById('register')
let data = document.getElementById('data')

document.getElementById('register1').addEventListener('click',()=>{
    data.style.display = 'none';
    login.style.display = 'none';
    register.style.display = 'block';
    
})
document.getElementById('login1').addEventListener('click',()=>{
    data.style.display = 'none';
    register.style.display = 'none';
    login.style.display = 'block';
    
})
document.getElementById('button1').addEventListener('click',()=>{
    // document.getElementById('formsGoGo').style.display = 'none'

    
})