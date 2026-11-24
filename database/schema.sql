CREATE DATABASE IF NOT EXISTS cyberhub;
USE cyberhub;

CREATE TABLE IF NOT EXISTS threats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    term_name VARCHAR(255) NOT NULL UNIQUE,
    risk_level VARCHAR(50),
    severity_level INT,
    rarity_factor VARCHAR(100),
    difficulty VARCHAR(100),
    definition TEXT
);
