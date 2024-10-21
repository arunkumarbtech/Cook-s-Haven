create database cookshaven

--query to create users table
create table users(
user_id int auto_increment primary KEY,
name varchar(50) not null,
email varchar(100) not null unique,
password varchar(100) not null,
created_on timestamp default current_timestamp
);