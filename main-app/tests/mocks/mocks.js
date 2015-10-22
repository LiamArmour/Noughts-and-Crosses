'use strict';
var mocks = {
    ProxyConstants:{
        baseURL:"http://eutaveg-01.tombola.emea:35000/api/v1.0/"
    },

    GameModel:{
        currentGameState: '',
        playerWinner: '',
        makeNewGame: function () {},
        gameboard: {
            player1: 'human',
            player2: 'human',
            board: '000000000',
            playerTurn: 1
        },
    },

    StyleSelection:{
        cssStyleChange: function () {},
        currentStyle: 'css/minion.css',
        toggleCss: function () {},
        getCurrentStyle: function(){}

        }

};