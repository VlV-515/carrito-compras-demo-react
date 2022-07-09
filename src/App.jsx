/* eslint-disable no-unused-vars */
import Productos from './components/Productos/Productos';
import Layout from './components/Layout/Layout';
import Tittle from './components/Tittle/Tittle';
function App() {
  const state = {
    productos: [{
      name: 'Tomate',
      price: 1500,
      img: '/productos/tomate.jpg',
    },
    {
      name: 'Albejas',
      price: 2500,
      img: '/productos/arbejas.jpg',
    },
    {
      name: 'Lechuga',
      price: 500,
      img: '/productos/lechuga.jpg',
    },
    ]
  };
  return (
    <div>
      <Layout>
        <Tittle/>
        <Productos
          agregarAlCarro={(producto) => (console.log({ producto }))}
          productos={state.productos}
        />
      </Layout>
    </div>
  );
}

export default App;