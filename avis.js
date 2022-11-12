window.onload = () => { // on va chercher toutes les etoiles
    const stars = document.querySelectorAll(".la-star");
    // on va chercher l'input note
    const note = document.querySelector("#note");

    //on boucle les etoiles pour ajouter des ecouteurs d'evenement
    for (star of stars){
        // on ecoute le survol
        star.addEventListener("mousehover", function(){
            //resetStars pour ecouter le clique 
            resetStars();
            // on va changer les couleurs sur chaque elements ou passe la souris
            this.style.color = "red";
            this.classList.add("las");
            this.classList.remove("lar");
            //on va mettre l'element precedent dans le DOM au meme niveau que la balise soeur
            let previousStar = this.previousElementSibling; // natif à Javascript
            while(previousStar){
                previousStar.style.color = "red";
                previousStar.classList.add("las");
                previousStar.classList.remove("lar");
                previousStar = previousStar.previousElementSibling;
            }
        });
        //on ecoute le clique
        star.addEventListener("click", function(){
            note.value = this.dataset.value;
        });
        //on va faire une ecoute sur le mouseout
        star.addEventListener("mouseout",function(){
            resetStars(note.value); 
        });
    }
    /**
     * reset des etoiles en verifiant la note dans l'input
     *@param {number} note
     */
    function resetStars(note = 0){
        for (star of stars) {
            if (star.dataset.value > note) {
                //etoile noire vide 
                star.style.color = "black";
                star.classList.remove("las");
                star.classList.add("lar");
            }else {
                //etoile pleine de couleure verte
                star.style.color = "goldenrod";
                star.classList.add("las");
                star.classList.remove("lar");
            }
        }
    }
}