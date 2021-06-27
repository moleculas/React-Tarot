import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import Colapsible from './Colapsible';
import losDatos from './Datos';

const elResultadoDeLosDatos = losDatos();

function calculaVh(medida) {
  let totalAlto = window.innerHeight;
  let medidaEnVh = (medida * totalAlto) / 100;
  return medidaEnVh;
}

function calculaX() {
  let totalAncho = window.innerWidth;
  let laX = (totalAncho) / 3;
  return laX;
}

function barajaYSelecciona3Cartas(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]

  }
  return array.splice(0, 3)
}

const grimorio = [
  ['carro.jpg', elResultadoDeLosDatos[7][1], 'El Carro'],
  ['carro_a.jpg', elResultadoDeLosDatos[7][2], 'El Carro Revertido'],
  ['colgado.jpg', elResultadoDeLosDatos[12][1], 'El Colgado'],
  ['colgado_a.jpg', elResultadoDeLosDatos[12][2], 'El Colgado Revertido'],
  ['diablo.jpg', elResultadoDeLosDatos[15][1], 'El Diablo'],
  ['diablo_a.jpg', elResultadoDeLosDatos[15][2], 'El Diablo Revertido'],
  ['emperador.jpg', elResultadoDeLosDatos[4][1], 'El Emperador'],
  ['emperador_a.jpg', elResultadoDeLosDatos[4][2], 'El Emperador Revertido'],
  ['emperatriz.jpg', elResultadoDeLosDatos[3][1], 'La Emperatriz'],
  ['emperatriz_a.jpg', elResultadoDeLosDatos[3][2], 'La Emperatriz Revertida'],
  ['enamorados.jpg', elResultadoDeLosDatos[6][1], 'Los Enamorados'],
  ['enamorados_a.jpg', elResultadoDeLosDatos[6][2], 'Los Enamorados Revertido'],
  ['ermitano.jpg', elResultadoDeLosDatos[9][1], 'El Ermitaño'],
  ['ermitano_a.jpg', elResultadoDeLosDatos[9][2], 'El Ermitaño Revertido'],
  ['estrella.jpg', elResultadoDeLosDatos[17][1], 'La Estrella'],
  ['estrella_a.jpg', elResultadoDeLosDatos[17][2], 'La Estrella Revertida'],
  ['fuerza.jpg', elResultadoDeLosDatos[11][1], 'La Fuerza'],
  ['fuerza_a.jpg', elResultadoDeLosDatos[11][2], 'La Fuerza Revertida'],
  ['juicio.jpg', elResultadoDeLosDatos[20][1], 'El Juicio'],
  ['juicio_a.jpg', elResultadoDeLosDatos[20][2], 'El Juicio Revertido'],
  ['justicia.jpg', elResultadoDeLosDatos[8][1], 'La Justicia'],
  ['justicia_a.jpg', elResultadoDeLosDatos[8][2], 'La Justicia Revertida'],
  ['loco.jpg', elResultadoDeLosDatos[0][1], 'El Loco'],
  ['loco_a.jpg', elResultadoDeLosDatos[0][2], 'El Loco Revertido'],
  ['luna.jpg', elResultadoDeLosDatos[18][1], 'La Luna'],
  ['luna_a.jpg', elResultadoDeLosDatos[18][2], 'La Luna Revertido'],
  ['mago.jpg', elResultadoDeLosDatos[1][1], 'El Mago'],
  ['mago_a.jpg', elResultadoDeLosDatos[1][2], 'El Mago Revertido'],
  ['muerte.jpg', elResultadoDeLosDatos[13][1], 'La Muerte'],
  ['muerte_a.jpg', elResultadoDeLosDatos[13][2], 'La Muerte Revertida'],
  ['mundo.jpg', elResultadoDeLosDatos[21][1], 'El Mundo'],
  ['mundo_a.jpg', elResultadoDeLosDatos[21][2], 'El Mundo Revertido'],
  ['papa.jpg', elResultadoDeLosDatos[5][1], 'El Papa'],
  ['papa_a.jpg', elResultadoDeLosDatos[5][2], 'El Papa Revertido'],
  ['rueda.jpg', elResultadoDeLosDatos[10][1], 'La Rueda de la Fortuna'],
  ['rueda_a.jpg', elResultadoDeLosDatos[10][2], 'La Rueda de la Fortuna Revertida'],
  ['sacerdotisa.jpg', elResultadoDeLosDatos[2][1], 'La Sacerdotisa'],
  ['sacerdotisa_a.jpg', elResultadoDeLosDatos[2][2], 'La Sacerdotisa Revertida'],
  ['sol.jpg', elResultadoDeLosDatos[19][1], 'El Sol'],
  ['sol_a.jpg', elResultadoDeLosDatos[19][2], 'El Sol Revertido'],
  ['templanza.jpg', elResultadoDeLosDatos[14][1], 'La Templanza'],
  ['templanza_a.jpg', elResultadoDeLosDatos[14][2], 'La Templanza Revertida'],
  ['torre.jpg', elResultadoDeLosDatos[16][1], 'La Torre'],
  ['torre_a.jpg', elResultadoDeLosDatos[16][2], 'La Torre Revertida'],
]

function detectaCartaInterior(laCarta) {
  let str = laCarta;
  for (var i = 0; i < grimorio.length; i++) {
    if (str.includes(grimorio[i][0])) {
      let datoEscrito = grimorio[i][1]
      let myObjetocarta = {
        titulo: grimorio[i][2],
        escrito: datoEscrito
      };
      return myObjetocarta
    }
  }
}

const Labaraja_tirada = (propis) => {

  const pathServerImages = 'images_public/' + propis.tarotRecibido + '/';
  const elProposRecibido = propis.tarotRecibido;
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
    [pathServerImages + 'mundo.jpg', pathServerImages + 'mundo_a.jpg'],
    [pathServerImages + 'juicio.jpg', pathServerImages + 'juicio_a.jpg'],
    [pathServerImages + 'sol.jpg', pathServerImages + 'sol_a.jpg'],
    [pathServerImages + 'luna.jpg', pathServerImages + 'luna_a.jpg'],
    [pathServerImages + 'estrella.jpg', pathServerImages + 'estrella_a.jpg'],
    [pathServerImages + 'torre.jpg', pathServerImages + 'torre_a.jpg'],
    [pathServerImages + 'diablo.jpg', pathServerImages + 'diablo_a.jpg'],
    [pathServerImages + 'templanza.jpg', pathServerImages + 'templanza_a.jpg'],
    [pathServerImages + 'muerte.jpg', pathServerImages + 'muerte_a.jpg'],
    [pathServerImages + 'colgado.jpg', pathServerImages + 'colgado_a.jpg'],
    [pathServerImages + 'justicia.jpg', pathServerImages + 'justicia_a.jpg'],
    [pathServerImages + 'rueda.jpg', pathServerImages + 'rueda_a.jpg'],
    [pathServerImages + 'ermitano.jpg', pathServerImages + 'ermitano_a.jpg'],
    [pathServerImages + 'fuerza.jpg', pathServerImages + 'fuerza_a.jpg'],
    [pathServerImages + 'carro.jpg', pathServerImages + 'carro_a.jpg'],
    [pathServerImages + 'enamorados.jpg', pathServerImages + 'enamorados_a.jpg'],
    [pathServerImages + 'papa.jpg', pathServerImages + 'papa_a.jpg'],
    [pathServerImages + 'emperador.jpg', pathServerImages + 'emperador_a.jpg'],
    [pathServerImages + 'emperatriz.jpg', pathServerImages + 'emperatriz_a.jpg'],
    [pathServerImages + 'sacerdotisa.jpg', pathServerImages + 'sacerdotisa_a.jpg'],
    [pathServerImages + 'mago.jpg', pathServerImages + 'mago_a.jpg'],
    [pathServerImages + 'loco.jpg', pathServerImages + 'loco_a.jpg'],
  ]

  const laXD = calculaX();
  // These two are just helpers, they curate spring data, values that are later being interpolated into css
  const to = i => ({ x: laXD, y: i * -4, scale: 1, rot: -5 + Math.random() * 10, delay: i * 100 })
  const from = i => ({ x: laXD, rot: 0, scale: 1.5, y: -1000, zIndex: '0' })
  // This is being used down there in the view, it interpolates rotation and scale into a css transform
  const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`


  const cartas = barajaYSelecciona3Cartas(tarotDeck)

  let lasCartas = []
  let primero = cartas[0][Math.floor(Math.random() * 2)]
  let segundo = cartas[1][Math.floor(Math.random() * 2)]
  let tercero = cartas[2][Math.floor(Math.random() * 2)]

  lasCartas.push(primero)
  lasCartas.push(segundo)
  lasCartas.push(tercero)

  let primerTextoPre = detectaCartaInterior(primero)
  let segundoTextoPre = detectaCartaInterior(segundo)
  let tercerTextoPre = detectaCartaInterior(tercero)

  let primerTexto = primerTextoPre.titulo
  let segundoTexto = segundoTextoPre.titulo
  let tercerTexto = tercerTextoPre.titulo

  let primerTexto2 = primerTextoPre.escrito
  let segundoTexto2 = segundoTextoPre.escrito
  let tercerTexto2 = tercerTextoPre.escrito


  const textoDefinitivo = <div id="elResultado"><Colapsible pasado1={primerTexto} presente1={segundoTexto} futuro1={tercerTexto} pasado2={primerTexto2} presente2={segundoTexto2} futuro2={tercerTexto2} /></div>

  setTimeout(() => {
    propis.onSelectText2(textoDefinitivo);
  }, 30);

  const cards = lasCartas;
  const [propos, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down }) => {


    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring  

      const scale = down ? 1.1 : 1 // Active cards lift up a bit (slight enlargement / zoom in)
      const zIndex = down ? 1 : 0 // Active cards should be on top (have a higher z-index)       

      return { scale, config: { friction: 10 }, zIndex }
    })

  })

  return propos.map(({ x, y, rot, scale, zIndex }, i) => (
    <animated.div
      key={i}
      id={'carta' + i}
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



export { Labaraja_tirada };