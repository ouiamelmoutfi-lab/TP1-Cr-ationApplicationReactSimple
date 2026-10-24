import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';
import BoutonAlerte from './BoutonAlerte';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Application Principale</h1>

      <HelloWorld />

      <hr />

      <Greeting prenom="Alice" />
      <Greeting prenom="Bob" />
      <Greeting prenom="Charlie" />
      <hr />

      <Profil nom="Alice" age={22} estActif={true} />
      <Profil nom="Bob" age={25} estActif={false} />

      <hr />

<h2>Nos voitures</h2>

<Voiture marque="Toyota" modele="Yaris" couleur="Rouge" />
<Voiture marque="Dacia" modele="Sandero" couleur="Blanc" />
<Voiture marque="Renault" modele="Clio" couleur="Noir" />

<hr />

<ListeCourses items={['Pain', 'Lait', 'Œufs', 'Pommes']} />

<hr />

<h2>Gestion des événements</h2>

<BoutonAlerte message="Bienvenue dans mon TP React !" />


    </div>
  );
}

export default App;
