const queriesAllSalas = {
    querieSelectSalas: 'SELECT * FROM salas',
    querieCrearSala: `INSERT INTO salas(id_sala, num_sala, id_reserva)
                         VALUES
                        ($1,$2,$3)`,
   querieSelectSala: `SELECT * FROM sala WHERE id_sala = $1`,
   querieDeleteReserva: `DELETE FROM salas
    WHERE id_sala=$1`,

}
module.exports = queriesAllSalas