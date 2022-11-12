function createGame(player1, hour, player2){

    return `
                    <li>
                        <img src="assets/icon-${player1}.svg" alt="Bandeira do Brasil">
                        <strong>${hour}</strong>
                        <img src="assets/icon-${player2}.svg" alt="Bandeira da Sérvia">
                    </li>
    `

}

function createCard(date, day, games){
    return `
    <div class="card">
                <h2 class=${date}>${date} <span>${day}</span></h2>

                <ul>
                     ${games}
                </ul>
            </div>
`
}

function start(){

    document.querySelector('.start').innerHTML = `<button id="jogosHoje">Jogos de hoje</button>
    <button id="todosJogos">Todos os jogos</button>`

}

start();

document.querySelector('#app').innerHTML = `
<header>
            <img src="assets/logo.svg" alt="">
        </header>
        <main id="cards">
        <div id="cardHide">
            ${createCard("12/11/2022","",createGame('catar', '13:00', 'equador'))}
            <br>
            ${createCard("21/11/2022", "segunda",createGame('inglaterra', '10:00', 'ira') + createGame('senegal', '13:00', 'holanda')+ createGame('estados-unidos', '16:00', 'gales'))}
            <br>
            ${createCard("22/11/2022", "terça",createGame('argentina', '07:00', 'arabia-saudita')
             + createGame('dinamarca', '10:00', 'tunisia')+ createGame('mexico', '13:00', 'polonia')
             + createGame('franca', '16:00', 'australia'))}
             <br>
             ${createCard("23/11/2022", "quarta",createGame('marrocos', '07:00', 'croacia')
             + createGame('alemanha', '10:00', 'japao')+ createGame('espanha', '13:00', 'costa-rica')
             + createGame('belgica', '16:00', 'canada'))}
             <br>
             ${createCard("24/11/2022", "quinta",createGame('suica', '07:00', 'camaroes')
             + createGame('uruguai', '10:00', 'coreia-do-sul')+ createGame('portugal', '13:00', 'gana')
             + createGame('brasil', '16:00', 'servia'))}
             <br>
             ${createCard("25/11/2022", "sexta",createGame('gales', '07:00', 'ira')
             + createGame('catar', '10:00', 'senegal')+ createGame('holanda', '13:00', 'equador')
             + createGame('inglaterra', '16:00', 'estados-unidos'))}
             <br>
             ${createCard("26/11/2022", "sabado",createGame('tunisia', '07:00', 'australia')
             + createGame('polonia', '10:00', 'arabia-saudita')+ createGame('franca', '13:00', 'dinamarca')
             + createGame('argentina', '16:00', 'mexico'))}
             <br>
             ${createCard("27/11/2022", "domingo",createGame('japao', '07:00', 'costa-rica')
             + createGame('belgica', '10:00', 'marrocos')+ createGame('croacia', '13:00', 'canada')
             + createGame('espanha', '16:00', 'alemanha'))}
             <br>
             ${createCard("28/11/2022", "segunda",createGame('camaroes', '07:00', 'servia')
             + createGame('coreia-do-sul', '10:00', 'gana')+ createGame('brasil', '13:00', 'suica')
             + createGame('portugal', '16:00', 'uruguai'))}
             <br>
             ${createCard("29/11/2022", "terca",createGame('equador', '07:00', 'senegal')
             + createGame('holanda', '10:00', 'catar')+ createGame('ira', '13:00', 'estados-unidos')
             + createGame('gales', '16:00', 'inglaterra'))}
             <br>
             ${createCard("30/11/2022", "quarta",createGame('tunisia', '07:00', 'franca')
             + createGame('australia', '10:00', 'dinamarca')+ createGame('polonia', '13:00', 'argentina')
             + createGame('arabia-saudita', '16:00', 'mexico'))}
             <br>
             ${createCard("01/12/2022", "quinta",createGame('croacia', '07:00', 'belgica')
             + createGame('canada', '10:00', 'marrocos')+ createGame('japao', '13:00', 'espanha')
             + createGame('costa-rica', '16:00', 'alemanha'))}
             <br>
             ${createCard("02/12/2022", "sexta",createGame('coreia-do-sul', '07:00', 'portugal')
             + createGame('gana', '10:00', 'uruguai')+ createGame('servia', '13:00', 'suica')
             + createGame('camaroes', '16:00', 'brasil'))}
        </div>    
        </main>
`
let bnttodosJogos = document.getElementById('todosJogos');

let bntJogosHoje = document.getElementById('jogosHoje');

let cards = document.querySelector('#cardHide');

let dataAtual = moment().format('DD/MM/YYYY');

document.querySelector('.data').innerHTML = dataAtual;

bnttodosJogos.addEventListener("click", function(){

    document.querySelector(".start").setAttribute("class", "hide");
    cards.removeAttribute("id", "cardHide");
    document.querySelector(".data").setAttribute("class", "hide");
    
});

bntJogosHoje.addEventListener("click", function(){
   let datas = document.querySelectorAll(".card>h2")
    datas.forEach(data =>{
        console.log(data.innerText);
        if (data === dataAtual){
            alert('deu')
        } else {
            alert('não deu')
        }
    });
});



