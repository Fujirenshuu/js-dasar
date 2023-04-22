const StudentsRow = [
  ["kevin", "miku", "dabi", "wa"],
  ["fieco", "ryou", "fubuki", "wo"],
  ["even", "wielino", "guntur", "wi"],
];

// for (let i = 0; i < StudentsRow.length; i++) {
//   const row = StudentsRow[i];
//   console.log(`seat row ${i + 1}`);

//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

for (student of StudentsRow) {
  for (person of student) {
    console.log(`jelema ${person}`);
  }
}
