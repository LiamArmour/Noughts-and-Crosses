var mocks;
(function () {
    'use strict';
    mocks = {
        ProxyConstants: {
            baseURL: "http://eutaveg-01.tombola.emea:35000/api/v1.0/"
        },
        GameModel: {
            outcome: 'Continue',
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
        },
        GameProxy: {
            apiCall: function () {}
        },
        fakeState: {
            go: function () {}
        },
        GameApi: {
            createNewGameData: function(player1Type, player2Type){},
            createMakeMoveData: function (playerNumber, chosenSquare) {},
            callApi: function () {},
            makeNewGame: function (player1Type, player2Type, updateCallback) {},
            takeTurn: function (playerNumber, squareNumber, updateCallback) {}
        },
        EndOfGameService: {
            checkGameEnded: function(outcome){}
        },

        StyleSelection:{
            cssStyleChange: function () {},
            currentStyle: 'css/minion.css',
            toggleCss: function () {},
            getCurrentStyle: function(){}

        },
        $state:{
            go: function () {},
            $current: 'playerSelection'
        }
    };
})();