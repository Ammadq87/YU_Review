DROP SCHEMA YU_Reviews;

CREATE SCHEMA YU_Reviews;

USE YU_Reviews;

CREATE TABLE Major (
    ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    Description VARCHAR(255) UNIQUE
);

CREATE TABLE User (
    ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(255) UNIQUE,
    Password VARCHAR(255),
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Bio VARCHAR(1000),
    MajorID INTEGER,
    FOREIGN KEY (MajorID) REFERENCES Major(ID)
);

CREATE TABLE Course (
	ID VARCHAR(255) PRIMARY KEY,
	Subject VARCHAR(2),
    Department VARCHAR(10),
    Code VARCHAR(10),
    Credit DECIMAL,
    Relevance BIGINT DEFAULT 0
);

CREATE TABLE Professor (
	ID INTEGER PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255) 
);

CREATE TABLE CourseReview (
    ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    Review VARCHAR(1000),
    CourseID VARCHAR(255),
    ProfessorID INTEGER,
    DatePosted DATE,
    UserID INTEGER,
    Difficulty INTEGER,
    Useful INTEGER,
    Retake TINYINT,
    LikedCourse TINYINT,
    ReviewLikes INTEGER,
    ReviewDislikes INTEGER,
    FOREIGN KEY (CourseID) REFERENCES Course(ID),
    FOREIGN KEY (ProfessorID) REFERENCES Professor(ID),
    FOREIGN KEY (UserID) REFERENCES User(ID)
);

CREATE TABLE UserReviewsCourse (
    UserID INTEGER,
    CourseReviewID INTEGER,
    FOREIGN KEY (UserID) REFERENCES User(ID),
    FOREIGN KEY (CourseReviewID) REFERENCES CourseReview(ID)
);

CREATE TABLE UserRatesCourse (
    UserID INTEGER,
    CourseReviewID INTEGER,
    RateValue TINYINT,
    FOREIGN KEY (UserID) REFERENCES User(ID),
    FOREIGN KEY (CourseReviewID) REFERENCES CourseReview(ID)
);

CREATE TABLE UserFavouritesCourse (
    UserID INTEGER,
    CourseID VARCHAR(255),
    FOREIGN KEY (UserID) REFERENCES User(ID),
    FOREIGN KEY (CourseID) REFERENCES Course(ID)
);

CREATE TABLE ProfessorReview (
    ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    Review VARCHAR(1000),
    CourseID VARCHAR(255),
    ProfessorID INTEGER,
    DatePosted DATE,
    UserID INTEGER,
    Clarity INTEGER,
    Engaging INTEGER,
    Difficulty INTEGER,
    Retake TINYINT,
    LikedProfessor TINYINT,
    ReviewLikes INTEGER,
    ReviewDislikes INTEGER,
    FOREIGN KEY (CourseID) REFERENCES Course(ID),
    FOREIGN KEY (ProfessorID) REFERENCES Professor(ID),
    FOREIGN KEY (UserID) REFERENCES User(ID)
);

CREATE TABLE UserRatesProfessor (
    UserID INTEGER,
    ProfessorReviewID INTEGER,
    RateValue TINYINT,
    FOREIGN KEY (UserID) REFERENCES User(ID),
    FOREIGN KEY (ProfessorReviewID) REFERENCES ProfessorReview(ID)
);

CREATE TABLE UserFavouritesProfessor (
    UserID INTEGER,
    ProfessorID INTEGER,
    FOREIGN KEY (UserID) REFERENCES User(ID),
    FOREIGN KEY (ProfessorID) REFERENCES Professor(ID)
);

CREATE TABLE UserReviewsProfessor (
    UserID INTEGER,
    ProfessorReviewID INTEGER,
    FOREIGN KEY (UserID) REFERENCES User(ID),
    FOREIGN KEY (ProfessorReviewID) REFERENCES ProfessorReview(ID)
);

