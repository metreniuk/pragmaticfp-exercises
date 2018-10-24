import React from "react";
/*
  Exercise 6
*/

const students = [
  {
    name: "Ana 🙋‍♀️",
    grade: 10,
    gender: "F",
    dateOfBirth: {
      day: 10,
      month: 9,
      year: 1997
    },
    nationality: "🇲🇩",
    cityOfBirth: "Ungheni",
    scolarship: 700
  },
  {
    name: "Vasile 🤦‍♂️",
    grade: 4,
    gender: "M",
    dateOfBirth: {
      day: 20,
      month: 11,
      year: 1996
    },
    nationality: "🇹🇩",
    cityOfBirth: "Bucuresti",
    scolarship: 0
  },
  {
    name: "Maria 💇‍♀️",
    grade: 8,
    gender: "F",
    dateOfBirth: {
      day: 10,
      month: 9,
      year: 2000
    },
    nationality: "🇲🇩",
    cityOfBirth: "Chisinau",
    scolarship: 500
  },
  {
    name: "Ion 🤷‍♂️",
    grade: 8,
    gender: "M",
    dateOfBirth: {
      day: 10,
      month: 9,
      year: 1995
    },
    nationality: "🇲🇩",
    cityOfBirth: "Balti",
    scolarship: 500
  },
  {
    name: "Olga 🤦‍♀",
    grade: 7,
    gender: "F",
    dateOfBirth: {
      day: 10,
      month: 9,
      year: 1995
    },
    nationality: "🇲🇩",
    cityOfBirth: "Balti",
    scolarship: 400
  }
];

function isGood(student) {
  return student.grade > 6;
}

/**
 * 🦄:
 * 1. Refactor "isBoy" and "isGirl" functions
 * similar to the "hasGradeGraterThan" function from exercise 3.
 * 2. [optional] Find a problem in the "isOlderThanTwenty" function 🤓.
 */

function isOfGender(gender) {
  return function(student) {
    return student.gender === gender;
  };
}

function isBoy(student) {
  return student.gender === "M";
}

function isGirl(student) {
  return student.gender === "F";
}

function isOlderThanTwenty(student) {
  const dateOfBirth = student.dateOfBirth;
  const year = dateOfBirth.year;
  const month = dateOfBirth.month;
  const now = new Date();
  const yearDiff = now.getFullYear() - year;
  const monthDiff = now.getMonth() - month;
  return yearDiff === 0 ? monthDiff >= 0 : yearDiff > 20;
}

function processStudents(students) {
  const filteredStudents = students
    .filter(isGood)
    .filter(isOlderThanTwenty);
  const boysCount = filteredStudents.filter(isBoy).length;
  const girlsCount = filteredStudents.filter(isGirl).length;

  return {
    students: filteredStudents,
    boys: boysCount,
    girls: girlsCount
  };
}

// 🌈This is a fancy way to write html inside JavaScript
// think of it just as html on steroids.
// Don't touch it 👀(at least if you don't know what you are doing).
const Usage = () => {
  const { students: s, boys, girls } = processStudents(students);
  return (
    <div>
      <div className="heading">Students:</div>
      <div className="student-group">
        {s.map(student => <div key={student.name}> {student.name} </div>)}
      </div>
      The dream team consists of {girls} girl(s) and {boys} boy(s)
    </div>
  );
};
export default Usage;
