import Gasto from "./Gasto.jsx";
const listadoGastos = ({gastos}) => {
    return (
        <div className={`listado-gastos contenedor`}>
            <h2>{gastos.length > 0 ? 'Gastos' : 'No Hay Gastos Aún'}</h2>

            {gastos.map( gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                />
            ))}
        </div>
    )
}

export default listadoGastos