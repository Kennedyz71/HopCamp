DROP TABLE IF EXISTS campsites CASCADE;

CREATE TABLE campsites (
  id serial PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  available INT,
  demand TEXT,
  instantBook BOOLEAN,
  descriptions VARCHAR,
  capacity INT,
  restrictions TEXT,
  amenities TEXT,
  price DECIMAL(8, 2),
  type varchar,
  imgURL TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
