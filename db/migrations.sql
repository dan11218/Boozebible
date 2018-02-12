\c cocktails_list

DROP TABLE IF EXISTS saved_drinks;

CREATE TABLE saved_drinks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  ingredient VARCHAR(255)
);

  DROP TABLE IF EXISTS ingredients;

  CREATE TABLE ingredients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),

  );
