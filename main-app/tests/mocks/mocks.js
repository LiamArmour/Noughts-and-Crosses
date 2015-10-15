'use strict';
var mocks = {
    ProxyConstants: {
        baseURL: "http://eutaveg-01.tombola.emea:35000/api/v1.0/"
    },
    GameModel: {
        playerSelection: '1',
        currentPlayer: '1',
        gameBoard: '000000000',
        gameWinner: '',
        takeTurn: function () {
        },
        makeNewGame: function () {
        }
    },

    PlayerSelection: {
        player1Type: 0,
        player2Type: 0,
        selectPlayer: function () {},
        getStartingPlayer: function () {},
        isHumanVsHuman: function () {}
    }
};