CREATE DATABASE water_monitor;

USE water_monitor;

CREATE TABLE water_usage(
    id INT AUTO_INCREMENT PRIMARY KEY,
    building_name VARCHAR(50),
    usage_liters FLOAT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);