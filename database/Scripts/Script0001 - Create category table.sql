CREATE TABLE IF NOT EXISTS Category (
    id SERIAL NOT NULL,
    title VARCHAR(255),
    color VARCHAR(100),
    CONSTRAINT category_pkey PRIMARY KEY (id)
);