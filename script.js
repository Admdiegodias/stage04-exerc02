alert("Lista de estudantes do curso da Rocketseat-2023")

const students = [
  {
    name: "Diego",
    firstGrade: "8",
    secondGrade: "10",
  },
  {
    name: "José",
    firstGrade: "6",
    secondGrade: "8",
  },
  {
    name: "Amanda",
    firstGrade: "7",
    secondGrade: "7",
  },
  {
    name: "Paulo",
    firstGrade: "5",
    secondGrade: "5",
  },
  {
    name: "Juliana",
    firstGrade: "7",
    secondGrade: "9",
  },
  {
    name: "Karoline",
    firstGrade: "9",
    secondGrade: "10",
  },
  {
    name: "Bruna",
    firstGrade: "6",
    secondGrade: "7",
  }
]

//Função para calcular a média entre duas notas.
function makeAvarage(firstGrade, secondGrade){
  let avarage = (Number(firstGrade) + Number(secondGrade)) / 2
  return avarage
}

//Função para colocar os nomes em ordem alfabética com base os nomes.
function checkNames(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

if (nameA < nameB) {
  return -1;
} else if (nameA > nameB) {
  return 1;
} else {
  return 0;
}
}
students.sort(checkNames);

for(let i = 0; i < students.length; i++){
  let avarage = makeAvarage(students[i].firstGrade, students[i].secondGrade)

  if(avarage >= 7){
    alert(`A média do aluno(a) ${students[i].name} foi de ${avarage.toFixed(2)}.\nParabéns, ${students[i].name}! Você foi aprovado(a)! `)
  }else{
    alert(`A média do aluno(a) ${students[i].name} foi de ${avarage.toFixed(2)}. \nNão foi dessa vez, ${students[i].name}! Tente novamente!`)
  }
}