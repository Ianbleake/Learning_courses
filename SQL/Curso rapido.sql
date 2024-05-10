-- creamos una base de datos
-- create database holamundo;

-- vemos las tablas que existen
-- show databases;

-- definimos la tabla que vamos a usar
use holamundo;

-- creamos una tabla
-- create table animales(id int, tipo varchar(255), estado varchar(255), primary key(id));

-- modificamos la tabla
-- alter table animales modify column id int auto_increment;

-- insertamos datos en la tabla
-- insert into animales(tipo, estado) values('chanchito','feliz');
-- insert into animales(tipo, estado) values('dragon','feliz');
-- insert into animales(tipo, estado) values('unicornio','feliz');
-- insert into animales(tipo, estado) values('ballena','triste');

-- Consulta de datos

-- consulta todos los datos de la tabla 
-- select * from animales;

-- consulta solo dos campos de la tabla 
-- select tipo,estado from animales;

-- consulta un dato especifico de la tabla(where)
-- select * from animales where id=1;
-- select * from animales where estado='feliz';
-- select * from animales where estado='feliz' and tipo='chanchito';

-- Actualizacion de registro
-- update animales set estado = 'feliz' where id=4;
-- select * from animales;

-- Borrar registros
delete from animales where id=1;
select * from animales;

