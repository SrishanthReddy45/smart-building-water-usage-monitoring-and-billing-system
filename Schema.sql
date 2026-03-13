CREATE DATABASE IF NOT EXISTS water_monitor;
USE water_monitor;

-- 1. Buildings Table
CREATE TABLE buildings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    units INT DEFAULT 0,
    status ENUM('normal', 'warning', 'alert') DEFAULT 'normal',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Water Meters Table
CREATE TABLE water_meters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    building_id INT,
    unit_number VARCHAR(20) NOT NULL,
    tenant_name VARCHAR(100),
    current_reading DECIMAL(12, 2) DEFAULT 0.00,
    daily_usage DECIMAL(10, 2) DEFAULT 0.00,
    monthly_usage DECIMAL(12, 2) DEFAULT 0.00,
    status ENUM('normal', 'high', 'leak-detected', 'inactive') DEFAULT 'normal',
    FOREIGN KEY (building_id) REFERENCES buildings(id) ON DELETE CASCADE
);

-- 3. Billing Records Table
CREATE TABLE billing_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    meter_id INT,
    period VARCHAR(50), -- e.g., "Oct 2023"
    usage_liters INT,
    amount DECIMAL(10, 2),
    due_date DATE,
    status ENUM('paid', 'pending', 'overdue') DEFAULT 'pending',
    FOREIGN KEY (meter_id) REFERENCES water_meters(id) ON DELETE CASCADE
);

-- 4. Alerts Table
CREATE TABLE alerts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type ENUM('leak', 'high-usage', 'meter-fault', 'payment-overdue'),
    severity ENUM('critical', 'high', 'medium', 'low'),
    message TEXT NOT NULL,
    resolved BOOLEAN DEFAULT FALSE,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Hourly Usage (For the DailyUsageChart)
CREATE TABLE hourly_usage (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hour INT, -- 0 to 23
    usage_liters INT,
    recorded_date DATE DEFAULT (CURRENT_DATE)
);