import {
  SwipeableList,
  LeadingActions,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from "../helpers/index.js";
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";
import IconoDiezmo from "../img/icono_diezmo.svg";

const diccionaiIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
  diezmo: IconoDiezmo,
};

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
  const { categoria, cantidad, nombre, id, fecha } = gasto;

  const leadingActions = () => (
    <LeadingActions>
        <SwipeAction onClick={() => setGastoEditar(gasto)}>
            Editar
        </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
        <SwipeAction onClick={() => eliminarGasto(id)} destructive={true}>
            Eliminar
        </SwipeAction>
    </TrailingActions>
   )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionaiIconos[categoria]} alt="Icono Gasto" />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">
                Agreado el: {""}
                <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">₡{cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
