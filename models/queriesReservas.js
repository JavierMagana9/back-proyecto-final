const queriesAll = {
    querieSelectAll: 'SELECT * FROM reservas',
    querieCrearReserva: `INSERT INTO reservas(id_reserva, id_usuario, date_start, date_end, id_pago)
                      VALUES ($1, $2, $3, $4, $5)`,
   querieSelectEvent: 'SELECT (nombre, date_start, date_end) FROM reservas'
                   

}
module.exports = queriesAll