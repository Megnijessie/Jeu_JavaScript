const genererNombreAleatoire=()=>{
    const nombreDecimal=(Math.random() * 100)+1
    const nombre= Math.trunc(nombreDecimal)
    return nombre
}

let numeroTentative=1
let nombreBas=1
let nombreHaut= 100
const nombreATrouver=genererNombreAleatoire()
console.log(nombreATrouver)

const ajouterTextAuContainer= texte =>{
    const divTexte= document.createElement('div')
    divTexte.textContent= texte
    const container = document.getElementById('container')

    container.insertBefore(divTexte, container.firstChild )

 }

const proposerNombre=()=>{
    const input=document.getElementById('input-nombre')
    const valeur = input.value
    if (valeur==='') {
        return 
    }
    const nombreProposer= parseInt(valeur,10)

    // divProposition.textContent='Tentative'+ numeroTentative
     ajouterTextAuContainer('Tentative'+ numeroTentative)

    if (nombreProposer===nombreATrouver) {
        console.log('bravo')
        numeroTentative += 1 
        ajouterTextAuContainer('Bravo 😎️👏️')
        const elementCentre = document.getElementById('centre')
        elementCentre.textContent=nombreProposer + '👏️👏️👏️' 

    } else {
        if (nombreATrouver > nombreProposer) {
            console.log('le nombre est plus petit')
            numeroTentative += 1 
            ajouterTextAuContainer('c\'est moins 💁️')

            if (nombreProposer > nombreBas) {
                const elementBas= document.getElementById('bas')
                elementBas.textContent=nombreProposer + '😲️'
                nombreBas= nombreProposer
            }
           
        }else{
            console.log('le nombre est plus grand')
            numeroTentative += 1 
            ajouterTextAuContainer(' c\'est plus 🙋️')
            if (nombreProposer < nombreHaut) {
                const elementHaut= document.getElementById('haut')
                elementHaut.textContent=nombreProposer + '😲️'
                nombreHaut= nombreProposer
            }
            
        }
        
    }
}

const bouton= document.getElementById('button-proposer')
bouton.addEventListener('click',proposerNombre)