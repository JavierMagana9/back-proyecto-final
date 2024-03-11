const queriesAll = {
    querieSelectAll: 'SELECT * FROM reservas',
    querieCrearReserva: `INSERT INTO reservas(id_reserva, id_usuario, date_start, date_end, ref_pago, sala)
                      VALUES ($1, $2, $3, $4, $5, $6)`,
   querieSelectEvent: 'SELECT (nombre, date_start, date_end) FROM reservas',
   querieSelectReserva: `SELECT * FROM reservas WHERE id_reserva = $1`,
   querieUpdateReserva: `UPDATE reservas
                       SET date_start = $1,
                             date_end = $2,
                              ref_pago= $3,
                                  sala= $4
                       WHERE id_reserva=$5`,
   querieDeleteReserva: `DELETE FROM reservas
    WHERE id_reserva=$1`,
    querieSelectmyEvent: 'SELECT * FROM reservas WHERE id_usuario = $1'


}
module.exports = queriesAll