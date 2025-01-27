# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): User's first name (minimum 3 characters).
  - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object):
    - `firstname` (string): User's first name.
    - `lastname` (string): User's last name.
  - `email` (string): User's email address.
- `token` (string): JWT Token.

## `/users/login` Endpoint

### Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object):
    - `firstname` (string): User's first name.
    - `lastname` (string): User's last name.
  - `email` (string): User's email address.
- `token` (string): JWT Token.

### Error Responses

#### Client Error (400):
- **Description**: Validation error or user not found.
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
    "message": "User not found"
  }
  ```

#### Unauthorized (401):
- **Description**: Invalid email or password.
- **Body**:
  ```json
  {
    "message": "Invalid email or password"
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
- A JWT token is generated and returned upon successful login.
# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): User's first name (minimum 3 characters).
  - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object):
    - `firstname` (string): User's first name.
    - `lastname` (string): User's last name.
  - `email` (string): User's email address.
- `token` (string): JWT Token.

## `/users/login` Endpoint

### Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object):
    - `firstname` (string): User's first name.
    - `lastname` (string): User's last name.
  - `email` (string): User's email address.
- `token` (string): JWT Token.

### Error Responses

#### Client Error (400):
- **Description**: Validation error or user not found.
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
    "message": "User not found"
  }
  ```

#### Unauthorized (401):
- **Description**: Invalid email or password.
- **Body**:
  ```json
  {
    "message": "Invalid email or password"
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
- A JWT token is generated and returned upon successful login.

## `/captains/register` Endpoint

### Description

Registers a new captain by creating a captain account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): Captain's first name (minimum 3 characters).
  - `lastname` (string, optional): Captain's last name (minimum 3 characters).
- `email` (string, required): Captain's email address (must be a valid email).
- `password` (string, required): Captain's password (minimum 6 characters).
- `vehicle` (object):
  - `color` (string, required): Vehicle color (minimum 3 characters).
  - `plate` (string, required): Vehicle plate number (minimum 3 characters).
  - `capacity` (number, required): Vehicle passenger capacity (minimum 1).
  - `vehicleType` (string, required): Type of vehicle (must be 'car', 'motorcycle', or 'auto').

### Example Response

- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Captain's first name.
    - `lastname` (string): Captain's last name.
  - `email` (string): Captain's email address.
  - `vehicle` (object):
    - `color` (string): Vehicle color.
    - `plate` (string): Vehicle plate number.
    - `capacity` (number): Vehicle passenger capacity.
    - `vehicleType` (string): Type of vehicle.
- `token` (string): JWT Token.

### Error Responses

#### Client Error (400):
- **Description**: Validation error or missing required fields.
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

#### Server Error (500):
- **Description**: Internal server error.
- **Body**:
  ```json
  {
    "message": "Internal server error"
  }
  ```

## `/captains/login` Endpoint

### Description

Authenticates a captain using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): Captain's email address (must be a valid email).
- `password` (string, required): Captain's password (minimum 6 characters).

### Example Response

- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Captain's first name.
    - `lastname` (string): Captain's last name.
  - `email` (string): Captain's email address.
  - `vehicle` (object):
    - `color` (string): Vehicle color.
    - `plate` (string): Vehicle plate number.
    - `capacity` (number): Vehicle passenger capacity.
    - `vehicleType` (string): Type of vehicle.


### Error Responses

#### Client Error (400):
- **Description**: Validation error or missing required fields.
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

#### Unauthorized (401):
- **Description**: Invalid email or password.
- **Body**:
  ```json
  {
    "message": "Invalid email or password"
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

## `/captains/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated captain.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

### Example Response

- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Captain's first name.
    - `lastname` (string): Captain's last name.
  - `email` (string): Captain's email address.
  - `vehicle` (object):
    - `color` (string): Vehicle color.
    - `plate` (string): Vehicle plate number.
    - `capacity` (number): Vehicle passenger capacity.
    - `vehicleType` (string): Type of vehicle.


-  `token` (String): JWT Token

### Error Responses

#### Unauthorized (401):
- **Description**: Invalid or missing token.
- **Body**:
  ```json
  {
    "message": "Invalid or missing token"
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

## `/captains/logout` Endpoint

### Description

Logs out the current captain and blacklists the token provided in the cookie or headers.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header or cookie.

### Example Response

- `message` (string): "Logged out successfully".

### Error Responses

#### Unauthorized (401):
- **Description**: Invalid or missing token.
- **Body**:
  ```json
  {
    "message": "Invalid or missing token"
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