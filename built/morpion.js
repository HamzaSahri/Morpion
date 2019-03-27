"use strict";
exports.__esModule = true;
var Morpion = /** @class */ (function () {
    function Morpion() {
        this.gameboard = null;
        this.j1 = 'X';
        this.j2 = 'O';
    }
    Morpion.prototype.playPawn = function (x, y, joueur) {
        if (this.gameboard[x][y] != "") {
            console.log("Case occupée");
        }
        else {
            this.gameboard[x][y] = joueur;
        }
        console.log(this.gameboard);
    };
    Morpion.checkFinishGame = function (gameboard) {
        var i;
        for (var _i = 0, gameboard_1 = gameboard; _i < gameboard_1.length; _i++) {
            var entry = gameboard_1[_i];
            console.log(entry);
            entry.forEach(function (element) {
                if (element == "") {
                    return false;
                }
            });
        }
        return true;
    };
    Morpion.prototype.play = function () {
        var test;
        var whoPlay;
        whoPlay = 1;
        var x;
        var y;
        test = Morpion.checkFinishGame(this.gameboard);
        while (test = false) {
            x = Math.floor(Math.random() * 3);
            y = Math.floor(Math.random() * 3);
            if (whoPlay == 1) {
                this.playPawn(x, y, this.j1);
                whoPlay = 2;
            }
            else {
                this.playPawn(x, y, this.j2);
                whoPlay = 1;
            }
            test = Morpion.checkFinishGame(this.gameboard);
        }
        console.log("Partie Terminée");
    };
    return Morpion;
}());
exports.Morpion = Morpion;
