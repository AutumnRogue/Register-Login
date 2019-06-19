let login = document.getElementById('login')
let register = document.getElementById('register')
let data = document.getElementById('data')

// let counter = 0

// if(counter==0){
//     window.addEventListener('load',()=>{
//         data.style.display = 'none'
//         counter++
//     })
// }




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



// document.getElementById('button2').addEventListener('click',()=>{
//     data.style.width = '20%'
//     data.style.padding = '2%'
//     console.log('test')
// })
