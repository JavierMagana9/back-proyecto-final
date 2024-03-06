CREATE TABLE reservas (
	id_reserva varchar(100) NOT NULL PRIMARY KEY,
	id_usuario varchar(100) NOT NULL,
	nombre varchar(100) NOT NULL,
	date_start varchar(50),
    date_end varchar(50),
    tipo_reserva  varchar(50),
	pago char(5),
	id_pago varchar(100),
	date date DEFAULT CURRENT_DATE
)

INSERT INTO reservas(id_reserva, id_usuario, nombre, date_start, date_end, tipo_reserva, pago, id_pago)
VALUES
('543232','123456', 'pepe','2024-03-01T07:00:00.837Z', '2024-03-01T08:00:00.837Z', 'temporal','true','12345678'),

-- DATETIME para colocar la fecha con hora

-- id

CREATE TABLE reservas (
	id_reserva serial NOT NULL PRIMARY KEY,
	id_usuario varchar(100) NOT NULL FOREIGN KEY,--NO ME PERMITE COLOCAR EL FOREING
	nombre varchar(100) NOT NULL,
	date_start varchar(50),
    date_end varchar(50),
    tipo_reserva  varchar(50),
	pago char(5),
	id_pago varchar(100),
	date date DEFAULT CURRENT_DATE
)

-- ===========================================================================


CREATE TABLE usuarios (
	id_usuario varchar(100) NOT NULL PRIMARY KEY,
	nickname varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	rol varchar(100),
	date date DEFAULT CURRENT_DATE	
);

INSERT INTO usuarios(id_usuario, nickname, email, rol)
VALUES
('123456', 'pepe','pepe@pepe.es', 'user_reg')


--===========================================================================
CREATE TABLE reservasprue (
	id_reserva varchar(100) NOT NULL PRIMARY KEY,
	id_usuario varchar(100) NOT NULL,
	nombre varchar(100) NOT NULL,
	date_start varchar(50),
    date_end varchar(50),
    tipo_reserva  varchar(50),
	pago char(5),
	id_pago varchar(100),
	date date DEFAULT CURRENT_DATE
	FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
)


INSERT INTO reservasprue(id_reserva, id_usuario, nombre, date_start, date_end, tipo_reserva, pago, id_pago)
VALUES
('543232','123456', 'pepe','2024-03-01T07:00:00.837Z', '2024-03-01T08:00:00.837Z', 'temporal','true','12345678'),


--====================================================================================

SELECT r.date_start,r.date_end,r.nombre
FROM reservasprue AS r 
INNER JOIN usuarios AS u
ON r.id_usuario=u.id_usuario
WHERE u.nickname='juan'
ORDER BY r.date_start

--============================

CREATE TABLE reservas (
	id_reserva varchar(100) NOT NULL PRIMARY KEY,
	id_usuario varchar(100) NOT NULL,
	date_start varchar(50),
    date_end varchar(50),
	ref_pago varchar(100),
	sala serial,
	date date DEFAULT CURRENT_DATE,
	FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

INSERT INTO reservas(id_reserva, id_usuario, date_start, date_end, ref_pago, sala)
VALUES
('543232','123456','2024-03-01T07:00:00.837Z', '2024-03-01T08:00:00.837Z','12345678', 1)

--=================================================

SELECT r.date_start,r.date_end,r.nombre
FROM reservasprue AS r 
INNER JOIN usuarios AS u
ON r.id_usuario=u.id_usuario
WHERE u.nickname='juan'
ORDER BY r.date_start

