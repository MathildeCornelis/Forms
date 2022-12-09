/*Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same */

    /*renprendre l'id du input qui se trouve dans le html*/
    let firstInput = document.getElementById ('firstname');
    /*ajouter un événement à l'id de l'input, quand on appuie sur des touches, on exécute une fonction*/
    firstInput.addEventListener('keyup', addSpan);
    /*fonction*/
    function addSpan() {
        /*variable qui reprend la valeur de l'input*/
        let x = firstInput.value;
        /*aller rechercher le span via son id dans le document et écrire dans l'html la valeur de let x*/
        document.getElementById("display-firstname").innerHTML = x;
    };

/*Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.*/

    /*renprendre les id du input et de la section qui se trouve dans le html */
    let secondInput = document.getElementById('age');
    let firstSection = document.getElementById('a-hard-truth');
    /*ajouter un événement à l'id de l'input, quand entre un âge, on exécute une fonction*/
    secondInput.addEventListener('keyup', addTruth)
    /*fonction*/
    function addTruth() {
        /*si l'âge est plus petit ou inferieur à 17 -> hidden*/
        if (secondInput.value <= 17) {
            firstSection.style.visibility = "hidden";
        }
        /*si l'âge est suppérieur à 18 -> visible*/
        else{
            firstSection.style.visibility = "visible";
        }
    };