import React from 'react'

const Table = () => {
    return (
        <div>
            <div className="flex justify-evenly">
                <div>Refeição: Almoço</div>
                <div>02/02</div>
            </div>
            <table className="table-auto">
                <tr>
                    <th className="px-4">Bebida</th>
                    <th className="px-4" >Vendas</th>
                </tr>
                <tr>
                    <td className="px-4" >Coca</td>
                    <td className="px-4" ><div className=" flex justify-center">5</div></td>
                </tr>
                <tr>
                    <td className="px-4" >Guaraná</td>
                    <td className="px-4" ><div className=" flex justify-center">5</div></td>
                </tr>
                <tr>
                    <td className="px-4" >Suco</td>
                    <td className="px-4" ><div className=" flex justify-center">5</div></td>
                </tr>
                <tr>
                    <td className="px-4" >Coca-Zero</td>
                    <td className="px-4" ><div className=" flex justify-center">5</div></td>
                </tr>
                <tr>
                    <td className="px-4" >Guaraná-Zero</td>
                    <td className="px-4" ><div className=" flex justify-center">5</div></td>
                </tr>
                <tr>
                    <td className="px-4" >Água</td>
                    <td className="px-4" ><div className=" flex justify-center">5</div></td>
                </tr>
                <tr>
                    <td className="px-4" >Água Gás</td>
                    <td className="px-4" ><div className=" flex justify-center">5</div></td>
                </tr>
                <tr>
                    <td className="px-4" >H2O</td>
                    <td className="px-4" ><div className=" flex justify-center">5</div></td>
                </tr>
            </table>
        </div>
    )
}

export default Table