-- Stores general information about all users.
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    role VARCHAR(50) CHECK (role IN ('driver', 'station_host', 'admin')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Stores additional information specific to drivers.
CREATE TABLE drivers (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    license_number VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE drivers (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    license_number VARCHAR(255),
    vehicle_model VARCHAR(255),
    battery_capacity DECIMAL,
    rating DECIMAL(3, 2),
    payment_information TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 

--  Stores additional information specific to station hosts.
-- CREATE TABLE station_hosts (
--     id SERIAL PRIMARY KEY,
--     user_id INTEGER REFERENCES users(id),
--     company_name VARCHAR(255),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
CREATE TABLE station_host (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL,
    availability VARCHAR(20) NOT NULL CHECK (availability IN ('available', 'unavailable', 'under repair')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Stores additional information specific to admins.
CREATE TABLE admins (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
--  Stores information about charging stations.
-- CREATE TABLE stations (
--     id SERIAL PRIMARY KEY,
--     host_id INTEGER REFERENCES station_hosts(id),
--     name VARCHAR(255),
--     location VARCHAR(255),
--     status VARCHAR(50) CHECK (status IN ('available', 'busy', 'under_maintenance')),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
--     -- latitude DECIMAL(10, 8),
--     -- longitude DECIMAL(11, 8),
-- );

CREATE TABLE stations (
    id SERIAL PRIMARY KEY,
    station_name VARCHAR(100) NOT NULL,
    host_id INTEGER REFERENCES station_hosts(id),
    location VARCHAR(255) NOT NULL,
    status VARCHAR(50) CHECK (status IN ('available', 'busy', 'under_maintenance'))
);
-- Stores booking information.
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    driver_id INTEGER REFERENCES drivers(id),
    station_id INTEGER REFERENCES stations(id),
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    status VARCHAR(50) CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Stores information about charging sessions.
CREATE TABLE charging_sessions (
    id SERIAL PRIMARY KEY,
    booking_id INTEGER REFERENCES bookings(id),
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    energy_consumed DECIMAL(10, 2),
    cost DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Stores payment transactions.
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    driver_id INTEGER REFERENCES drivers(id),
    amount DECIMAL(10, 2),
    status VARCHAR(50) CHECK (status IN ('pending', 'completed', 'failed')),
    payment_method VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Stores details of each transaction.
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    payment_id INTEGER REFERENCES payments(id),
    transaction_id VARCHAR(255),
    status VARCHAR(50) CHECK (status IN ('pending', 'completed', 'failed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Stores information about garages.
CREATE TABLE garages (
    id SERIAL PRIMARY KEY,
    host_id INTEGER REFERENCES station_hosts(id),
    name VARCHAR(255),
    location VARCHAR(255),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Stores information about service bookings.
CREATE TABLE service_bookings (
    id SERIAL PRIMARY KEY,
    driver_id INTEGER REFERENCES drivers(id),
    garage_id INTEGER REFERENCES garages(id),
    service_details TEXT,
    appointment_time TIMESTAMP,
    status VARCHAR(50) CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
--  Stores notifications for all users.
CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    message TEXT,
    read_status VARCHAR(50) CHECK (read_status IN ('unread', 'read')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Stores reviews for stations. 
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    driver_id INTEGER REFERENCES drivers(id),
    station_id INTEGER REFERENCES stations(id),
    rating INTEGER CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE provinces_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  province VARCHAR(255) NOT NULL,
  type1 INT NOT NULL,
  type2 INT NOT NULL,
  type3 INT NOT NULL,
--   type3_color VARCHAR(255) NOT NULL
--   type1_color VARCHAR(255) NOT NULL,
--   type2_color VARCHAR(255) NOT NULL,
);
