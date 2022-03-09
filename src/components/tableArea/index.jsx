import React from "react";
import TableItem from "../tableItem";

export default function TableArea(props) {

    return <>

        <div className="p-7 border border-gray-400 w-full bg-gray-100 rounded-xl mt-10">

            <table className="w-full">

                <thead className="text-left text-sm md:text-base">

                    <tr>
                        <th className="pb-3"> Data </th>
                        <th className="pb-3 hidden sm:block"> Categoria </th>
                        <th className="pb-3"> Título </th>
                        <th className="pb-3"> Valor </th>
                    </tr>

                </thead>

                <tbody className="text-sm md:text-base">

                    {props.list.map((item, index) => {

                        return <TableItem item={item} list={props.list} key={index} />
                    })}

                </tbody>

            </table>

        </div>

    </>
}