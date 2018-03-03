function setEventHandlers() {
    // if you dynamically create content, you should call event handlers after creation
    $('.dynamic-p').css('background-color','aqua');
    $('h1').css('font-size','24pt');
}



function getWorld() {
    // create world generation
    // begin with grid with all walls

    var world = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 3, 1, 1, 1, 1, 4, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 4, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 4, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 4, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 4, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 1, 4, 4, 4, 1, 2, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    return world;
}

function getBoardDictionary() {
    var boardDictionary = {
        0: 'wall',
        1: 'open_space',
        2: 'ghost',
        3: 'pacman',
        4: 'coin',
        5: 'bonus_points',
    }
    return boardDictionary;
}


function drawWorld(world) {
    boardDictionary = getBoardDictionary();

    var htmlStr = "";
    for (let rowIndex = 0; rowIndex < world.length; rowIndex++) {
        htmlStr += "<div class='world_row'>";
        for (let colIndex = 0; colIndex < world[rowIndex].length; colIndex++) {
            console.log(boardDictionary[world[rowIndex][colIndex]]);
            var appendSquare = `<div class="${boardDictionary[world[rowIndex][colIndex]]}"></div>`
            htmlStr += appendSquare;
        }
        htmlStr += "</div>";
    };
    $('.world').html(htmlStr);
    return world;
}

function getPacman(){
    var pacman = {
        rowIndex: 1,
        colIndex: 1,
    }
    return pacman;
}

function startGame() {
    var game = {
        pacman: getPacman(),
        world: getWorld(),
        dictionary: getBoardDictionary(),
        move_size: 1,
    }
    return game;
}


$(document).ready(function() {

    var game = startGame();
    // console.log(game);
    // var world = getWorld();
    // console.log(game.world);

    drawWorld(game.world);

    //set listener
    $(document).on("keydown", function(e) {
        
        if (e.keyCode === 37){
            
            console.log("TRYING TO MOVE LEFT");
            movePacman(game, "LEFT");

        } else if (e.keyCode === 38) {
            console.log("TRYING TO MOVE UP!");
            movePacman(game, "UP");

        } else if (e.keyCode === 39) {
            console.log("TRYING TO MOVE RIGHT");
            movePacman(game, "RIGHT");


        } else if (e.keyCode === 40) {
            console.log("TRYING TO MOVE DOWN");
            movePacman(game, "DOWN");



        }
    })

})


function movePacman(game, direction) {
    
    var pac_row = game.pacman.rowIndex;
    var pac_col = game.pacman.colIndex;
    var move_spaces = game.move_size;

    console.log("row: " + pac_row + " | col: " + pac_row);


    
    if (direction === "RIGHT") {
        var test_space = game.world[pac_row][pac_col + move_spaces];
        console.log("value in test_space: " + test_space);

        console.log(game.world);
        console.log(game.pacman);
        // test to the right
        
        if(test_space != 0){
            //if test to the right is NOT a wall
            // pac_col += 1;
            game.pacman.colIndex += move_spaces;
            console.log("new pac col: " + game.pacman.colIndex);
            console.log("NOT A WALL! MOVE RIGHT!");
            game.world[game.pacman.rowIndex][game.pacman.colIndex] = 3;
            game.world[game.pacman.rowIndex][game.pacman.colIndex - move_spaces] = 1;
        } else{
            // alert("THATS A WALL");
        }
    } 
    else if (direction === "LEFT") {
        var test_space = game.world[pac_row][pac_col - move_spaces];
        console.log("testing: " + test_space);
        console.log("new pac col: " + pac_col);

        if(test_space != 0){
            pac_col -= move_spaces;            
            game.pacman.colIndex -= move_spaces;
            console.log("new pac col: " + game.pacman.colIndex);
            game.world[game.pacman.rowIndex][game.pacman.colIndex] = 3;
            game.world[game.pacman.rowIndex][game.pacman.colIndex + move_spaces] = 1;
        }
        else{
            // alert("THAT'S A WALL");
        }

    }
    else if ( direction === "UP" ) {
        var test_space = game.world[pac_row - move_spaces][pac_col];
        console.log("test space: " + test_space);

        if (test_space != 0){
            game.world[game.pacman.rowIndex][game.pacman.colIndex] = 1;
            game.pacman.rowIndex -= move_spaces;
            game.world[game.pacman.rowIndex][game.pacman.colIndex] = 3;
        } else {
            // alert("THAT'S A WALL");
        }

    }
    else if ( direction === "DOWN") {
        var test_space = game.world[pac_row + move_spaces][pac_col];
        console.log("test_space: " + test_space);
        
        if (test_space != 0) {
            game.world[game.pacman.rowIndex][game.pacman.colIndex] = 1;
            game.pacman.rowIndex += move_spaces;
            game.world[game.pacman.rowIndex][game.pacman.colIndex] = 3;
        } else{
            // alert("THAT'S A WALL");
        }
    }

    drawWorld(game.world);



    }



        // game.world[ game.pacman[colIndex] ] [game.pacman[[rowIndex]];

        // game.pacman.colIndex += 1;



    //make sure to draw the new world
