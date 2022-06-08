const students = [
    {
      name: "João",
      gradeOne: 7,
      gradeTwo: 7
    },
    {
      name: "Pedro",
      gradeOne: 5,
      gradeTwo: 6
    },
    {
      name: "Bia",
      gradeOne: 4,
      gradeTwo: 5
    },
    {
      name: "Lucas",
      gradeOne: 9,
      gradeTwo: 8

    },
    {
      name: "Giovana",
      gradeOne: 4,
      gradeTwo: 7

    },
    {
      name: "Marcos",
      gradeOne: 6,
      gradeTwo: 4

    },
    {
      name: "Matheus",
      gradeOne: 9,
      gradeTwo: 10

    },
    {
      name: "Vitória",
      gradeOne: 9,
      gradeTwo: 9

    }
]

function average(student) {
  let result =  (student.gradeOne + student.gradeTwo) / 2
  
  if(result >=7) {
    alert(`A média do aluno(a) ${student.name} é: ${result} \n Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do aluno(a) ${student.name} é: ${result} \n Não foi dessa vez, ${student.name}! Tente novamente!`)
  }
}

for (let student of students) {
  let averageMessage = average(student)
}