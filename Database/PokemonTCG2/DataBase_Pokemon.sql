CREATE DATABASE PokemonTCG;
USE PokemonTCG;

-- Tabla Jugador
CREATE TABLE Jugador (
    id_jugador INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(50) NOT NULL UNIQUE,
    nivel INT NOT NULL,
    puntos INT NOT NULL
);

-- Tabla Mazo
CREATE TABLE Mazo (
    id_mazo INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    id_jugador INT,
    id_cartas INT, 
    numero_cartas INT,
    FOREIGN KEY (id_jugador) REFERENCES Jugador(id_jugador)
);

-- Tabla Carta
CREATE TABLE Carta (
    id_carta INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    tipo VARCHAR(20) NOT NULL,
    rareza VARCHAR(20) NOT NULL,
    energia INT NOT NULL,
    habilidad INT NOT NULL
);

-- Tabla Habilidad
CREATE TABLE Habilidad (
    id_habilidad INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT NOT NULL,
    id_carta INT,
    FOREIGN KEY (id_carta) REFERENCES Carta(id_carta)
);

-- Tabla Mazo_Carta
CREATE TABLE Mazo_Carta (
    id_mazo INT,
    id_carta INT,
    cantidad INT NOT NULL,
    PRIMARY KEY (id_mazo, id_carta),
    FOREIGN KEY (id_mazo) REFERENCES Mazo(id_mazo),
    FOREIGN KEY (id_carta) REFERENCES Carta(id_carta)
);

-- Tabla Partida
CREATE TABLE Partida (
    id_partida INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    resultado VARCHAR(20),
    duration INT
);

-- Tabla Jugador_Partida
CREATE TABLE Jugador_Partida (
    id_jugador INT,
    id_partida INT,
    resultado VARCHAR(20),
    PRIMARY KEY (id_jugador, id_partida),
    FOREIGN KEY (id_jugador) REFERENCES Jugador(id_jugador),
    FOREIGN KEY (id_partida) REFERENCES Partida(id_partida)
);

-- INSSERT 
-- Insertar datos en la tabla Jugador
INSERT INTO Jugador (nombre, correo, nivel, puntos) VALUES 
('Ash Ketchum', 'ash@pokemon.com', 10, 1200),
('Misty Waterflower', 'misty@pokemon.com', 8, 980),
('Brock Harrison', 'brock@pokemon.com', 12, 1520);

-- Insertar datos en la tabla Mazo
INSERT INTO Mazo (nombre, id_jugador) VALUES 
('Mazo Pikachu', 1),
('Mazo Starmie', 2),
('Mazo Onix', 3);

-- Insertar datos en la tabla Carta
INSERT INTO Carta (nombre, tipo, rareza, energia, habilidad) VALUES 
('Pikachu', 'Eléctrico', 'Común', 55, 40),
('Starmie', 'Agua', 'Raro', 75, 55),
('Onix', 'Roca', 'Común', 45, 160);

-- Insertar datos en la tabla Habilidad
INSERT INTO Habilidad (nombre, descripcion, id_carta) VALUES 
('Impactrueno', 'Daño eléctrico a un enemigo.', 1),
('Hidrobomba', 'Ataque de agua masivo.', 2),
('Roca Afilada', 'Lanza rocas a los enemigos.', 3);

-- Insertar datos en la tabla Mazo_Carta
INSERT INTO Mazo_Carta (id_mazo, id_carta, cantidad) VALUES 
(1, 1, 4),
(2, 2, 3),
(3, 3, 5);

-- Insertar datos en la tabla Partida
INSERT INTO Partida (fecha, resultado) VALUES 
('2023-05-01', 'Ash ganó'),
('2023-05-02', 'Misty ganó');

-- Insertar datos en la tabla Jugador_Partida
INSERT INTO Jugador_Partida (id_jugador, id_partida, resultado) VALUES 
(1, 1, 'Ganó'),
(2, 1, 'Perdió'),
(1, 2, 'Perdió'),
(2, 2, 'Ganó');

-- Seleccionar todos los jugadores
SELECT * FROM Jugador;

-- Seleccionar el nombre y nivel de todos los jugadores
SELECT nombre, nivel FROM Jugador;

-- Seleccionar todos los jugadores que tienen un nivel mayor a 8
SELECT nombre, correo FROM Jugador WHERE nivel > 8;

-- Contar el número total de jugadores
SELECT COUNT(*) AS total_jugadores FROM Jugador;

-- Seleccionar los nombres de los jugadores que han ganado alguna partida
SELECT DISTINCT Jugador.nombre
FROM Jugador
JOIN Jugador_Partida ON Jugador.id_jugador = Jugador_Partida.id_jugador
WHERE Jugador_Partida.resultado = 'Ganó';


-- Seleccionar todas las cartas en el mazo de 'Ash Ketchum'
SELECT Carta.nombre 
FROM Carta
JOIN Mazo_Carta ON Carta.id_carta = Mazo_Carta.id_carta
JOIN Mazo ON Mazo_Carta.id_mazo = Mazo.id_mazo
JOIN Jugador ON Mazo.id_jugador = Jugador.id_jugador
WHERE Jugador.nombre = 'Ash Ketchum';


-- Seleccionar todas las partidas con sus resultados
SELECT * FROM Partida;

-- Seleccionar los nombres de los jugadores y los resultados de la partida 1
SELECT Jugador.nombre, Jugador_Partida.resultado
FROM Jugador
JOIN Jugador_Partida ON Jugador.id_jugador = Jugador_Partida.id_jugador
WHERE Jugador_Partida.id_partida = 1;

-- Contar cuántas partidas ha ganado cada jugador
SELECT Jugador.nombre, COUNT(*) AS partidas_ganadas
FROM Jugador
JOIN Jugador_Partida ON Jugador.id_jugador = Jugador_Partida.id_jugador
WHERE Jugador_Partida.resultado = 'Ganó'
GROUP BY Jugador.nombre;

-- Seleccionar las partidas jugadas por 'Misty Waterflower'
SELECT Partida.id_partida, Partida.fecha, Jugador_Partida.resultado
FROM Partida
JOIN Jugador_Partida ON Partida.id_partida = Jugador_Partida.id_partida
JOIN Jugador ON Jugador_Partida.id_jugador = Jugador.id_jugador
WHERE Jugador.nombre = 'Misty Waterflower';

-- Seleccionar todas las cartas y su rareza
SELECT nombre, rareza FROM Carta;

-- Seleccionar todas las cartas que tienen ataque mayor a 50
SELECT nombre, ataque FROM Carta WHERE ataque > 50;

-- Contar cuántas cartas de cada tipo existen
SELECT tipo, COUNT(*) AS cantidad_cartas
FROM Carta
GROUP BY tipo;

-- Seleccionar las habilidades de la carta 'Pikachu'
SELECT Habilidad.nombre, Habilidad.descripcion
FROM Habilidad
JOIN Carta ON Habilidad.id_carta = Carta.id_carta
WHERE Carta.nombre = 'Pikachu';

-- Seleccionar los nombres de los mazos y sus respectivos jugadores
SELECT Mazo.nombre AS mazo, Jugador.nombre AS jugador
FROM Mazo
JOIN Jugador ON Mazo.id_jugador = Jugador.id_jugador;

-- Contar el número de cartas en cada mazo
SELECT Mazo.nombre, SUM(Mazo_Carta.cantidad) AS total_cartas
FROM Mazo
JOIN Mazo_Carta ON Mazo.id_mazo = Mazo_Carta.id_mazo
GROUP BY Mazo.nombre;

-- Seleccionar las cartas en el mazo de 'Misty Waterflower'
SELECT Carta.nombre, Mazo_Carta.cantidad
FROM Carta
JOIN Mazo_Carta ON Carta.id_carta = Mazo_Carta.id_carta
JOIN Mazo ON Mazo_Carta.id_mazo = Mazo.id_mazo
JOIN Jugador ON Mazo.id_jugador = Jugador.id_jugador
WHERE Jugador.nombre = 'Misty Waterflower';

-- Seleccionar los mazos que contienen la carta 'Onix'
SELECT Mazo.nombre
FROM Mazo
JOIN Mazo_Carta ON Mazo.id_mazo = Mazo_Carta.id_mazo
JOIN Carta ON Mazo_Carta.id_carta = Carta.id_carta
WHERE Carta.nombre = 'Onix';


