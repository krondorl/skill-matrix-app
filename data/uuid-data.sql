-- Create database if not exists
SELECT 'CREATE DATABASE skillmatrixdb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'skillmatrixdb')\gexec

-- Connect to the database
\c skillmatrixdb;

-- Enable pgcrypto extension for UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create employees table with UUID v7 as primary key
CREATE TABLE IF NOT EXISTS employees (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    team CHAR(1) NOT NULL,
    domain TEXT NOT NULL,
    expertise_level TEXT NOT NULL,
    position TEXT NOT NULL
);

-- Create skills table with UUID v7 as primary key
CREATE TABLE IF NOT EXISTS skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT UNIQUE NOT NULL
);

-- Create employee_skills table with UUID references
CREATE TABLE IF NOT EXISTS employee_skills (
    employee_id UUID REFERENCES employees(id) ON DELETE CASCADE,
    skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
    PRIMARY KEY (employee_id, skill_id)
);

-- Insert employees with generated UUIDs
INSERT INTO employees (id, name, team, domain, expertise_level, position)
VALUES
    (gen_random_uuid(), 'Alice Johnson', 'Y', 'frontend development', 'B2', 'frontend developer'),
    (gen_random_uuid(), 'Bob Williams', 'Z', 'backend development', 'C1', 'backend developer'),
    (gen_random_uuid(), 'Charlie Davis', 'X', 'frontend development', 'A2', 'frontend developer'),
    (gen_random_uuid(), 'Diana Roberts', 'Y', 'backend development', 'B3', 'backend developer'),
    (gen_random_uuid(), 'Ethan Miller', 'Z', 'frontend development', 'B1', 'frontend developer'),
    (gen_random_uuid(), 'Fiona Carter', 'X', 'backend development', 'B2', 'backend developer'),
    (gen_random_uuid(), 'George Adams', 'Y', 'frontend development', 'C1', 'frontend developer'),
    (gen_random_uuid(), 'Hannah Clark', 'Z', 'backend development', 'A2', 'backend developer'),
    (gen_random_uuid(), 'Ian Baker', 'X', 'frontend development', 'B3', 'frontend developer'),
    (gen_random_uuid(), 'Jenna Scott', 'Y', 'backend development', 'B1', 'backend developer'),
    (gen_random_uuid(), 'Kevin Reed', 'Z', 'frontend development', 'C1', 'frontend developer'),
    (gen_random_uuid(), 'Liam Turner', 'X', 'backend development', 'B2', 'backend developer'),
    (gen_random_uuid(), 'Mia Wilson', 'Y', 'frontend development', 'B3', 'frontend developer'),
    (gen_random_uuid(), 'Nathan Parker', 'Z', 'backend development', 'B1', 'backend developer'),
    (gen_random_uuid(), 'Olivia Evans', 'X', 'frontend development', 'A2', 'frontend developer')
ON CONFLICT DO NOTHING;

-- Insert skills with generated UUIDs
INSERT INTO skills (id, name)
VALUES
    (gen_random_uuid(), 'HTML'), (gen_random_uuid(), 'CSS'), (gen_random_uuid(), 'JavaScript'),
    (gen_random_uuid(), 'TypeScript'), (gen_random_uuid(), 'React'), (gen_random_uuid(), 'Node.js'),
    (gen_random_uuid(), 'MySQL'), (gen_random_uuid(), 'MongoDB'), (gen_random_uuid(), 'C#'),
    (gen_random_uuid(), 'PHP'), (gen_random_uuid(), 'SCSS'), (gen_random_uuid(), 'Vue'),
    (gen_random_uuid(), 'PostgreSQL'), (gen_random_uuid(), 'Microsoft SQL Server'), (gen_random_uuid(), 'Oracle'),
    (gen_random_uuid(), 'Angular')
ON CONFLICT DO NOTHING;

-- Insert employee_skills (mapping requires retrieving UUIDs dynamically)
INSERT INTO employee_skills (employee_id, skill_id)
SELECT e.id, s.id
FROM employees e, skills s
WHERE (e.name, s.name) IN (
    ('Alice Johnson', 'HTML'), ('Alice Johnson', 'CSS'), ('Alice Johnson', 'JavaScript'),
    ('Alice Johnson', 'TypeScript'), ('Alice Johnson', 'React'),
    ('Bob Williams', 'Node.js'), ('Bob Williams', 'MySQL'), ('Bob Williams', 'MongoDB'),
    ('Bob Williams', 'C#'), ('Bob Williams', 'PHP'),
    ('Charlie Davis', 'HTML'), ('Charlie Davis', 'CSS'), ('Charlie Davis', 'SCSS'),
    ('Charlie Davis', 'JavaScript'), ('Charlie Davis', 'Vue'),
    ('Diana Roberts', 'PostgreSQL'), ('Diana Roberts', 'Microsoft SQL Server'), ('Diana Roberts', 'C#'),
    ('Diana Roberts', 'Node.js'), ('Diana Roberts', 'Oracle'),
    ('Ethan Miller', 'JavaScript'), ('Ethan Miller', 'TypeScript'), ('Ethan Miller', 'Angular'),
    ('Ethan Miller', 'React'), ('Ethan Miller', 'SCSS'),
    ('Fiona Carter', 'MongoDB'), ('Fiona Carter', 'MySQL'), ('Fiona Carter', 'PHP'),
    ('Fiona Carter', 'Oracle'), ('Fiona Carter', 'Node.js'),
    ('George Adams', 'HTML'), ('George Adams', 'CSS'), ('George Adams', 'JavaScript'),
    ('George Adams', 'React'), ('George Adams', 'Vue'),
    ('Hannah Clark', 'PostgreSQL'), ('Hannah Clark', 'Microsoft SQL Server'), ('Hannah Clark', 'C#'),
    ('Hannah Clark', 'MySQL'), ('Hannah Clark', 'MongoDB'),
    ('Ian Baker', 'JavaScript'), ('Ian Baker', 'TypeScript'), ('Ian Baker', 'SCSS'),
    ('Ian Baker', 'Angular'), ('Ian Baker', 'Vue'),
    ('Jenna Scott', 'Oracle'), ('Jenna Scott', 'MySQL'), ('Jenna Scott', 'MongoDB'),
    ('Jenna Scott', 'PHP'), ('Jenna Scott', 'C#'),
    ('Kevin Reed', 'HTML'), ('Kevin Reed', 'CSS'), ('Kevin Reed', 'SCSS'),
    ('Kevin Reed', 'TypeScript'), ('Kevin Reed', 'React'),
    ('Liam Turner', 'Node.js'), ('Liam Turner', 'MySQL'), ('Liam Turner', 'MongoDB'),
    ('Liam Turner', 'PHP'), ('Liam Turner', 'PostgreSQL'),
    ('Mia Wilson', 'CSS'), ('Mia Wilson', 'SCSS'), ('Mia Wilson', 'JavaScript'),
    ('Mia Wilson', 'TypeScript'), ('Mia Wilson', 'Vue'),
    ('Nathan Parker', 'PostgreSQL'), ('Nathan Parker', 'Microsoft SQL Server'), ('Nathan Parker', 'Oracle'),
    ('Nathan Parker', 'Node.js'), ('Nathan Parker', 'C#'),
    ('Olivia Evans', 'HTML'), ('Olivia Evans', 'CSS'), ('Olivia Evans', 'JavaScript'),
    ('Olivia Evans', 'SCSS'), ('Olivia Evans', 'React')
)
ON CONFLICT DO NOTHING;
