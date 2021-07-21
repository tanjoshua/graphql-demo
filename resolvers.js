const { classes, students } = require("./data");

module.exports = {
  Query: {
    classes: () => classes,
    students: () => students,
    class: (parent, args, context, info) => classes.find(e => e.id === args.id),
    student: (parent, args, context, info) => students.find(e => e.id === args.id)
  },
  Class: {
    students: (parent) => {
      return students.filter((student) => parent.students.includes(student.id));
    },
  },
};
