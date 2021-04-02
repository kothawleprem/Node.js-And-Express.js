const http = require('http')
//createServer(incoming request-eg client requesting from web browser,respone)
const server = http.createServer((req,res)=>{
    // console.log(req)
    if(req.url === '/'){
        res.end('Welcome Prem! This is homepage')
    }
    // res.write('Welcome Prem! This is homepage')
    // res.end()
    else if(req.url === '/about'){
        res.end('Welcome Prem! This is About Page')
    } else {
        res.end(`
     <h1>Oops! Page not found!!!</h1>
    <p>Prem Your Are Lost</p>
    `)
    }
    
})

server.listen(5000)
//http://localhost:5000/