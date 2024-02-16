import './App.css';
import Personaje from './Componente/Personaje';

function App() {
  return (
    <div className="App">
      <div className='titulo'><h2>Personajes</h2></div>
      <div className='personajes'>

        <Personaje
          nombre="Slash Beast"
          descripcion="Slash Beast , conocido en Japón como Slash Beastleo (スラッシュ·ビストレオ Surasshu Bisutoreo?) , es un Reploid basado en el modelo de un leon, y uno de los miembros de la Repliforce , un grupo que fue juzgado como Mavericks por el poder de su independencia. Se alistó en la Repliforce sólo para ejercer libremente sus habilidades de combate, pero a pesar de esta actitud que mostró un impávido coraje en la batalla sin temer a nada. Durante el golpe de Estado, Slash Beast fue el encargado de dirijir el Tren Militar de la Repliforce."
          color="#714208"
          rgba="rgba(241, 134, 3, 0.3)"
          imagen="Slash_Beast.png"
        />

        <Personaje
          nombre="Magma Dragon"
          descripcion="Magma Dragoon, conocido como Magmard Dragoon (マグマード · ドラグーン Magumādo Doragūn?)en Japón, es un Reploid basado en un dragón, el aparece en Mega Man X4. Fue un miembro de la Unidad de Combate 14, traicionando a los Maverick Hunters, convirtiéndose en un Maverick por si mismo, todo por la oportunidad de luchar con X y Zero."
          color="#C02D2A"
          rgba="rgba(239, 8, 8, 0.3)"
          imagen="Magma_Dragon.webp"
        />

        <Personaje
          nombre="Cyber Peacock"
          descripcion="Cyber Peacock, conocido como Cyber ​​Kujacker (サイバー · ク ジャッカー?) en Japón, es un Maverick basado en un pavo real en Megaman X4. Originalmente fue una la que protege la red frente a los piratas antes de que él fue corrompido por Sigma. Entonces comienza la red de corrupción de sí mismo, para llamar la atención de Maverick Hunters, ya que como Split Mushroom, el pavo real fue el encargado de las pruebas de X y las habilidades de Zero, poniéndolos a través de una serie de pruebas y ejercicios de entrenamiento."
          color="#B666BD"
          rgba="rgba(172, 2, 245, 0.3)"
          imagen="Cyber_Peacock.webp"
        />

        <Personaje
          nombre="Web Spider"
          descripcion="Web Spider, también conocido como Web Spidus ( ウェブ・スパイダス?)en Japón, es un Maverick basado en una araña, él trabaja para la Repliforce en el escuadrón de guerrillas. Antes de unirse a la Repliforce, fue una vez un Maverick Hunter, perteneciente a la unidad especial 0. Cuando Repliforce comenzó su guerra, fue colocado en la selva, a cargo de tener un poderoso cañón escondido allí."
          color="#56A62F"
          rgba="rgba(2, 213, 23, 0.3)"
          imagen="Web_Spider.webp"
        />
        
        <Personaje
          nombre="Split Mushroom"
          descripcion="Split Mushroom スプリット・マシュラーム・マ es un Maverick de ick de Mega M. El estaba a cargo de un Bio Laboratorio, pero fue cerrado y Split Mushroom fue desechado. En algún momento de la Guerra de Repliforce, fue resucitado por Sigma y se volvieron a hacer operaciones en el Bio Laboratorio como una distracción para los Maverick Hunter, su misión era probar las habilidades de X y Zero."
          color="#F87900"
          rgba="rgba(255, 128, 0, 0.3)" 
          imagen="Split_Mushroom.webp"
        />

        <Personaje
          nombre="Jet Stingray"
          descripcion="Jet Stingray conocido como Jet Stingren (ジェット・スティングレン Jetto Sutinguren?, Trad. Mantarraya Jet), es un miembro de la Repliforce basado en una mantarraya, que fue marcado Maverick debido a su independencia. Dedicado a su carrera militar, él trabajó hasta el rango para convertirse en miembro de la marina de la Repliforce. Él tenía un gran respeto, tanto para General como para Colonel, cuando General anunció su nuevo paso por la independencia Reploid no había duda de sus lealtades. Cuando comenzó el golpe, por diversión atacó una ciudad eléctrica subterránea creando el caos para atraer a los Maverick Hunters."
          color="#F8EA68"
          rgba="rgba(249, 253, 1, 0.3)"
          imagen="Jet_Stingray.webp"
        />

        <Personaje
          nombre="Frost Walrus"
          descripcion="Frost Walrus, conocido como フロスト·キバトドス (Frost Kibatodos?) en Japón, es uno de los miembros de la Repliforce que se marcó como Maverick debido a su deseo de independencia. Mal genio y pendenciero, su comportamiento destructivo le consiguió marcado para su eliminación como un Maverick, pero evitó estar unido a la Repliforce. Cuando el golpe de Estado inició su satisfacción, por lo que era una excusa perfecta para hacer disturbios tanto como a él le gustaba. Walrus estaba estacionado en la base secreta Repliforce Snow y el encargado de develar su nueva arma en construcción."
          color="#80DAEC"
          rgba="rgba(6, 211, 247, 0.3)"
          imagen="Frost_Walrus.webp"
        />

        <Personaje
          nombre="Storm Owl"
          descripcion="Storm Owl , conocido como Storm Fukuroul (ストーム·フクロウル?) en Japón, es un Maverick basado en el modelo de un buho , y uno de los miembros de la Repliforce , cuya organización fue juzgada como Mavericks por su anhelo de independencia. Uno de los generales más ingeniosos de la Repliforce, Storm Owl considera a todo el personal como familiar. Él estaba muy resentido cuando él y sus compañeros fueron calificados como Mavericks por los Maverick Hunters . Después del golpe que la Repliforce habia comenzado, él puso en marcha la Air Force para crear una distracción de desviar a los Maverick Hunters."
          color="#C8CACB"
          rgba="rgba(246, 245, 242, 0.3)"
          imagen="Storm_Owl.webp"
        />
      </div>
    </div>
  );
}

export default App;
