/*jslint indent: 4, maxlen: 80 */
/*globals window, document */

(function (win, doc) {
    'use strict';

    var // Constants
        ENTREES,
        ACCOMPANIMENTS,
        MEATS,
        DESSERTS,

        // Variables
        entree = doc.getElementById('entree'),
        accompaniment = doc.getElementById('accompaniment'),
        meatFish = doc.getElementById('meat-fish'),
        dessert = doc.getElementById('dessert'),
        possibilities = doc.getElementById('possibilities'),

        // Functions
        randomFromArray,
        generateMeal;

    ENTREES = [
        'Concombres - Tomates',
        'Concombres - Carottes râpées',
        'Tomates - Carottes râpées'
    ];

    ACCOMPANIMENTS = [
        'Haricots verts/jaunes',
        'Haricots blancs',
        'Haricots rouges',
        'Lentilles',
        'Pâtes',
        'Riz',
        'Pois chiches'
    ];

    MEATS = [
        'Filet de poisson',
        'Filet de dinde',
        'Filet de poulet',
        'Dinde en tranche',
        'Poulet en tranche',
        '4 à 6 blancs d\'oeuf',
        'Thon au naturel (éventuellement à manger à part)'
    ];

    DESSERTS = [
        'Fromage blanc 0% + Fruit(s) de saison (pomme, banane...)',
        'Yaourt 0% + Fruit(s) de saison (pomme, banane...)',
        'Fromage blanc 0% + Compote (pomme, poire...)',
        'Yaourt 0% + Compote (pomme, poire...)'
    ];

    randomFromArray = function (items) {
        return items[Math.floor(Math.random() * items.length)];
    };

    generateMeal = function () {
        entree.textContent = randomFromArray(ENTREES);
        accompaniment.textContent = randomFromArray(ACCOMPANIMENTS);
        meatFish.textContent = randomFromArray(MEATS);
        dessert.textContent = randomFromArray(DESSERTS);
    };

    win.mealApp = {
        generateMeal: generateMeal
    };

    (function () {
        possibilities.textContent = (
            ENTREES.length *
            ACCOMPANIMENTS.length *
            MEATS.length *
            DESSERTS.length
        ).toString();
    }());
}(window, document));
