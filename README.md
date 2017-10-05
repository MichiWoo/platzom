# Platzi


Platzom en un idioma inventado para el [curso de fundamentos de Javascript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educación online.

## Descripción del idioma

- Si la palabra termina en "ar", se le quitan esos dos caracteres.
- Si la palabra empieza con "z", se le añaden "pe" al final.
- Si la palabra tiene más de 10 letras partir a la mitad y añadir un "-".
- Si la palabra original es un palindromo, ninguna regla cuent, se devuelve la misma palabra intercalando mayusculas y minusculas.

## Instalación
```
npm install platzom
```

## Uso
```
import platzom from 'platzom'

platzom('Programar') //Program
platzom('Zorro') //Zorrope
platzom('Zarpar') //Zarppe
platzom('abecedario') //abece-dario
platzom('sometemos') //SoMeTeMoS
```

## Créditos

- [Sacha Lyfszcy](https://twitter.com/@slifszcy)

## Licencia

[MIT](https://opensource.org/licenses/MIT)