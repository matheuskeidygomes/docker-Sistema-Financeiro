import React from 'react';
import { LeftArrow, RightArrow } from '../icons';
import { formatCurrentMonth } from '../../helpers';
import ResumeItem from '../resumeItem';

export default function InfoArea(props) {

    function prevMonth() {

        let [year, month] = props.currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);

        currentDate.setMonth(currentDate.getMonth() - 1);
        props.onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    function nextMonth() {

        let [year, month] = props.currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);

        currentDate.setMonth(currentDate.getMonth() + 1);
        props.onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return <>

        <div className='flex flex-col sm:flex-row grow-0 bg-white -mt-20 rounded-lg p-5 border border-gray-400 mb-5 w-full items-center'>

            <div className='flex justify-center items-center'>

                <div className='cursor-pointer' onClick={() => prevMonth()}> {LeftArrow} </div>

                <div className='w-48 text-center font-bold text-lg'> {formatCurrentMonth(props.currentMonth)} </div>

                <div className='cursor-pointer' onClick={() => nextMonth()}> {RightArrow} </div>

            </div>

            <div className='flex grow items-start sm:items-center'>

                <ResumeItem title="Receitas" value={props.income} />
                <ResumeItem title="Despesas" value={props.expense} />
                <ResumeItem title="Balanço" value={props.income - props.expense} color={props.income - props.expense < 0 ? 'text-red-500' : 'text-green-500'} />

            </div>

        </div>

    </>

}