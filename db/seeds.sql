CREATE TABLE burgers
(
    id int AUTO_INCREMENT,
    burger_name varchar(30) NOT NULL,
    devoured TINYINT unsigned NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO burgers
    (burger_name, devoured)
VALUES 
    ("Big Mac", 0);

INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ("Whopper", 0);

INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ("Double-Cheese", 0);