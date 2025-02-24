-- Early version with integer primary keys.
-- Not used at the moment.
CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    team CHAR(1) NOT NULL,
    domain TEXT NOT NULL,
    expertise_level TEXT NOT NULL,
    position TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS skills (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS employee_skills (
    employee_id INT REFERENCES employees(id) ON DELETE CASCADE,
    skill_id INT REFERENCES skills(id) ON DELETE CASCADE,
    PRIMARY KEY (employee_id, skill_id)
);

INSERT INTO employees (name, team, domain, expertise_level, position)
SELECT * FROM (VALUES
    ('Alice Johnson', 'Y', 'frontend development', 'B2', 'frontend developer'),
    ('Bob Williams', 'Z', 'backend development', 'C1', 'backend developer'),
    ('Charlie Davis', 'X', 'frontend development', 'A2', 'frontend developer'),
    ('Diana Roberts', 'Y', 'backend development', 'B3', 'backend developer'),
    ('Ethan Miller', 'Z', 'frontend development', 'B1', 'frontend developer'),
    ('Fiona Carter', 'X', 'backend development', 'B2', 'backend developer'),
    ('George Adams', 'Y', 'frontend development', 'C1', 'frontend developer'),
    ('Hannah Clark', 'Z', 'backend development', 'A2', 'backend developer'),
    ('Ian Baker', 'X', 'frontend development', 'B3', 'frontend developer'),
    ('Jenna Scott', 'Y', 'backend development', 'B1', 'backend developer'),
    ('Kevin Reed', 'Z', 'frontend development', 'C1', 'frontend developer'),
    ('Liam Turner', 'X', 'backend development', 'B2', 'backend developer'),
    ('Mia Wilson', 'Y', 'frontend development', 'B3', 'frontend developer'),
    ('Nathan Parker', 'Z', 'backend development', 'B1', 'backend developer'),
    ('Olivia Evans', 'X', 'frontend development', 'A2', 'frontend developer')
) AS t (name, team, domain, expertise_level, position)
WHERE NOT EXISTS (SELECT 1 FROM employees);

INSERT INTO skills (name)
SELECT * FROM (VALUES
    ('HTML'), ('CSS'), ('JavaScript'), ('TypeScript'), ('React'),
    ('Node.js'), ('MySQL'), ('MongoDB'), ('C#'), ('PHP'),
    ('SCSS'), ('Vue'), ('PostgreSQL'), ('Microsoft SQL Server'), ('Oracle'),
    ('Angular')
) AS t (name)
WHERE NOT EXISTS (SELECT 1 FROM skills);

INSERT INTO employee_skills (employee_id, skill_id)
SELECT * FROM (VALUES
    (1, 1), (1, 2), (1, 3), (1, 4), (1, 5),  -- Alice Johnson
    (2, 6), (2, 7), (2, 8), (2, 9), (2, 10), -- Bob Williams
    (3, 1), (3, 2), (3, 11), (3, 3), (3, 12), -- Charlie Davis
    (4, 13), (4, 14), (4, 9), (4, 6), (4, 15), -- Diana Roberts
    (5, 3), (5, 4), (5, 16), (5, 5), (5, 11), -- Ethan Miller
    (6, 8), (6, 7), (6, 10), (6, 15), (6, 6), -- Fiona Carter
    (7, 1), (7, 2), (7, 3), (7, 5), (7, 12), -- George Adams
    (8, 13), (8, 14), (8, 9), (8, 7), (8, 8), -- Hannah Clark
    (9, 3), (9, 4), (9, 11), (9, 16), (9, 12), -- Ian Baker
    (10, 15), (10, 7), (10, 8), (10, 10), (10, 9), -- Jenna Scott
    (11, 1), (11, 2), (11, 11), (11, 4), (11, 5), -- Kevin Reed
    (12, 6), (12, 7), (12, 8), (12, 10), (12, 13), -- Liam Turner
    (13, 2), (13, 11), (13, 3), (13, 4), (13, 12), -- Mia Wilson
    (14, 13), (14, 14), (14, 15), (14, 6), (14, 9), -- Nathan Parker
    (15, 1), (15, 2), (15, 3), (15, 11), (15, 5)  -- Olivia Evans
) AS t (employee_id, skill_id)
WHERE NOT EXISTS (SELECT 1 FROM employee_skills);
