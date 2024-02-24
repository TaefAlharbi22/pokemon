

console.log("javascript loaded")

pokemon_name = document.getElementById("pokemon_name")
pokemon_ability = document.getElementById("first_ability")
pokemon_ability2 = document.getElementById("seconde_ability")
pokemon_weight = document.getElementById("weight")
pokemon_baseExperience = document.getElementById("pokemon_ex")
pokemon_image = document.getElementById("pokemon_image")
text_input = document.getElementById("input_text")
errors = document.getElementById("errors")
loading = document.getElementById("loading")




const loadpokemon = (id,name,ability,ability2,weight,baseExperience) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  
    
        .then(res => res.json())
        .then(data => {
            name(data.name)
            ability(data.abilities[0].ability.name)
            ability2(data.abilities[1].ability.name)
            weight(data.weight)
            baseExperience(data.base_experience)
        }, (err)=> {
            console.log(err)
            errors.innerText = "cannot get pokemon data"
            loading.style.display = "none"
        })
}


loadpokemon(2,(name)=> {
    pokemon_name.innerText = name
        pokemon_image.src = `https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/${name}.png`
    },(ability)=> {
        pokemon_ability.innerText = ability
    },(ability2)=> {
        pokemon_ability2.innerText = ability2
    },(weight)=> {
        pokemon_weight.innerText = weight
    },(baseExperience)=> {
        pokemon_baseExperience.innerText = baseExperience

     } 
     )
    
    


function button () {
    if (text_input.value == "") {
        errors.innerText = "Please enter a valid pokemon id"
    } else {
        errors.innerText = ""
        loading.style.display = "block"
    loadpokemon(text_input.value,(name)=> {
    pokemon_name.innerText = name
        pokemon_image.src = `https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/${name}.png`
    },(ability)=> {
        pokemon_ability.innerText = ability
    },(ability2)=> {
        pokemon_ability2.innerText = ability2
    },(weight)=> {
        pokemon_weight.innerText = weight
    },(baseExperience)=> {
        pokemon_baseExperience.innerText = baseExperience
        loading.style.display = "none"
    }
    )

    }

}

function clear_press(){
    text_input.value = ""
    pokemon_name.innerText = ""
    pokemon_ability.innerText = ""
    pokemon_ability2.innerText = ""
    pokemon_weight.innerText = ""
    pokemon_baseExperience.innerText = ""
    pokemon_image.src="clear1.png" 
    errors.innerText = ""
}


function imgHover() {

    pokemon_image.style.boxShadow = "0 0 30px #fff"

}

function imgHoverOut() {

    pokemon_image.style.boxShadow = "none"

}
