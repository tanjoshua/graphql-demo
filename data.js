// REPLACING A DB FOR THE DEMO

const classes = [
  { id: 1, name: "Computer Systems", code: "CS0330", students: [1, 2] },
  { id: 2, name: "Corporate Finance", code: "ECON1720", students: [1, 2, 3] },
  { id: 3, name: "Operations Research", code: "APMA1210", students: [2, 3] },
  { id: 4, name: "Deep Learning", code: "CS1470", students: [1] },
];

const students = [
  {
    id: 1,
    name: "Joshua",
    year: 2,
    major: "Computer Science",
  },
  {
    id: 2,
    name: "Adam",
    year: 2,
    major: "Applied Mathematics",
  },
  {
    id: 3,
    name: "Albert",
    year: 2,
    major: "Economics",
  },
];

module.exports = { classes, students };
