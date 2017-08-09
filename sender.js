var EventHubClient = require('azure-event-hubs').Client; 
 
var connStr = 'XXX'; 
 
var client = EventHubClient.fromConnectionString(connStr) 
client.createSender()     
    .then(function (tx) {         
        setInterval(function(){           
            dev = 'dev' + String(Math.floor((Math.random() * 10) + 1));           
            val = String(Math.random());           
            console.log(dev + ": " + val);           
            tx.send({ device: dev, reading: val});          
        }, 1000);     
    });