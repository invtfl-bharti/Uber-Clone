# User Registration Endpoint Documentation

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It validates the input data, checks if the user already exists, hashes the password, and creates a new user in the database.

### Request Body:
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters.
  - `lastname`: A string with at least 3 characters.
- `email`: A valid email address.
- `password`: A string with at least 6 characters.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success (201):
- **Description**: User successfully registered.
- **Body**:
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Client Error (400):
- **Description**: Validation error or user already exists.
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```
  or
  ```json
  {
    "message": "User already exists"
  }
  ```

#### Server Error (500):
- **Description**: Internal server error.
- **Body**:
  ```json
  {
    "message": "Internal server error"
  }
  ```

### Notes:
- Ensure that all required fields are provided in the request body.
- The password is hashed before being stored in the database.
- A JWT token is generated and returned upon successful registration.