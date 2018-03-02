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
        [0, 3, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 2, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    return world;
}

function setGameDictionary() {
    var boardDictionary = {
        0: 'open_space',
        1: 'wall',
        2: 'ghost',
        3: 'packman',
        4: 'five_points',
        5: 'bonus_points',
    }
    return boardDictionary;
}

function movePackman(world) {

    
}


function buildWorld() {
    boardDictionary = setGameDictionary();

    var world = getWorld();

    
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

$(document).ready(function() {
    // what should happen when the page is ready?
    // alert("PAGE READY!");
    var world = buildWorld();
  
    var packman = {
        rowIndex: 1,
        colIndex: 1,
    }

    var packmanLocation = [1,1];
    function changePosition(keyPressDirection) {
        // if up
        // current world board
    }

    $(document).on("keydown", function(e) {

            // keycodes
        if (keycode === 37){
            console.log("LEFT");
        } else if (keycode === 38) {
            console.log("UP!");
        } else if (keycode === 39) {
            console.log("RIGHT");
        } else if (keycode === 40) {
            console.log("DOWN");
        }
    })




    var blockCode = 'class="block"'; //assign the class as block

    var wallCode = 'class="wall"' ; //assign the class as wall


    // $('.world').append(world);

    var middleContents = "";
    middleContents += "<h1>This is a dynamically created heading</h1>";
    middleContents += "<p class='dynamic-p'>THIS is a dynamically created paragraph </p>";

    $('.middle_stuff').before("BEFORE STUFF" + middleContents + "<br/><br/>");
    $('.middle_stuff').after("<br/><br/>AFTER STUFF" + middleContents);
    setEventHandlers();

})