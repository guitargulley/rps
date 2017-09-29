(function() {
    var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    var index = Math.floor((Math.random() * 5));
    var computer = choices[index];
    var rock = document.getElementById('rock');
    var paper = document.getElementById('paper');
    var scissors = document.getElementById('scissors');
    var lizard = document.getElementById('lizard');
    var spock = document.getElementById('spock');
    var reset = document.getElementById('reset');
    var generate = document.getElementById('generate');
    var player = document.getElementById('player');
    var myResults = document.getElementById('myResults');
    
    rock.addEventListener('click', function() {
        play('rock');
    });
    
    paper.addEventListener('click', function() {
        play('paper');
    });
    
    scissors.addEventListener('click', function() {
        play('scissors');
    });

    lizard.addEventListener('click', function() {
        play('lizard');
    });

    spock.addEventListener('click', function() {
        play('spock');
    });
    reset.addEventListener('click', function() {
        index=Math.floor((Math.random() * 4));
        computer = choices[index];
        generate.className = 'question';
        player.className = 'question';
        document.getElementById('myResults').innerHTML = '';
    });
    
    function showResult(result) {
        document.getElementById("myResults").innerHTML = result;
       
    }
    
    // Add your "play" function below this comment

    function play(playerChoice){
        generate.className = computer;
        player.className = playerChoice;
        
        if (playerChoice === computer){
            showResult('The Result Is A Tie  !!');
        }
        else if (playerChoice === 'rock'){
            if (computer === 'scissors'){
                showResult('Congratulations, you have won!!! Rock Crushes Scissors');
            }
            else if (computer === 'lizard'){
                showResult('Congratulations, you have won!!! Rock Crushes Lizard')
            }
            
            else if (computer === 'paper'){
                showResult('Too bad you lose! Paper Covers Rock');
            }
            else{
                showResult('Too bad you lose! Spock Vaporizes Rock');
            }
        }
        else if (playerChoice === 'scissors'){
            if (computer === 'paper'){
                showResult('Congratulations, you have won!!! Scissors cut Paper');
            }
            else if (computer === 'lizard'){
                showResult('Congratulations, you have won!!! Scissors Decapitates Lizard');
            }
            else if (computer === 'spock'){
                showResult('Too bad you lose! Spock Smashes Scissors');
            }
            else{
                showResult('Too bad you lose! Rock Smashes Scissors');
            }
        }
        else if (playerChoice === 'paper'){
            if (computer === 'rock'){
                showResult('Congratulations, you have won!!! Paper Covers Rock');
            }
            else if (computer === 'spock'){
                showResult('Congratulations, you have won!!! Paper Disproves Spock');
            }
            else if (computer === 'scissors'){
                showResult ('Too bad you lose! Scissors Cuts Paper')
            }
            else{
                showResult('Too bad you lose! Lizard Eats Paper');
            }
        }
        else if (playerChoice === 'lizard'){
            if (computer === 'paper'){
                showResult('Congratulations you have won!!! Lizard Eats Paper');
            }
            else if (computer === 'spock'){
                showResult('Congratulations you have won!!! Lizard Poisons Spock');
            }
            else if (computer === 'scissors'){
                showResult('Too bad you lose! Scissors Decapitate Lizard');
            }
            else {
                showResult('Too bad you lose! Rock Crushes Lizard');
            }
        }
        else if (playerChoice === 'spock'){
            if (computer === 'rock'){
                showResult('Congratulations you have won!!! Spock Vaporizes Rock');
            }
            else if (computer === 'scissors'){
                showResult('Congratulations you have won!!! Spock Smashes Scissors');
            }
            else if (computer === 'lizard'){
                showResult('Too bad you lose! Lizard Poisons Spock');
            }
            else {
                showResult('Too bad you lose! Paper Disproves Spock');
            }
        }
    }






})();