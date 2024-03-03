const queriesAll = {
    querieSelectAll: 'SELECT * FROM reservas',
    querieCrearReserva: `INSERT INTO reservas(id_Usuario, nombre, email, date_Start, date_End, tipo_Reserva, pago, id_pago)
                      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,

}
module.exports = queriesAll