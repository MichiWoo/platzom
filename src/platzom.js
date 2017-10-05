export default function platzom(str) {
    let translation = str

    // Si la palabra original es un palindromo
    // ninguna regla cuenta
    // se devuelve la misma palabra intercalando mayusculas y minusculas

    const reverse = (str) => str.split('').reverse().join('')

    if (str == reverse(str)) {
        return minMay(str)
    }

    function minMay(str) {
        const length = str.length
        let translation = ''
        let capitalize = true

        for (let i = 0; i < length; i++) {
            const char  = str.charAt(i)
            //Asignar y  Hacer el If en una sola línea
            translation += capitalize ? char.toUpperCase() : char.toLowerCase() 
            capitalize = !capitalize
        }

        return translation
    }

        
    //Si la palabra termina en "ar", se le quitan esos dos caracteres

    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2)
    }   

    //Si la palabra empieza con "z", se le añaden "pe" al final

    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe'
    }

    // si la palabra tiene más de 10 letras partir a la mitad y añadir un "-"
const ancho = translation.length

    if (ancho >= 10) {
        const firstHalf = translation.slice(0, Math.round(ancho / 2))
        const secondHalf = translation.slice(Math.round(ancho / 2))
        translation = `${firstHalf}-${secondHalf}`
    }

            
    return translation
}

