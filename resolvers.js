const { classes, students } = require("./data");

module.exports = {
  Query: {
    classes: () => classes,
    students: () => students,
  },
  Class: {
    students: (parent) => {
      return students.filter((student) => parent.students.includes(student.id));
    },
  },
};
