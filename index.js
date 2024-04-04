// Objeto Javascript

let Participantes = [
  {
    nome:"Matheus Pariz",
    email: "matheuspariz46@gmail.com",
    dataInscricao: new Date(2024, 3, 20, 10, 10),
    dataCheckin: null
  },
  {
    nome:"Natalia Moro",
    email: "natalia.moro@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: new Date(2024, 3, 25, 22, 00)
  },
  {
    nome:"Albert Einsten",
    email: "einsten22@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: new Date(2024, 9, 25, 22, 00)
  },
  {
    nome:"Frida Elizabeth",
    email: "frida.elizabeth@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: null
  },
  {
    nome:"Jose Xavier",
    email: "jose.x@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: null
  },
  {
    nome:"Ana Beatriz",
    email: "beatriz46@yahoo.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: new Date(2024, 6, 25, 22, 00)
  },
  {
    nome:"Lucas Silva",
    email: "lucassilva@hotmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: null
  },
  {
    nome:"Matheus Torres",
    email: "matheustorres46@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: new Date(2024, 3, 25, 22, 00)
  },
  {
    nome:"Marcos Moro",
    email: "marcosmoro@hotmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: new Date(2024, 8, 25, 22, 00)
  },
  {
    nome:"Maik Silva",
    email: "maik.silva@yahoo.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: null
  }

]

const CriarParticipante = (participante) => {

  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  let dataCheckin = dayjs(Date.now()).to(participante.dataCheckin)

  if(participante.dataCheckin == null) {
    dataCheckin = `
      <button
        data-email = "${participante.email}"
        onclick = "fazerChekIn(event)"
      >
        Confirmar Check-in
      </button>
    `
  }
  return `
      <tr>
        <td>
          <strong>
            ${participante.nome}
          </strong>
          <br>
          <small>
            ${participante.email}
          </small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckin}
      </tr>
  `
}

const AtualizarLista = (participantes) => {

  let output = ""

  //estrutura de Repetição

  for(let participante of participantes){
    output = output + CriarParticipante(participante)
  }

  // pegar informação do HTML



  //Subistituir Informação do HTML
  document.querySelector("tbody").innerHTML = output

}



AtualizarLista(Participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const DadosdoFormulario = new FormData(event.target)

  const participante = {

    nome: DadosdoFormulario.get("nome"),
    email: DadosdoFormulario.get("Email"),
    dataInscricao: new Date(),
    dataCheckin: null

  }

  const participanteExiste = Participantes.find((p) => {

    return p.email == participante.email

  })

  if(participanteExiste) {
    alert("Participante ja Cadastrado")
    return

  }

  Participantes = [participante, ...Participantes]
  AtualizarLista(Participantes)

  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="Email"]'). value = ""
}

const fazerChekIn = (event) => {
  // confirma se quer fazer chek-in

  const mensagemConfirmação =  "Deseja fazer o Check-in??"

  if(confirm(mensagemConfirmação) == false){
    return

  }
  // Encontra participante dentro da lista

  const participante = Participantes.find((p) => {
    return p.email == event.target.dataset.email
  })
  //atualizar chekIn do participante
  participante.dataCheckin = new Date()
  //atualizar lista de participantes
  AtualizarLista(Participantes)
}