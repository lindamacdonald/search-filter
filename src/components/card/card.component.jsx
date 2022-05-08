import './card.styles.css';

const Card = ({ peep }) => {
  const {name, email } = peep;

  return (
    <div className='card-container'>
      
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
