<h1> Battleships the game </h1>


<h3> Breif </h3> 
During my time at CodeClan I wanted to push myself further than just the course work in learning both Javascript and problem 
solving in coding. 

To this I looked at creating one of the classic games BattleShip. I had thought this was initally straight forward but soon
realised that game logic and making the computer calculate something like co-ordinates took a lot of logic.

Although Battleships is a two player game, my goal was just to make a one player game where the player has to guess the computers position.

<strong> MVP: </strong>

- Have computer randomise coordinates for a ship of a given length.
- Randomised coordinates should be just like the game, sequentianl vertically and horizontally.
- Screen should display a grid and be able to record both failed hits and succesful hits.
- Player should be able to see what ships are left to destroy.

The code itself to position the ship and be able to play the game took 2-3 days while still attending CodeClan.

<h2> How it was built? </h2>

<strong> Randomising coordinates: </strong>

I started off by breaking down the code step by step. I knew initally that I would need a randomised number between 1 - 10 
and a random letter between A - J to make the random letter. Using this function allowed me to also get a random letter by using it to pick the index of an array of letters.

<strong> Setting the coordinates </strong>

<strong> Checking if the coordinates don't overlap </strong>

The final part fo the code was to ensure the coordinates don't overlap. I was going to house this in the main function but
it was already doing alot in creating the coordinates. The method goes through the coordinates via a while loop.


https://battleships-stephen-bradley.herokuapp.com/
