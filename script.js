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
        secondInput.addEventListener('keyup', addTruth);
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

/*Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.*/

        /*renprendre les id des input qui se trouve dans le html */
        let firstPwd = document.getElementById('pwd');
        let secondPwd = document.getElementById('pwd-confirm');
        /*ajouter un événement à l'id de l'input pwd-confirm, quand entre une valeur a pwd, on exécute une fonction*/
        secondPwd.addEventListener('keyup', addPwd);
        /*fonction*/
        function addPwd() {
            /*si pwd égale pas pwd-confirm alors bg-color = red*/
            if (firstPwd.value != secondPwd.value) {
                secondPwd.style.background = 'red';
            } 
            /*si pwd égale pwd-confirm alors bg-color = red*/
            else {
                secondPwd.style.background = 'green';
            }
        };

        /*ajouter un événement à l'id de l'input pwd, quand entre une valeur a pwd, on exécute une fonction*/
        firstPwd.addEventListener('keyup', lengthPwd);
        /*fonction*/
        function lengthPwd() {
            /*si la longeur de la valeur de pdw est inferieure ou égale à 6, alors bgcolor = red*/
            if (firstPwd.value.length <= 6) {
                firstPwd.style.background = 'red'
            }
            /*si la longeur de la valeur de pdw est supperieur à 6, alors bgcolor = red*/
            else {
                firstPwd.style.background = 'green'
            }
        };

/* Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white. */

        /*renprendre l'id de l'input qui se trouve dans le html */
        let toggle = document.getElementById('toggle-darkmode');
        /*ajouter un événement à l'id du select, quand on change l'option, le mode change*/
        toggle.addEventListener('change', changeBg);
        /*fonction*/
        function changeBg() {
            /*si on choisit l'option dark, bg-color = black et color=white*/
            if (toggle.value == 'dark'){
                document.body.style.backgroundColor = "#000000";
                document.body.style.color = "#FFFFFF";
            } 
            /*si on choisit l'option light, bg-color = white et color=black*/
            else {
                document.body.style.backgroundColor = "#FFFFFF";
                document.body.style.color = "#000000";
            }
        };