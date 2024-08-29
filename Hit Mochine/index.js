// Importer le module readline pour gérer les entrées utilisateur via la console.
const { count } = require('console');
const readline = require('readline');

// Hit parade, classé du premier au dernier.
const hitParade = [
    `Jain - Come`,
    `Matt Simons - Catch & Realease`,
    `Twety One Pilots - Stressed Out`,
    `Justin Bieber - Love Yourself`,
    `Kids United - On écrit sur les murs`,
    `Rihanna - Work`,
    `Julian Perretta - Miracle`,
    `Yall - Hundred Miles`,
    `Kendji Girac - No Me Mirès Màs`,
    `Feder - Blind (feat. Emmi)`
];

// Créer une interface de lecture pour lire les entrées de l'utilisateur.
// Spécifie que l'entrée sera l'entrée standard (le clavier).
// La sortie est inutile.
const rl = readline.createInterface({
    input: process.stdin,
});

// Gestion de l'événement d'écriture de l'utilisateur.
rl.on('line', (input) => {
    // if (input === "chante") {
    //     console.log(`Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock`);
    // } else if (input === "classement") {
    //     console.log(`Les 10 premières entrées du Top 50 sont :`);

    //     // let counter = 1;
    //     // for (const song of hitParade) {
    //     //     console.log(`${counter}. ${song}`);
    //     //     ++counter;
    //     // }

    //     hitParade.forEach((song, index) => {
    //         console.log(`${index + 1}. ${song}`);
    //     });
    // } else if (input === "quitter") {
    //     console.log(`Programme terminé`);
    //     rl.close();

    //     // Si on quitte, on ne repose pas la question, puisque de toute façon on ne pourra pas y répondre vu qu'on ferme l'interface
    //     // Le return sert à sortir de la fonction (ici la callback).
    //     return;
    // } else {
    //     console.log(`Commande non reconnue. Veuillez entrer "chante", "classement" ou "quitter".`);
    // }

    if (input.startsWith("position ")) {
        const position = input.split(' ')[1];

        if (isNaN(position) || position < 1 || position > hitParade.length) {
            console.log(`La position "${position}" n'est pas valide. Veuillez entrer un nombre entre 1 et ${hitParade.length}.`);
        } else {
            // Ne pas oublier de soustraire 1 car les indices commencent à 0.
            console.log(`La position ${position} du classement est : ${hitParade[position - 1]}`);
        }

        poseQuestion();

        return;
    }

    switch (input) {
        case 'chante':
            console.log(`Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock`);
            break;
        case 'classement':
            console.log(`Les 10 premières entrées du Top 50 sont :`);

            // let counter = 1;
            // for (const song of hitParade) {
            //     console.log(`${counter}. ${song}`);
            //     ++counter;
            // }

            hitParade.forEach((song, index) => {
                console.log(`${index + 1}. ${song}`);
            });
            break;
        case 'quitter':
            console.log(`Programme terminé`);
            rl.close();

            // Si on quitte, on ne repose pas la question, puisque de toute façon on ne pourra pas y répondre vu qu'on ferme l'interface
            // Le return sert à sortir de la fonction (ici la callback).
            return;
        default:
            console.log(`Commande non reconnue. Veuillez entrer "chante", "classement" ou "quitter".`);
            break;
    }

    poseQuestion();
});

// Afficher le message initial pour demander à l'utilisateur ce qu'il souhaite.
poseQuestion();

/**
 * Affiche le message d'accueil et attend l'entrée de l'utilisateur.
 */
function poseQuestion() {
    console.log("Que souhaitez vous ?");
}