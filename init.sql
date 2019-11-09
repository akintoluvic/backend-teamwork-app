CREATE TABLE users (
userId SERIAL PRIMARY KEY,
firstName VARCHAR,
lastName VARCHAR,
email VARCHAR NOT NULL,
password VARCHAR NOT NULL,
gender VARCHAR,
jobRole VARCHAR,
department VARCHAR,
address VARCHAR,
userType VARCHAR DEFAULT 'employee',
createdOn TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (firstName, lastName, email, password, gender, jobRole, department, address, userType)
VALUES ('Moha', 'Buhar', 'ade@ade.com', 'ade1234', 'male', 'CEO', 'Management', '12, Olol Street, Ageege, Lagos', 'admin');

CREATE TABLE posts (
postId SERIAL PRIMARY KEY,
title VARCHAR NOT NULL,
article VARCHAR,
imageUrl VARCHAR,
authorId INTEGER REFERENCES users(userId) ON DELETE CASCADE,
tag VARCHAR NOT NULL,
inapropriate VARCHAR DEFAULT 'no',
createdOn TIMESTAMP DEFAULT NOW()
);

CREATE TABLE comments (
commentId SERIAL PRIMARY KEY,
comment VARCHAR NOT NULL,
authorId INTEGER REFERENCES users(userId) ON DELETE CASCADE,
inapropriate VARCHAR DEFAULT 'no',
postId INTEGER REFERENCES posts(postId) ON DELETE CASCADE,
createdOn TIMESTAMP DEFAULT NOW()
);