//deklaracja stałych i przypisane do elementow po id


const buttonRock = document.getElementById('button-rock');

const buttonPaper = document.getElementById('button-paper');

const buttonScissors = document.getElementById('button-scissors');


/**
 * funkcja klawiszy
 */

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    let argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

    /**
     * Przypisanie wylosowanego numeru do odpowiedniej wartości: kamien papier nozyce
     */
    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);

        const id = Number(argMoveId);

        if (id === 1) {
            return 'kamień';
        } else if (id === 2) {
            return 'papier';
        } else if (id === 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + id + '. Zakładam, że chodziło o "kamień".');
            return 'kamień';
        }
    }

    /**
     * Describe this function...
     */
    function displayResult(argPlayerMove, argComputerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);

        const playerMoveName = String(argPlayerMove);
        const computerMoveName = String(argComputerMove);

        if (playerMoveName === 'papier' && computerMoveName === 'kamień') {
            printMessage('Wygrywasz!');
        } else if (playerMoveName === 'kamień' && computerMoveName === 'nożyce') {
            printMessage('Wygrywasz!');
        } else if (playerMoveName === 'nożyce' && computerMoveName === 'papier') {
            printMessage('Wygrywasz!');
        } else if (playerMoveName === computerMoveName) {
            printMessage('Remis!');
        } else {
            printMessage('Przegrywasz :(');
        }
        printMessage('Zagrałem ' + computerMoveName + ', a Ty ' + playerMoveName);
    }

    playerMove = argButtonName;

    console.log('wybór ruchu gracza to: ' + playerInput);
    console.log('ruch gracza to: ' + playerMove);

    randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('wylosowana liczba to: ' + randomNumber);

    computerMove = getMoveName(randomNumber);

    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);

}


buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });

buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });

buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });
