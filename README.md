# ⭐ Skill Matrix App

A full-stack app using the latest versions of the packages.

Using these technologies:

- Frontend
  - 🟦 TypeScript
  - ⚛️ React
  - ⚡ Vite
- Backend
  - 🟦 TypeScript
  - 🟢 Node.js
  - 🚀 Express
  - 📦 PostgreSQL
- Containers: 🐳 Docker

## ⚠️ Disclaimer

This is a **demo application** and is **not intended for production use**.

It is a **work in progress**, and features may change or be incomplete. Use at your own discretion.

## Task

Create a **full-stack app**, which can manage skill matrices of software developers.

The app should use **REST API** for architecture.

Example person JSON:

```
{
  "name": "John Smith",
  "team": "X",
  "domain": "frontend development",
  "expertiseLevel": "B3",
  "position": "frontend developer",
  "skills": ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "Angular"]
}
```

The team can be one of these:

```
X, Y, Z
```

Domain can be one of these:

```
frontend development, backend development
```

Position can be one of these:

```
frontend developer, backend developer
```

A frontend developer should have **exactly 5** of the following skills:

```
HTML, CSS, SCSS, JavaScript, TypeScript, Angular, React, Vue
```

A backend developer should have **exactly 5** of these skills:

```
PHP, C#, Node.js, Oracle, MySQL, Microsoft SQL Server, PostgreSQL, MongoDB
```

Expertise level should have **exactly one** of these:

```
A2, B1, B2, B3, C1
```

The app should manage the `/api/users` endpoint:

| Function | Verb     |
| -------- | -------- |
| Create   | `POST`   |
| Read     | `GET`    |
| Update   | `PUT`    |
| Delete   | `DELETE` |

### Tables

Here is a diagram for the SQL tables.

```
+-----------------+       +----------------+      +---------------------+
|   employees     |       |    skills      |      |  employee_skills    |
+-----------------+       +----------------+      +---------------------+
| id  (PK)        | <---+ | id  (PK)       |      | employee_id (PK,FK) |
| name            |       | name (UNIQUE)  |      | skill_id (PK,FK)    |
| team            |       +----------------+      +---------------------+
| domain          |
| expertise_level |
| position        |
+-----------------+
```

Explanation:

- `employees` has a primary key `id` (UUID).
- `skills` has a primary key `id` (UUID) and a unique `name`.
- `employee_skills` is a junction table that establishes a many-to-many relationship between `employees` and `skills`, using composite primary keys (`employee_id`, `skill_id`), both of which are foreign keys referencing their respective tables.

## Usage

You need at least `Node.js 20.18.0` to run this app.

Run these commands in the top level repo folder:

1. `npm run setup-env`
1. `npm run install:server`
1. `npm start`

**Please note**: only the backend is working at the moment.

## Licenc

Please see the [LICENSE file](LICENSE).

## History

I started the project on 14th of February, 2025.
