const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const express = require('express');
const bcrypt = require('bcrypt');
const SQL = require('./libs/sql')
const {promisify} = require('util')

const bcryptHash = promisify(bcrypt.hash)
let compare =  promisify(bcrypt.compare)

const app = express();

let connectOptions = [
    'localhost',
    'root',
    'password',
    'test_schema'
]
let sql = new SQL(...connectOptions);


app.engine('.hbs', exphbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

//when browser sends get request
app.get('/', (req, res) => {
    res.render('index');
});

/* Insert code here*/

app.post('/insert',async(req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let telephone = req.body.telephone;
    let password = await bcryptHash(req.body.password,13);

    sql.insert(name,email,telephone,password)

    res.render('index')
});
app.post('/account', async (req, res) => {        
    let email = req.body.email;
    let passwordEnter = req.body.passwordEnter;   
    let result = await sql.fetch(email);

    // compare(passwordEnter,result.password)
    
    if(await compare(passwordEnter,result.password)){
    res.render('index',{
        details: 'Your details:',
        name:'Username: ' + result.username,
        email:'Email: ' + result.email,
        telephone:'Mobile: ' + result.telephone,
        password: 'Password: ' + passwordEnter,
        hashkey: 'Hashkey: ' + result.password
    });
    }else{
        res.render('index',{
            name:'Incorrect Password'
        })
    }


})


app.listen(1337, () => {
    console.log("listening on port 1337")
})