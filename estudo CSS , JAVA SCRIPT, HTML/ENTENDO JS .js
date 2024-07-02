let titulo =document.querySelector("h1")
titulo.textContent = "FUNÇÕES NO JS !"
let box = document.querySelectorAll("box")
// vou definir minha função aqui agora !
function olaMundo (){
 return "Boa noite! me chamo leonardo lopes fernades "
}
//abaixo irei chamar minha função executar ela!
olaMundo()
document.write (olaMundo())
 // funções com parametro 
 let x = 2
 let y = 5
 let mensagem = "JESUS CRISTO É SALVADOR !"
 // FUNÇÕES sem PARAMETROS E COM RETORNO !
 function somar ( ) {
    return(x,y)
 }
 somar ( x , y)
 document.write (`<p>${somar (x,y)}</p> `)
// função Arrow!
 const leoArrow = () => document.write ("olá leonardo!!!!!")
 leoArrow()
 // outra Arrow function
 const leo2 =() => "<h2>Está gostando leonardo lopes fernandes ?</h2>"
    document.write (leo2 ())