import React from "react";
import { formatDate } from "../../helpers";
import { useSelector, useDispatch } from "react-redux";
import { Trash } from "../icons";

    
export default function TableItem(props) {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.InfoReducer.categories);
    const color = categories[props.item.category].color;
    const expense = categories[props.item.category].expense ? 'text-red-600' : 'text-green-600';
 

    function Delete(item) {

        dispatch({
            type:"DEL_DATA",
            payload: item
        })
        
    }

    return <>

        <tr className="">
            <td className="pb-2"> {formatDate(props.item.date)} </td>
            <td className={`${color} inline-block hidden sm:inline-block rounded text-white font-light mb-2 pt-1 pb-1 pl-3 pr-3`}> {categories[props.item.category].title} </td>
            <td className="pb-3"> {props.item.title} </td>
            <td className={`pb-3 ${expense}`}> R$ {props.item.value.toFixed(2)} </td>
            <td className={`hover:cursor-pointer w-5 pb-3`} onClick={()=>Delete(props.item)}> {Trash} </td>
        </tr>

    </>

    


}