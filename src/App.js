import React, { useState } from 'react';
import styled from '@emotion/styled';
import Spinner from 'react-spinkit';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

const ContenedorSpinner = styled.div`
  background-color: #fff;
  margin-top: 2rem;
  padding: 3rem;
  text-align: center;
`;

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: { marca: '', year: '', plan: '' },
  });

  const [cargando, guardarCargando] = useState(false);

  const { datos } = resumen;
  const { cotizacion } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? (
          <ContenedorSpinner>
            <Spinner fadeIn="quarter" name="three-bounce" />
          </ContenedorSpinner>
        ) : null}
        {!cargando ? <Resumen datos={datos} /> : null}
        {!cargando ? <Resultado cotizacion={parseFloat(cotizacion)} /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
