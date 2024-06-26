CREATE DATABASE MENU  ;
USE MENU;

CREATE TABLE  USUARIO(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    pass VARCHAR(10),
    email VARCHAR(30)
);

CREATE TABLE CATEGORIA(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50)
);

create table PEDIDO(
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    fecha TIMESTAMP,
    id_usuario INTEGER,
    FOREIGN KEY (id_usuario) REFERENCES USUARIO(id)
);


CREATE TABLE PRODUCTO (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30),
    descripcion VARCHAR(100),
    foto VARCHAR(300),
    id_catego INTEGER,
    precio FLOAT,
    FOREIGN KEY (id_catego) REFERENCES CATEGORIA(id)
);

CREATE TABLE DETALLE_PEDIDO (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    id_pedido INTEGER NOT NULL,
    id_producto INTEGER NOT NULL,
    cantidad INTEGER,
    total FLOAT,
    FOREIGN KEY (id_pedido) REFERENCES PEDIDO(id),
    FOREIGN KEY (id_producto) REFERENCES PRODUCTO(id)
);





CREATE TABLE VALORACION(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    valor ENUM ('1','2','3','4','5') NOT NULL DEFAULT '5' ,
    id_producto INTEGER,
    id_usuario INTEGER,
    FOREIGN KEY (id_usuario) REFERENCES USUARIO(id),
    FOREIGN KEY  (id_producto) REFERENCES PRODUCTO(id)
);

