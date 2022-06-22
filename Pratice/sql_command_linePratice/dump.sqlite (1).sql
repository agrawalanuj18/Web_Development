-- TABLE
CREATE TABLE demo (ID integer primary key, Name varchar(20), Hint text );
CREATE TABLE orders (

  id int not NULL,
  order_number int, 
  customer_id INT,
  product_id int, 
  PRIMARY key (id)
  FOREIGN KEY (product_id) REFERENCES products(id)
);
CREATE TABLE products (

  id int NOT NULL,
  name STRING,
  price MONEY, stocks INT,
  PRIMARY KEY (id)
);
 
-- INDEX
 
-- TRIGGER
 
-- VIEW
 
