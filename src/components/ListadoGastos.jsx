import Gasto from "./Gasto.jsx";
const listadoGastos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
    return (
        <div className={`listado-gastos contenedor`}>

            {
                filtro ? (
                    <>
                        <h2>{gastosFiltrados.length > 0 ? `Filtrando ${filtro.charAt(0).toUpperCase() + filtro.slice(1)}` : 'No Hay Gastos en esta Categoría'}</h2>
                        {
                            gastosFiltrados.map( gasto => (
                                <Gasto
                                    key={gasto.id}
                                    gasto={gasto}
                                    setGastoEditar={setGastoEditar}
                                    eliminarGasto={eliminarGasto}
                                />
                            ))
                        }
                    </>
                ) : (
                    <>
                        <h2>{gastos.length > 0 ? 'Gastos' : 'No Hay Gastos Aún'}</h2>
                        {
                            gastos.map( gasto => (
                                <Gasto
                                    key={gasto.id}
                                    gasto={gasto}
                                    setGastoEditar={setGastoEditar}
                                    eliminarGasto={eliminarGasto}
                                />
                            ))
                        }
                    </>
                )
            }

        </div>
    )
}

export default listadoGastos