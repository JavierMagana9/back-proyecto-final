const { Pool } = require('pg')

const pool = new Pool(    
    {
    connectionString:'postgresql://postgres:1234@localhost:5432/proyectoFinal',
})

module.exports=pool