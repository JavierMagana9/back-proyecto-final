const { Pool } = require('pg')

const pool = new Pool(    
    {
    connectionString:process.env.BBDDEXTERNAL,
    ssl:process.env.SSLEXTERNAL
})

module.exports=pool