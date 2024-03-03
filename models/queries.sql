CREATE TABLE reservas (
	id_Usuario serial NOT NULL PRIMARY KEY,
    nombre varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	date_Start varchar(50),
    date_End varchar(50),
    tipo_Reserva  varchar(50),
	pago char(5),
	id_pago varchar(100),
	date date DEFAULT CURRENT_DATE
)

INSERT INTO reservas(id_Usuario, nombre, email, date_Start, date_End, tipo_Reserva, pago, id_pago)
VALUES
('123456', 'pepe', 'pepe@pepe.es', '2024-03-01T07:00:00.837Z', '2024-03-01T08:00:00.837Z', 'temporal','true','12345678'),

-- DATETIME para colocar la fecha con hora

-- id

CREATE TABLE reservas (
	id_Reserva serial NOT NULL PRIMARY KEY,
	id_Usuario serial NOT NULL FORAI KEY,
	date_Start varchar(50),
    date_End varchar(50),
    tipo_Reserva  varchar(50),
	pago char(5),
	id_pago varchar(100),
	date date DEFAULT CURRENT_DATE
)

CREATE TABLE usuario (
	id_Usuario serial NOT NULL PRIMARY KEY,
    nombre varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	rol varchar(100) NOT NULL,
	date date DEFAULT CURRENT_DATE
)