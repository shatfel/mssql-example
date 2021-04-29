const sql = require('mssql')

const _C = {
    user: '',
    password: '',
    server: '',
    database: ''
}


(async function () {
    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .query('select * from mytable where id = @input_parameter')

        console.dir(result1)
    } catch (err) {
        // ... error checks
    }
})()

sql.on('error', err => {
    console.err(err)
})