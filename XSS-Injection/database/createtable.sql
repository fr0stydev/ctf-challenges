CREATE USER 'frosty'@'%' IDENTIFIED BY 'password';

GRANT ALL ON data.* TO 'frosty'@'%';

CREATE TABLE comments (
    comment varchar(255)
);