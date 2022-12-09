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
