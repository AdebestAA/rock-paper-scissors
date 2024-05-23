  let uPicked = document.querySelector('.u-picked')
    let comPicked = document.querySelector('.com-picked')
    let outputU = document.querySelector('.output-u')



    let scoreCount = JSON.parse(localStorage.getItem('score'))

    if (scoreCount === null) {
        scoreCount = {
            win: 0,
            draw: 0,
            lose: 0
        }
    }

    // let drawScore = 0;
    // let winScore = 0;
    // let loseScore = 0;

    // 


    document.querySelector('.js-score')
        .innerHTML = `wins: ${scoreCount.win} draws: ${scoreCount.draw} loses: ${scoreCount.lose}`;


    let isAutoPlay = false;
    let intervalSet;
    function autoPlay() {


        if (!isAutoPlay) {
            intervalSet = setInterval(function () {
                let clicked = computerMove()
                iClicked(clicked)
            }, 1000);
            isAutoPlay = true
        }
        else {
            isAutoPlay = false
            clearInterval(intervalSet)
        }

    }

    function iClicked(clicked) {
        // assigning the Computer move to a variable
        let computer = computerMove()


        youPicked = clicked;
        computerPicked = computer;

        // functions for the Outcome of what you clicked,the Computer's option and Score


        // Function for tie and Draw Score Count
        function popUpMessageForTie() {
            // alert(`you picked: ${clicked}\nComputer Picked: ${computer}\nThat's a tie`)

            // drawScore++;
            // draws.textContent = "Draw: " + drawScore

            scoreCount.draw += 1;

            // Alert score
            // alert(`you picked: ${clicked}\nComputer Picked: ${computer}\nThats a tie\nwins: ${scoreCount.win} draws: ${scoreCount.draw} loses: ${scoreCount.lose}`)



            uPicked.innerHTML = "you picked: " + clicked;
            comPicked.innerHTML = 'Computer Picked: ' + computer;
            outputU.innerHTML = `That's a tie`

            document.querySelector('.js-score')
                .innerHTML = `wins: ${scoreCount.win} draws: ${scoreCount.draw} loses: ${scoreCount.lose}`


            localStorage.setItem('score', JSON.stringify(scoreCount))

        }

        // funtion for Win and Win Score Count
        function popUpMessageForWin() {
            // alert(`you picked: ${clicked}\nComputer Picked: ${computer}\nYou win`)

            // winScore += 1;
            // wins.textContent = 'wins: ' + winScore
            scoreCount.win += 1;

            // Alert for score
            // alert(`you picked: ${clicked}\nComputer Picked: ${computer}\nyou win\nwins: ${scoreCount.win} draws: ${scoreCount.draw} loses: ${scoreCount.lose}`)




            uPicked.innerHTML = "you picked: " + clicked;
            comPicked.innerHTML = 'Computer Picked: ' + computer;
            outputU.innerHTML = `You win`;



            document.querySelector('.js-score')
                .innerHTML = `wins: ${scoreCount.win} draws: ${scoreCount.draw} loses: ${scoreCount.lose}`


            localStorage.setItem('score', JSON.stringify(scoreCount))

        }

        // funtion for lose and lose Score Count
        function popUpMessageForLose() {
            // alert(`you picked: ${clicked}\nComputer Picked: ${computer}\nyou Lose`)

            // loseScore += 1;
            // loses.textContent = 'loses: ' + loseScore
            scoreCount.lose += 1;
            // loses.textContent = "loses: " + scoreCount.lose;

            // Alert for Score
            // alert(`you picked: ${clicked}\nComputer Picked: ${computer}\nyou Lose\nwins: ${scoreCount.win} draws: ${scoreCount.draw} loses: ${scoreCount.lose}`)


            uPicked.innerHTML = "you picked: " + clicked;
            comPicked.innerHTML = 'Computer Picked: ' + computer;
            outputU.innerHTML = `You loss`;


            document.querySelector('.js-score')
                .innerHTML = `wins: ${scoreCount.win} draws: ${scoreCount.draw} loses: ${scoreCount.lose}`


            localStorage.setItem('score', JSON.stringify(scoreCount))
        }



        // Code for when you click Rock
        if (clicked === '✊') {
            if (clicked === computer) {
                popUpMessageForTie()
            }
            else if (computer === '✌') {
                popUpMessageForWin()
            }
            else if (computer === '🖐') {
                popUpMessageForLose()
            }

        }

        // Code for when you click Paper 
        else if (clicked === '🖐') {
            if (computer === '🖐') {
                popUpMessageForTie()
            }
            else if (computer === '✊') {
                popUpMessageForWin()
            }
            else if (computer === '✌') {
                popUpMessageForLose()
            }

        }

        // Code for when you clciked scissors
        else if (clicked === '✌') {
            if (computer === clicked) {
                popUpMessageForTie()
            }
            else if (computer === '🖐') {
                popUpMessageForWin()
            }
            else if (computer === '✊') {
                popUpMessageForLose()
            }
        }

    }



    // code for reset  button
    function reset() {
        // reset win to  0
        scoreCount.win *= 0;

        // wins.textContent = "wins: " + scoreCount.win

        // reset Draw to  0
        scoreCount.draw *= 0;

        // draws.textContent = "Draw: " + scoreCount.win

        // reset Loses to  0
        scoreCount.lose *= 0;

        // loses.textContent = "loses: " + scoreCount.win;
        uPicked.innerHTML = ''
        comPicked.innerHTML = ''
        outputU.innerHTML = ``


        document.querySelector('.js-score')
            .innerHTML = `wins: ${scoreCount.win} draws: ${scoreCount.draw} loses: ${scoreCount.lose}`;

        localStorage.removeItem('score')
    }




    // Code for the Computer choice Using Math.random()
    let computerChoice = '';
    function computerMove() {
        let randomNo = Math.random();

        console.log(randomNo);

        if (randomNo >= 0 && randomNo < 1 / 3) {
            computerChoice = "✊"
        }
        else if (randomNo >= 1 / 3 && randomNo < 2 / 3) {
            computerChoice = "🖐"
        }
        else {
            computerChoice = "✌"
        }
        return computerChoice
    }

