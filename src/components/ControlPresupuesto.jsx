import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({ gastos, setGastos, presupuesto, setPresupuesto, setIsValidPresupuesto }) => {

  const [porcentaje, setPorcentaje] = useState(0)
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0 )

    const totalDisponible = presupuesto - totalGastado

    //Calcular % gastado
    const nuevoProcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

    setDisponible(totalDisponible)
    setGastado(totalGastado)
    setTimeout(() => {
      setPorcentaje(nuevoProcentaje)
    }, 1000);
  }, [gastos])

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("es-ES", {
      style: "currency",
      currency: "CRC",
    });
  };

  const handleResetApp = () => {
    const resultado = confirm('Deseas reiniciar presupuesto y gastos?') 

    if(resultado) {
      setGastos([])
      setPresupuesto(0)
      setIsValidPresupuesto(false)
    }
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <CircularProgressbar
      background
      strokeWidth={5}
      backgroundPadding={3}
        styles={buildStyles({
          backgroundColor: porcentaje > 100 ? '#fff' : "#3b82f6",
          textColor: porcentaje > 100 ? '#DC2626' : '#fff',
          pathColor: porcentaje > 100 ? '#DC2626' : '#fff',
          trailColor: "transparent",
        })}
        value={porcentaje}
        text={`${porcentaje}% Gastado`}
      />

      <div className="contenido-presupuesto">
        <button 
          className="reset-app" 
          type="button" 
          onClick={handleResetApp}
        >
          Resetar App
        </button>
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>

        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
          <span>Disponible: </span> {formatearCantidad(disponible)}
        </p>

        <p>
          <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
