const http = require('http');
var fs = require('fs')
const path = require('path');

// Ports that will be used to simulate the pendulums
const ports = [5001, 5002, 5003, 5004, 5005];

const host = 'localhost';

var servers = []
var s;

// global state for controlling animation
let animate = false;


// Create server on each TCP port
ports.forEach(function(port) {
  // Each server will have the same routes
  s = http.createServer(async function reqHandler(req, res) {

    // Content type header for json data
    res.setHeader("Content-Type", "application/json");

    // CORS header to allow for cross-origin requests
    res.setHeader("Access-Control-Allow-Origin", "*");
    

    // GET method will return the JSON data for the pendulum being simulated on the givin port
    if(req.method === 'GET'){
      let outData;
      fs.readFile(__dirname+`/pendulum_${port}.json`, (err, data) => {
        res.writeHead(200)
        // console.log(data)
        res.end(data)
      })
      
    }
    // POST method for sending new data in JSON format to the pendulum on the givin port
    else if(req.method === 'POST'){
        // POST method at start endpoint which starts the simulation of the pendulum using performance.now to index the time
        if(req.url === '/start'){
          animate = true;
          const response = fs.readFileSync(`pendulum_${port}.json`)
          const data = JSON.parse(response)

          let startTime;
          let g = 9.81
          let x = data.x
          let y = data.y
          let initAng = data.ang
          let len = data.len
          const startPos = data.startPos
          const ballRad = 30
          let t = performance.now()

          // Simulating a request animation frame using setTimeout
          function startPendulum(){
            if(animate === false){
              clearInterval(startIntervalId)
              res.end()
              return
            }

            update()
            push()
          }
          /* Update method calculates new angle and position of pendulum given time elapsed */
          function update(){
            // console.log('updating')
            ang = initAng * Math.cos((Math.sqrt(g / len) * t));
            // console.log(port, ang)

            x = len * Math.sin(ang);
            y = len * Math.cos(ang);
            t = (performance.now() - t)/100

            data.x = x
            data.y = y
            data.ang = ang
          }

          // Push method pushes data to appropriate JSON file given the port
          function push(){
            fs.writeFileSync(`pendulum_${port}.json`, JSON.stringify(data), function(err) {
              if (err) {
                  console.log(err)
              }
            })
          }

          // Boolean check to make sure animation is still in progress
          if(animate === false){
            res.setHeader(200)
            res.end()
          }

          // Use of setInterval to run animation loop every 100ms
          const startIntervalId = setInterval(startPendulum, 100)


        }
        // POST method at stop route in order to stop the animation loop
        // Flips the boolean flag to false which stops the loop
        else if(req.url === '/stop'){
          animate = false
          res.end()
        }

        // POST method at routes not start or stop for posting data to the JSON files given the port number
        else{
          let buffer = ''
  
          req.on('data', function(data){
            buffer += data
          })
    
          req.on('end', function(){
            const response = fs.readFileSync(`pendulum_${port}.json`)
            var resData = JSON.parse(response)
            console.log(resData)
            // console.log(JSON.stringify(resData))\
            // console.log(buffer)
            buffer = JSON.parse(buffer)
            // console.log(buffer[port])
            resData = buffer
            // console.log(resData)
            fs.writeFileSync(`pendulum_${port}.json`, JSON.stringify(resData), function(err) {
                if (err) {
                    console.log(err)
                }
            })
    
            res.writeHead(200, "OK", {"Content-Type": "application/json"})
            // res.write(buffer)
            res.end()
          })
        }

        
    }
      
  }).listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`)
  });
  servers.push(s);
})




