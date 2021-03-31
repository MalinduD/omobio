create database omobio;

use omobio;

create table users (
userId int AUTO_INCREMENT,
email varchar(255),
passsword varchar(255)
PRIMARY KEY (userId)
)