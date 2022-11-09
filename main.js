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
                <h2>${date} <span>${day}</span></h2>

                <ul>
                     ${games}
                </ul>
            </div>
`
}

/*let d20 = "20/11"
    d21 = "21/11",
    d22 = "22/11",
    d23 = "23/11",
    d24 = "24/11",
    d25 = "25/11",
    d26 = "26/11",
    d27 = "27/11",
    d28 = "28/11",
    d29 = "29/11",
    d30 = "30/11",
    d01 = "01/12",
    d02 = "02/12";
    */

document.querySelector('#app').innerHTML = `
<header>
            <img src="assets/logo.svg" alt="">
        </header>
        <main id="cards">
            ${createCard("20/11", "domingo",createGame('catar', '13:00', 'equador'))}

            ${createCard("21/11", "segunda",createGame('inglaterra', '10:00', 'ira') + createGame('senegal', '13:00', 'holanda')+ createGame('estados-unidos', '16:00', 'gales'))}
            
            ${createCard("22/11", "terça",createGame('argentina', '07:00', 'arabia-saudita')
             + createGame('dinamarca', '10:00', 'tunisia')+ createGame('mexico', '13:00', 'polonia')
             + createGame('franca', '16:00', 'australia'))}

             ${createCard("23/11", "quarta",createGame('marrocos', '07:00', 'croacia')
             + createGame('alemanha', '10:00', 'japao')+ createGame('espanha', '13:00', 'costa-rica')
             + createGame('belgica', '16:00', 'canada'))}

             ${createCard("24/11", "quinta",createGame('suica', '07:00', 'camaroes')
             + createGame('uruguai', '10:00', 'coreia-do-sul')+ createGame('portugal', '13:00', 'gana')
             + createGame('brasil', '16:00', 'servia'))}

             ${createCard("25/11", "sexta",createGame('gales', '07:00', 'ira')
             + createGame('catar', '10:00', 'senegal')+ createGame('holanda', '13:00', 'equador')
             + createGame('inglaterra', '16:00', 'estados-unidos'))}

             ${createCard("26/11", "sabado",createGame('tunisia', '07:00', 'australia')
             + createGame('polonia', '10:00', 'arabia-saudita')+ createGame('franca', '13:00', 'dinamarca')
             + createGame('argentina', '16:00', 'mexico'))}

             ${createCard("27/11", "domingo",createGame('japao', '07:00', 'costa-rica')
             + createGame('belgica', '10:00', 'marrocos')+ createGame('croacia', '13:00', 'canada')
             + createGame('espanha', '16:00', 'alemanha'))}

             ${createCard("28/11", "segunda",createGame('camaroes', '07:00', 'servia')
             + createGame('coreia-do-sul', '10:00', 'gana')+ createGame('brasil', '13:00', 'suica')
             + createGame('portugal', '16:00', 'uruguai'))}

             ${createCard("29/11", "terca",createGame('equador', '07:00', 'senegal')
             + createGame('holanda', '10:00', 'catar')+ createGame('ira', '13:00', 'estados-unidos')
             + createGame('gales', '16:00', 'inglaterra'))}

             ${createCard("30/11", "quarta",createGame('tunisia', '07:00', 'franca')
             + createGame('australia', '10:00', 'dinamarca')+ createGame('polonia', '13:00', 'argentina')
             + createGame('arabia-saudita', '16:00', 'mexico'))}

             ${createCard("01/12", "quinta",createGame('croacia', '07:00', 'belgica')
             + createGame('canada', '10:00', 'marrocos')+ createGame('japao', '13:00', 'espanha')
             + createGame('costa-rica', '16:00', 'alemanha'))}

             ${createCard("02/12", "sexta",createGame('coreia-do-sul', '07:00', 'portugal')
             + createGame('gana', '10:00', 'uruguai')+ createGame('servia', '13:00', 'suica')
             + createGame('camaroes', '16:00', 'brasil'))}
            
        </main>
`