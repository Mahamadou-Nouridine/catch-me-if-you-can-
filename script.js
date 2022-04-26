
    let declencheur = document.getElementById("declencheur")
    let bouche = document.getElementsByClassName("bouche")
    let score ;
    let bonhomme = document.getElementById("bonhomme");
    let conteneur = document.getElementById("conteneur");
    let largeur = window.innerWidth;
    let hauteur  = window.innerHeight;
    var timer = false;
    function bouger(){
        timer = true;
        let largeurAleatoire = Math.floor(Math.random() * (largeur))
        let hauteurAleatoire = Math.floor(Math.random() * (-hauteur))
        bonhomme.style.transform = `translate(${largeurAleatoire}px, ${hauteurAleatoire}px)`;
        
    }
    
   var t
    function active(){
        score = 0;
        document.getElementById("score").innerHTML = score
         t = setInterval(bouger, 700);
        function arrete(){
            clearInterval(t)
            timer = false;
        }
        setTimeout(arrete, 20000);
        
    }

    bonhomme.addEventListener("click", ()=> {
            if (timer){
                score +=1;
                document.getElementById("score").innerHTML = score;
            }
            
        })

    declencheur.addEventListener("click", ()=>{
        clearInterval(t); 
        active()
    })

    