function setup(){  

    document.querySelector('.dice').style.display="none";


    document.querySelector('#btn').addEventListener('click', function(){

            //1. Random number from 1 to 6
            var dice=Math.floor(Math.random()*6)+1;

            //2. Display the result

            var diceDOM=document.querySelector('.dice');
            diceDOM.style.display="block";
            diceDOM.src='side-' + dice + '.png';

    document.getElementById('roll-result').innerHTML = 'Roll: ' + dice;
})

}
