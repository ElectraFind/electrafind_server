CREATE TABLE users(
  userid SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phoneNumber VARCHAR(20),
  password VARCHAR(255) NOT NULL,
  address VARCHAR(255),
  role VARCHAR(20) NOT NULL,
  registrationDate TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  profilePicture VARCHAR(255)
);

CREATE TABLE driver (
  driverid SERIAL PRIMARY KEY,
);

CREATE TABLE serviceprovider (
  serviceproviderid SERIAL PRIMARY KEY,
  userid INT UNIQUE NOT NULL REFERENCES user(userid),
  station_name VARCHAR(100) NOT NULL,
  location VARCHAR(255), -- Consider using PostGIS for more complex location data
  servicesoffered TEXT, -- Or create a separate Services table for better management
  availability TEXT, -- Adjust data type based on availability representation
  rating NUMERIC(2,1),
  contactinformation VARCHAR(100)
);

CREATE TABLE chargingstation (
  stationid SERIAL PRIMARY KEY,
  location VARCHAR(255), -- Consider using PostGIS for more complex location data
  chargingcapacity NUMERIC(5,2),
  availability BOOLEAN,
  pricing NUMERIC(5,2),
  serviceproviderid INT REFERENCES serviceprovider(serviceproviderid)
);

CREATE TABLE vehicle (
  vehicleid SERIAL PRIMARY KEY,
  model VARCHAR(50),
  batterycapacity NUMERIC(5,2),
  ownerid INT REFERENCES driver(driverid)
);

CREATE TABLE advertisement (
  adid SERIAL PRIMARY KEY,
  title VARCHAR(100),
  description TEXT,
  price NUMERIC(10,2),
  image VARCHAR(255),
  userid INT REFERENCES user(userid),
  category VARCHAR(20)
);
CREATE TABLE booking (
  bookingid  SERIAL PRIMARY KEY,
  driverid INT REFERENCES driver(driverid),
  stationid INT REFERENCES ChargingStation(stationid),
  starttime TIMESTAMP WITH TIME ZONE,
  endtime TIMESTAMP WITH TIME ZONE,
  status VARCHAR(20)
);

CREATE TABLE feedback (
  feedbackid SERIAL PRIMARY KEY,
  userid INT REFERENCES user(userid),
  targettype VARCHAR(20), -- Driver, ServiceProvider, ChargingStation
  targetid INT,
  rating NUMERIC(2,1),
  comment TEXT
);

CREATE TABLE payment (
  paymentid SERIAL PRIMARY KEY,
  driverid INT REFERENCES driver(driverid),
  amount NUMERIC(10,2),
  paymentmethod VARCHAR(50),
  paymentdate TIMESTAMP WITH TIME ZONE
);
