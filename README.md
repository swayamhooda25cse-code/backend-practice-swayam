## 📬 API Endpoints Summary

### User Routes (`/api/v1/users`)
| Method | Endpoint | Description | Request Body |
|---|---|---|---|
| `POST` | `/api/v1/users/register` | Register new user | `{ "username": "...", "email": "...", "password": "..." }` |
| `POST` | `/api/v1/users/login` | Login user | `{ "email": "...", "password": "..." }` |
| `POST` | `/api/v1/users/logout` | Logout user | `{ "email": "..." }` |

### Post Routes (`/api/v1/posts`)
| Method | Endpoint | Description | Request Body |
|---|---|---|---|
| `POST` | `/api/v1/posts/create` | Create a post | `{ "name": "...", "description": "...", "age": 25 }` |
| `GET` | `/api/v1/posts/getPosts` | Fetch all posts | None |
| `PATCH` | `/api/v1/posts/update/:id` | Update post by ID | `{ "name": "Updated Name" }` |
| `DELETE` | `/api/v1/posts/delete/:id` | Delete post by ID | None |
