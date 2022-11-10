function helloWorld() {
  console.log('Hello World')
}

//FIXME arrumar esta bagaça
const saudacao = () => {
  var data = new Date()
  return data.getHours() <= 12
    ? 'Bom dia'
    : data.getHours() <= 18
    ? 'Boa tarde'
    : 'Boa Noite'
}

//TODO comentário modificado PARA TESTE DE to do
helloWorld()

console.log('A saudação do momento é: ' + saudacao())
