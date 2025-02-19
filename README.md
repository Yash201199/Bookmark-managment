# Bookmark-managment
A Bookmark Manager using Node.js, Express, HTML, CSS, and JavaScript! 🔥
# Bookmark Manager

A simple **Bookmark Manager** built using **Node.js, Express, HTML, CSS, and JavaScript** to store, manage, and delete bookmarks efficiently.

## Features
- Add bookmarks with a title and URL.
- View a list of saved bookmarks.
- Delete bookmarks when no longer needed.
- Responsive UI with a clean design.

## Technologies Used
- **Backend:** Node.js, Express.js
- **Frontend:** HTML, CSS, JavaScript
- **Database:** In-Memory Storage (Can be extended to MongoDB)

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/bookmark-manager.git
cd bookmark-manager
```

### 2. Backend Setup
```sh
cd backend
npm install
npm start  # Runs the backend server on PORT 5000
```

### 3. Frontend Setup
```sh
cd ../frontend
npm install  # (if applicable)
Open index.html in your browser
```

## API Endpoints

### 1. Get All Bookmarks
**GET** `/bookmarks`
```json
Response: [
  { "id": 1, "title": "Google", "url": "https://google.com" },
  { "id": 2, "title": "GitHub", "url": "https://github.com" }
]
```

### 2. Add a Bookmark
**POST** `/bookmarks`
```json
Request Body:
{
  "title": "Google",
  "url": "https://google.com"
}
```

### 3. Delete a Bookmark
**DELETE** `/bookmarks/:id`
```json
Response: { "message": "Bookmark deleted successfully" }
```

## UI Reference
![Bookmark Manager UI](https://your-image-link.com)

## Future Enhancements
- Add **MongoDB** for persistent storage.
- Implement **user authentication**.
- Add categories for better bookmark organization.

## Contributing
Feel free to fork the repo and submit pull requests! 🚀

## License
MIT License. Free to use and modify.

