import React, { Component } from 'react'
import Select from 'react-select';


const options = [
    { value: 'tarot_marsella', label: 'El Tarot de Marsella' },
    { value: 'tarot_lotr', label: 'El Tarot de El Señor de los Anillos' },
    { value: 'tarot_mystic', label: 'Mystic Mondays Tarot' },
    { value: 'tarot_neon', label: 'Neon Moon Tarot' },
    { value: 'tarot_leary', label: 'Neuro-Tarot Timothy Leary' },
    { value: 'tarot_black', label: 'R. Black Tarot' },
    { value: 'tarot_twin', label: 'Cartas de Tarot de Twin Peaks' },
    { value: 'tarot_yoshi', label: 'The Devil Tarot' },
    { value: 'tarot_full', label: 'Full Metal Alchemist Tarot' },
    { value: 'tarot_ethereal', label: 'Etheral Visions Tarot' },
    { value: 'tarot_soul', label: 'Major Arcana Tarot' },
    { value: 'tarot_zombie', label: 'Tarot Zombie' },
    { value: 'tarot_santa', label: 'Tarot de la Santa Muerte' },
    { value: 'tarot_mystical', label: 'Mystical Manga Tarot' },
    { value: 'tarot_hermetic', label: 'The Hermetic Tarot' },
    { value: 'tarot_thoth', label: 'Aleister Crowley Thoth Tarot' },
];

class Lat_izq_1 extends Component {

    componentDidMount = async () => {

    }
    handleChange(optionSelected) {
        const valueElegido = optionSelected.value;
        switch (valueElegido) {
            case 'tarot_marsella':
                //this.setState({ tarot: 'marsella' })
                this.setState({ contenido_izq: 'Una larga investigación llevó a Michael Dummett, filósofo y estudioso de los juegos de cartas, a concluir que - a falta de evidencia más antigua - el mazo del Tarot probablemente se inventó en el norte de Italia en el siglo XV y se introdujo en el sur de Francia cuando los franceses conquistaron Milán y Piamonte en 1499. Los antepasados del Tarot de Marsella podrían haber llegado a Francia en esa época. Los dibujos son de carácter medieval y quizás tengan influencia del arte del vitral gótico, bien por la línea de trazo similar, o bien por los colores.' })
                this.props.onSelectTarot('marsella');
                break;
            case 'tarot_lotr':
                //this.setState({ tarot: 'lotr' })
                this.setState({ contenido_izq: 'La baraja de tarot El Señor de los Anillos ha sido realizada por la artista rusa Scieth Ailm. Esta colección de arte de la Tierra Media en forma de cartas del tarot es muy popular. Los arcanos mayores se dibujan como personajes de la fantasía de Tolkien.' })
                this.props.onSelectTarot('lotr');
                break;
            case 'tarot_mystic':
                // this.setState({ tarot: 'mystic' })
                this.setState({ contenido_izq: 'Este mazo, creado por Grace Duong en 2017, tiene una estética muy moderna y, a la vez, algo retro. Se destaca por sus colores vibrantes y detalles holográficos, que le dan un brillo muy especial. Su nombre, que se traduce al español como el “tarot de los lunes místicos”, tiene un eco marcado de la vida cotidiana contemporánea, y busca además transmitir toda la frescura de los nuevos comienzos, todo infusionado de magia, espiritualidad y diversión.' })
                this.props.onSelectTarot('mystic');
                break;
            case 'tarot_neon':
                // this.setState({ tarot: 'neon' })
                this.setState({ contenido_izq: 'Una baraja de tarot cyberpunk retro-futurista con ilustraciones originales creadas por pixeloccult.' })
                this.props.onSelectTarot('neon');
                break;
            case 'tarot_leary':
                //this.setState({ tarot: 'leary' })
                this.setState({ contenido_izq: 'Basado en “El juego de la vida” de Timothy Leary y en su modelo de 8 circuitos y cómo se aplican al Tarot. Para resumir muy brevemente, divide la conciencia en 8 "mini-cerebros", cada uno de los cuales tiene 3 funciones (recepción, almacenamiento / integración / análisis y transmisión) y divide el tarot de la misma forma.' })
                this.props.onSelectTarot('leary');
                break;
            case 'tarot_black':
                // this.setState({ tarot: 'black' })
                this.setState({ contenido_izq: 'Mazo de Tarot diseñado por el artista R.Black' })
                this.props.onSelectTarot('black');
                break;
            case 'tarot_twin':
                // this.setState({ tarot: 'twin' })
                this.setState({ contenido_izq: 'El ilustrador y creador de cómics Benjamin Mackey le dijo a Welcome to Twin Peaks que estaba jugando con la idea de diseñar una baraja de tarot de Twin Peaks inspirada en la influyente baraja Rider-Waite-Smith publicada originalmente en 1910.' })
                this.props.onSelectTarot('twin');
                break;
            case 'tarot_yoshi':
                //this.setState({ tarot: 'yoshi' })
                this.setState({ contenido_izq: 'The Devil Tarot es una baraja creada por la artista Yoshi Yoshitani, quien siempre se ha inspirado en culturas, historias, mitologías y patrones de todo el mundo. Ella usa esta inspiración para alimentar sus conceptos e ilustraciones.' })
                this.props.onSelectTarot('yoshi');
                break;
            case 'tarot_full':
                // this.setState({ tarot: 'full' })
                this.setState({ contenido_izq: 'Baraja de Taror basada en el manga Full Metal Alchemist' })
                this.props.onSelectTarot('full');
                break;
            case 'tarot_ethereal':
                // this.setState({ tarot: 'ethereal' })
                this.setState({ contenido_izq: 'En la creación de Ethereal Visions Tarot, Matt Hughes se ha inspirado en el movimiento Art Nouveau, adoptando su estilo distintivo y su meticuloso enfoque hacia la artesanía.' })
                this.props.onSelectTarot('ethereal');
                break;
            case 'tarot_soul':
                // this.setState({ tarot: 'soul' })
                this.setState({ contenido_izq: 'Las cartas del tarot de Mayor Arcana ilustran la estructura de la conciencia humana y contienen las claves de las lecciones de vida transmitidas a lo largo de los siglos. Sus imágenes están comúnmente llenas de sabiduría de múltiples culturas y tradiciones esotéricas, incluidas las religiones egipcia, budista, hindú, sufí, hebrea y cristiana.' })
                this.props.onSelectTarot('soul');
                break;
            case 'tarot_zombie':
                // this.setState({ tarot: 'zombie' })
                this.setState({ contenido_izq: 'Imagina el célebre "Rider Deck" impregnado de los horrores de Night of the Living Dead. El resultado es The Zombie Tarot, una interpretación loca y cursi de un sistema de adivinación clásico. En este universo paralelo zombificado, los Arcanos Mayores están llenos de cadáveres arrastrándose.' })
                this.props.onSelectTarot('zombie');
                break;
            case 'tarot_santa':
                // this.setState({ tarot: 'santa' })
                this.setState({ contenido_izq: 'Edición limitada y numerada basada en el fantástico tarot de la Santa Muerte. Una obra maestra de imágenes inspiradas, esta baraja de tarot es una herramienta poderosa para trabajar con el misticismo asociado con el Día de los Muertos y Santa Muerte.' })
                this.props.onSelectTarot('santa');
                break;
            case 'tarot_mystical':
                // this.setState({ tarot: 'mystical' })
                this.setState({ contenido_izq: 'Capturando el bello estilo y el espíritu de las novelas gráficas japonesas, Mystical Manga Tarot lo alienta a dar un paso audaz en el camino de la aventura y descubrir qué oportunidades místicas tenemos por delante.' })
                this.props.onSelectTarot('mystical');
                break;
            case 'tarot_hermetic':
                // this.setState({ tarot: 'hermetic' })
                this.setState({ contenido_izq: 'U.S. Games Systems ha reeditado con orgullo la baraja Hermetic Tarot en reconocimiento a su importancia histórica y artística. Los detalles y símbolos en cada carta revelan muchos de los trabajos esotéricos de la Orden Secreta de la Golden Dawn, que floreció alrededor del cambio de siglo. Los sutiles diseños en blanco y negro de Godfrey Dowson enfatizan los atributos astrológicos de la Golden Dawn con más elementos sefiróticos, angelicales, geománticos, numéricos y cabalísticos.' })
                this.props.onSelectTarot('hermetic');
                break;
            case 'tarot_thoth':
                // this.setState({ tarot: 'thoth' })
                this.setState({ contenido_izq: 'La baraja Thoth Tarot es una de las barajas de Tarot más famosas del mundo, pintada por la artista Frieda Harris bajo la guía del legendario investigador Aleister Crowley. Esta baraja está influenciada por el Libro de Thoth y el judaísmo. Aunque sigue siendo una de las barajas clásicas, contiene los sistemas de símbolos místicos de la Cabalá y la astrología del Libro de Thoth, lo que requiere que los usuarios investiguen mucho para comprender el significado oculto de cada carta y tengan una cierta base de conocimientos para capturar la cubierta de la mejor manera.' })
                this.props.onSelectTarot('thoth');
                break;
        }

    }
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'null',
            tarot: 'marsella',
            contenido_izq: 'Una larga investigación llevó a Michael Dummett, filósofo y estudioso de los juegos de cartas, a concluir que - a falta de evidencia más antigua - el mazo del Tarot probablemente se inventó en el norte de Italia en el siglo XV y se introdujo en el sur de Francia cuando los franceses conquistaron Milán y Piamonte en 1499. Los antepasados del Tarot de Marsella podrían haber llegado a Francia en esa época. Los dibujos son de carácter medieval y quizás tengan influencia del arte del vitral gótico, bien por la línea de trazo similar, o bien por los colores.',

        }
        this.handleChange = this.handleChange.bind(this);

    }

    render() {
        let contenido = this.state.contenido_izq;
        return (
            <div className="mari-15">
                <p className="justificat">Elige la baraja de Tarot seleccionándola desde el siguiente desplegable. </p>
                <Select
                    //value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    getOptionValue={option => option.value}
                    placeholder='Elige Tarot...'
                    defaultValue={{ label: "El Tarot de Marsella", value: 'tarot_marsella' }}
                    theme={theme => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary25: 'grey',
                            prymary: '#4b4a49',
                            neutral0: '#a4a4a3',
                            primary: '#eeedec',
                            neutral80: '#ffffff',
                            primary50: '#4b4a49',
                            neutral60: '#ffffff',
                            neutral40: '#ffffff',
                        },
                    })}
                />
                <p></p>
                <p className="justificat">{contenido}</p>
                <p></p>
                <hr />
                <p className="justificat">Una vez hayas elegido el mazo pulsa el botón Realizar Tirada.</p>

            </div>
        );


    }

}
export default Lat_izq_1;