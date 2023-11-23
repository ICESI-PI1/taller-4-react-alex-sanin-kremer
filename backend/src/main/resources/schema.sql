DROP TABLE IF EXISTS USERS;
DROP TABLE IF EXISTS AUTHORS CASCADE;
DROP TABLE IF EXISTS BOOKS;

create table users(
                      id SERIAL PRIMARY KEY,
                      email varchar(100) not null,
                      name varchar(100) not null,
                      password varchar(100) not null

);

create table authors(
                      id SERIAL PRIMARY KEY,
                      name varchar(100) not null,
                      nationality varchar(100) not null

);

create table books(
                        id SERIAL PRIMARY KEY,
                        title varchar(100) not null,
                        publication_date DATE not null,
                        author_id int not null

);

