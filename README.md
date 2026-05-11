# School Management API

This project is a Node.js and MySQL based REST API for managing school data.

The API allows users to:

* Add new schools
* Retrieve schools sorted by proximity to a user's location

## Tech Stack

* Node.js
* Express.js
* MySQL

## Features

* Input validation
* Latitude and longitude validation
* Distance-based school sorting
* Error handling
* Hosted API support
* Postman collection included

---

## Database Schema

Table: `schools`

Fields:

* `id` - Primary Key
* `name` - VARCHAR
* `address` - VARCHAR
* `latitude` - DOUBLE
* `longitude` - DOUBLE

Example schema:

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL
);
```

---

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into the project directory:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_management
PORT=3000
```

Start the server:

```bash
npm start
```


---

## API Endpoints

### Add School

Endpoint:

```http
POST /api/addSchool
```

Sample Request:

```json
{
  "name": "Delhi Public School",
  "address": "Delhi",
  "latitude": 28.6139,
  "longitude": 77.2090
}
```

Sample Response:

```json
{
  "message": "School added successfully"
}
```

---

### List Schools

Endpoint:

```http
GET /api/listSchools?latitude=28.6139&longitude=77.2090
```

Sample Response:

```json
[
  {
    "id": 1,
    "name": "Delhi Public School",
    "address": "Delhi",
    "latitude": 28.6139,
    "longitude": 77.2090,
    "distance": 0
  }
]
```

---

## Validation

The API validates:

* Missing fields
* Empty values
* Spaces-only strings
* Invalid data types
* Invalid latitude/longitude ranges
* Malformed JSON
* Invalid content-type

---

## Deployment

Live API:

```txt
https://school-data-c3r3.onrender.com/
```

