import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function FormArea() {

    const dispatch = useDispatch();

    const categories = useSelector(state => state.InfoReducer.categories);
    const categoriesKey = Object.keys(categories);

    const [data, setData] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);


    function Save() {

        if (data && category && title && value !== '') {

            let [year, month, day] = data.split('-');
            const date = new Date(year, month - 1, day);
            const item = { date, category, title, value: parseInt(value) };

            dispatch({
                type: 'ADD_DATA',
                payload: item
            })

            setData('');
            setCategory('');
            setTitle('');
            setValue(0);

        } else {

            alert('Por favor, preencher os campos necessários!')
        }

    }

    return <>

        <div className='flex flex-col items-center sm:flex-row sm:items-end justify-around bg-gray-100 border border-gray-400 rounded-lg p-7'>

            <div className='m-2 w-full sm:w-auto'>

                <h1 className='font-bold mb-2'> Data </h1>

                <input className="border rounded p-2 w-full focus:outline-0" type="date" value={data} onChange={(e) => setData(e.target.value)} />

            </div>

            <div className='m-2 w-full sm:w-auto'>

                <h1 className='font-bold mb-2'> Categoria </h1>

                <select className='border rounded w-full p-2 focus:outline-0' value={category} onChange={(e) => setCategory(e.target.value)} >

                        <option> </option>
                
                        {categoriesKey.map((categorie, index) => (

                            <option key={index} value={categorie}> {categories[categorie].title} </option>
                        
                        ))}
                
                </select>

            </div>

            <div className='m-2 w-full sm:w-auto'>

                <h1 className='font-bold mb-2'> Título </h1>

                <input className="border rounded w-full p-2 focus:outline-0" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

            </div>

            <div className='m-2 w-full sm:w-auto'>

                <h1 className='font-bold mb-2'> Valor </h1>

                <input className="border rounded w-full p-2 focus:outline-0" type="number" value={value} onChange={(e) => setValue(e.target.value)} />

            </div>

            <button className='m-2 bg-blue-500 text-white font-bold border w-full sm:w-auto rounded-lg p-2' onClick={() => Save()}> Salvar </button>

        </div>

    </>

}