CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    last_login_time DATETIME,
    registration_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('active', 'blocked') DEFAULT 'active'
);
