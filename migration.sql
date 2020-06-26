DROP TABLE IF EXISTS students, grades;

CREATE TABLE students (
  id serial PRIMARY KEY,
  name varchar(100)
);

CREATE TABLE grades (
  id serial PRIMARY KEY,
  student_id integer,
  FOREIGN KEY (student_id) REFERENCES students(id),
  grade varchar(2)
);