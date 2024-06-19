import React from 'react';
import '../styles/home.css';
import footImage from '../assets/images/foot.jfif';
import tennisImage from '../assets/images/tennis.jfif';
import handballImage from '../assets/images/handball.jfif';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the Paris 2024 Olympics Ticketing</h1>
          <p>Experience the excitement of the Olympic Games with us!</p>
        </div>
      </section>
      <section className="events">
        <h2>Featured Sports</h2>
        <div className="event-cards">
          <div className="event-card">
            <img src={footImage} alt="Event 1" />
            <h3>Football</h3>
            <p>Pour les Jeux de Paris 2024, les matchs seront organisés dans sept des plus grands stades de l’hexagone, à Paris (Parc des Princes), Nantes (Stade de la Beaujoire), Bordeaux (Stade de Bordeaux), Marseille (Stade de Marseille), Nice (Stade de Nice), Saint Étienne (Stade Geoffroy-Guichard) et Lyon (Stade de Lyon).</p>
          </div>
          <div className="event-card">
            <img src={tennisImage} alt="Event 2" />
            <h3>Tennis</h3>
            <p>Aux Jeux Olympiques, le tennis dispose d’épreuves masculines et féminines de simple et de double, ainsi que d’une épreuve de double mixte. Tous les matchs de chaque épreuve seront disputés au meilleur de trois sets. Le tie-break s’appliquera dans chaque set de chaque épreuve de simple. Dans les épreuves de double masculin, féminin et mixte, le troisième set sera joué comme un jeu décisif.</p>
          </div>
          <div className="event-card">
            <img src={handballImage} alt="Event 3" />
            <h3>Handball</h3>
            <p>
            Sport ancré en Europe, seuls deux titres olympiques dans l’histoire du handball ont échappé aux nations européennes, quand la Corée du Sud remportait deux fois de suite le tournoi féminin en 1988 et en 1992. Après un doublé en argent historique à Rio, la France a marqué l’histoire à Tokyo en décrochant l’or dans les tournois masculin et féminin.</p>
          </div>
        </div>
      </section>
      <section className="tickets">
        <h2>Get Your Tickets</h2>
        <p>Don't miss out on the action. Purchase your tickets now!</p>
        <button>Buy Tickets</button>
      </section>
    </div>
  );
}

export default Home;
