// eslint-disable-next-line
import Producto from '../Producto/Producto';
import './Productos.css';
function Productos({ agregarAlCarro, productos }) {
  return (
    <div  className='productos'>
      {
        productos.map((producto) =>
          <Producto
            agregarAlCarro={agregarAlCarro}
            key={producto.name}
            producto={producto}
          />
        )}
    </div>
  );
}

export default Productos;