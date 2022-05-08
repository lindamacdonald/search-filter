import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ peeps }) => (
  <div className='card-list'>
    {peeps.map((peep) => {
      return <Card key={peep.id} peep={peep} />;
    })}
  </div>
);

export default CardList;
