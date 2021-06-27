import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'


function calculaVh(medida) {
  let totalAlto = window.innerHeight;
  let medidaEnVh = (medida * totalAlto) / 100;
  return medidaEnVh;
}
function calculaX(){
  let totalAncho = window.innerWidth;
  let laX= (totalAncho) / 3;
  return laX;
}

function Labaraja(props) {

  const pathServerImages = 'images_public/' + props.tarotRecibido + '/';
  const elProposRecibido = props.tarotRecibido;
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

  const cards = [
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
  const laXD=calculaX();
  // These two are just helpers, they curate spring data, values that are later being interpolated into css
  const to = i => ({ x: laXD, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
  const from = i => ({ x: laXD, y: i * -4, rot: 0, scale: 1.5, y: -1000 })
  // This is being used down there in the view, it interpolates rotation and scale into a css transform
  const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`


  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [propis, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta+laXD : laXD // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.2 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)

  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return propis.map(({ x, y, rot, scale }, i) => (
    <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div {...bind(i)} style={{ borderRadius: borderRadius, maxWidth: anchoCarta, backgroundSize: fondo, transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
    </animated.div>

  ))
}

export default Labaraja;