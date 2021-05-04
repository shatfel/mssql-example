const sqlConn = require('mssql')

const _C = {
  sqlConf = {
    user: '--user-',
    password: '--password-',
    server: '--server-',
    port: 1433,
    database: '--db-'
    },

  query: ['--query-']
}


sqlConn.connect(_C.sqlConf, (err) => {
  if (err) console.err(err)

  let _req = new sqlConn.Request()

  _C.query.forEach(_q => {
    _req.query(_C.query, (err, data => {
      if (err) console.err(err)
  
      console.table(data.recordset)
      }))
    })

  sqlConn.close()
})