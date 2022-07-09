// eslint-disable-next-line
import Button from '../Button/Button';
import './Producto.css';
function Producto({ agregarAlCarro, key, producto }) {
  return (
    <div className='producto'>
      <img className='imagen' src={producto.img} alt={producto.name} key={key} />
      <h3>{producto.name}</h3>
      <p>{producto.price}</p>
      <Button onClick={() => (agregarAlCarro(producto))}>
        Agregar al carro {producto.name}
      </Button>
    </div>
  );
}
export default Producto;