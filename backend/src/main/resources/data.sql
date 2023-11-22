-- Insertar usuarios
INSERT INTO users (email, name, password) VALUES
                                                 ('usuario1@example.com', 'Usuario 1', 'contraseña1'),
                                                 ('usuario2@example.com', 'Usuario 2', 'contraseña2');

-- Insertar autores
INSERT INTO authors (name, nationality) VALUES
                                            ('Autor 1', 'Nacionalidad 1'),
                                            ('Autor 2', 'Nacionalidad 2'),
                                            ('Autor 3', 'Nacionalidad 3');

-- Insertar libros
INSERT INTO books (title, publication_date, author_id) VALUES
                                                          ('Libro 1', '2023-01-01', 1),
                                                          ('Libro 2', '2023-02-01', 2),
                                                          ('Libro 3', '2023-03-01', 3),
                                                          ('Libro 4', '2023-04-01', 1),
                                                          ('Libro 5', '2023-05-01', 2),
                                                          ('Libro 6', '2023-06-01', 3),
                                                          ('Libro 7', '2023-07-01', 1),
                                                          ('Libro 8', '2023-08-01', 2),
                                                          ('Libro 9', '2023-09-01', 3),
                                                          ('Libro 10', '2023-10-01', 1);