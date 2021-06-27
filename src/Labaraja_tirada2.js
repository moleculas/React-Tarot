import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'


function calculaVh(medida) {
  let totalAlto = window.innerHeight;
  let medidaEnVh = (medida * totalAlto) / 100;
  return medidaEnVh;
}
function shuffleDeckAndSelect3Cards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array.splice(0, 3)
  }
function Labaraja_tirada(props_2) {

  const pathServerImages = 'images_public/' + props_2.tarotRecibido + '/';
  const elProposRecibido = props_2.tarotRecibido;
  let anchoCarta, fondo, borderRadius;
  switch (elProposRecibido) {
    case 'marsella':
      anchoCarta = calculaVh(40);
      fondo = 'auto 90%';
      borderRadius = '10px';
      break;
    case 'lotr':
      anchoCarta = calculaVh(45);
      fondo = 'auto 100%';
      borderRadius = '10px';
      break;
    case 'mystic':
      anchoCarta = calculaVh(45);
      fondo = 'auto 100%';
      borderRadius = '10px';
      break;
    case 'neon':
      anchoCarta = calculaVh(40);
      fondo = 'auto 100%';
      borderRadius = '10px';
      break;
    case 'leary':
      anchoCarta = calculaVh(50);
      fondo = 'auto 95%';
      borderRadius = '10px';
      break;
    case 'black':
      anchoCarta = calculaVh(45);
      fondo = 'auto 103%';
      borderRadius = '10px';
      break;
    case 'twin':
      anchoCarta = calculaVh(43);
      fondo = 'auto 100%';
      borderRadius = '10px';
      break;
    case 'yoshi':
      anchoCarta = calculaVh(40);
      fondo = 'auto 100%';
      borderRadius = '10px';
      break;
    case 'full':
      anchoCarta = calculaVh(38);
      fondo = 'auto 100%';
      borderRadius = '10px';
      break;
    case 'ethereal':
      anchoCarta = calculaVh(41);
      fondo = 'auto 100%';
      borderRadius = '10px';
      break;
    case 'soul':
      anchoCarta = calculaVh(40);
      fondo = 'auto 100%';
      borderRadius = '20px';
      break;
    case 'zombie':
      anchoCarta = calculaVh(40);
      fondo = 'auto 100%';
      borderRadius = '27px';
      break;
    case 'santa':
      anchoCarta = calculaVh(40);
      fondo = 'auto 100%';
      borderRadius = '10px';
      break;
    case 'mystical':
      anchoCarta = calculaVh(43);
      fondo = 'auto 100%';
      borderRadius = '10px';
      break;
    case 'hermetic':
      anchoCarta = calculaVh(40);
      fondo = 'auto 90%';
      borderRadius = '10px';
      break;
    case 'thoth':
      anchoCarta = calculaVh(45);
      fondo = 'auto 100%';
      borderRadius = '10px';
      break;
  }

  const tarotDeck = [
    pathServerImages + 'mundo.jpg',
    pathServerImages + 'juicio.jpg',
    pathServerImages + 'sol.jpg',
    pathServerImages + 'luna.jpg',
    pathServerImages + 'estrella.jpg',
    pathServerImages + 'torre.jpg',
    pathServerImages + 'diablo.jpg',
    pathServerImages + 'templanza.jpg',
    pathServerImages + 'muerte.jpg',
    pathServerImages + 'colgado.jpg',
    pathServerImages + 'justicia.jpg',
    pathServerImages + 'rueda.jpg',
    pathServerImages + 'ermitano.jpg',
    pathServerImages + 'fuerza.jpg',
    pathServerImages + 'carro.jpg',
    pathServerImages + 'enamorados.jpg',
    pathServerImages + 'papa.jpg',
    pathServerImages + 'emperador.jpg',
    pathServerImages + 'emperatriz.jpg',
    pathServerImages + 'sacerdotisa.jpg',
    pathServerImages + 'mago.jpg',
    pathServerImages + 'loco.jpg',
  ]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -5 + Math.random() * 10, delay: i * 100})
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000, zIndex: '0' })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`


const cards = shuffleDeckAndSelect3Cards(tarotDeck)

  const [propos, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down }) => {   
    
  
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring  
     
      const scale = down ? 1.1 : 1 // Active cards lift up a bit (slight enlargement / zoom in)
      const zIndex = down ? 1 : 0 // Active cards should be on top (have a higher z-index)      
     //const zIndex = i+1 // Active cards should be on top (have a higher z-index)    
      return { scale, config: { friction: 50}, zIndex }
    })
    
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return propos.map(({ x, y, rot, scale, zIndex }, i) => (
    <animated.div
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x + (window.innerWidth / 5) * i - window.innerWidth / 5}px,${y}px,0)`),
        zIndex
      }}>
      {
        // This is the card itself, we're binding our gesture to it (and inject its index so we know which is which)
      }
      <animated.div {...bind(i)} style={{ borderRadius: borderRadius, maxWidth: anchoCarta, backgroundSize: fondo, transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
    </animated.div>
  ))
}

export default Labaraja_tirada;