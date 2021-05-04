var Connection = require('tedious').Connection;  
    var config = {  
        server: '--server-', 
        authentication: {
            type: 'default',
            options: {
                userName: '--user-',
                password: '--password-' 
            }
        },
        options: {
            //encrypt: true,
            database: 'testDb' 
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        console.log("Connected");  
        executeStatement(); 
    });
    
    connection.connect();

    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  
  
    function executeStatement() {  
        request = new Request("--query-", function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });  
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        connection.execSql(request);  
    } 