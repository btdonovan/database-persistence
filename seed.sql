DELETE FROM students WHERE id >= 0;
DELETE FROM grades WHERE id >= 0;

INSERT INTO students (name) VALUES ('Joe Young');
INSERT INTO students (name) VALUES ('Tommy Chung');

INSERT INTO grades (student_id, grade) VALUES ((SELECT id FROM students WHERE name = 'Joe Young'), 'A+');
INSERT INTO grades (student_id, grade) VALUES ((SELECT id FROM students WHERE name = 'Tommy Chung'), 'B-');
INSERT INTO grades (student_id, grade) VALUES ((SELECT id FROM students WHERE name = 'Joe Young'), 'A');
INSERT INTO grades (student_id, grade) VALUES ((SELECT id FROM students WHERE name = 'Tommy Chung'), 'C');
INSERT INTO grades (student_id, grade) VALUES ((SELECT id FROM students WHERE name = 'Joe Young'), 'B');
INSERT INTO grades (student_id, grade) VALUES ((SELECT id FROM students WHERE name = 'Tommy Chung'), 'C+');