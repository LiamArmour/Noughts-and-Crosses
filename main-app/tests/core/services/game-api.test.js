(function () {
    'use strict';
    describe('Testing the game API service', function () {
        var gameApi,
            sandbox,
            $stateSpy,
            $rootScope,
            apiCallStub,
            apiTakeTurnStub,
            makeNewGameData = {"outcome":"Continue","gameboard":"000000000","winner":0};

        beforeEach(function () {
            module('ui.router');
            module('Tombola.Games.NoughtsAndCrosses.Core');
            module(function ($provide) {
                $provide.value('GameProxy', mocks.GameProxy);
                $provide.value('$state', mocks.$state);
            });

            sandbox = sinon.sandbox.create();
            $stateSpy = sinon.sandbox.spy(mocks.$state, 'go');

            inject(['$rootScope', '$injector', function (_$rootScope_, $injector) {
                $rootScope = _$rootScope_;
                gameApi = $injector.get('GameApi');
            }]);
        });


        it('Ensures the game sends the correct information to start', function () {
            apiCallStub = sinon.stub(mocks.GameApi, 'human, human, makeNewGameData');
            gameApi.makeNewGame(apiCallStub);

        });

        it('Ensures the game sends the correct information to make a new turn', function () {
            apiTakeTurnStub = sinon.stub(mocks.GameApi, '1, 4, updateCallback');
            gameApi.makeNewGame(apiTakeTurnStub);

        });

        //me.makeNewGame = function (player1Type, player2Type, updateCallback) {
        //    callApi("newgame", createNewGameData(player1Type, player2Type), updateCallback);
        //};
        //
        //me.takeTurn = function (playerNumber, squareNumber, updateCallback) {
        //    callApi("makemove", createMakeMoveData(playerNumber, squareNumber), updateCallback);
        //};


        afterEach(function(){
            sinon.stub.reset();
            sandbox.restore();
        });
    });
}());