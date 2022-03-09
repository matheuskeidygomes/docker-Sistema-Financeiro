import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Content from "../../components/content";
import Header from "../../components/header";
import TableArea from "../../components/tableArea";
import InfoArea from "../../components/infoArea";
import { getCurrentMonth, filterListByMonth } from "../../helpers";
import FormArea from "../../components/formArea";
import { useSelector } from "react-redux";

export default function Home() {

    const items = useSelector(state => state.InfoReducer.items);
    const categories = useSelector(state => state.InfoReducer.categories);
    const [list, setList] = useState(items);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const [filteredList, setFilteredList] = useState([]);
    const [income, setIncome ] = useState(0);
    const [expense, setExpense] = useState(0);


    useEffect(()=> {
        setList(items);
    }, [items]);

    useEffect(()=> {

        setFilteredList(filterListByMonth(list, currentMonth));

    }, [list, currentMonth]);

    useEffect(()=> {

        let expenseCount = 0;
        let incomeCount = 0;

        for(let i in filteredList) {

            if(categories[filteredList[i].category].expense) {

                expenseCount += filteredList[i].value;
            
            } else {

                incomeCount += filteredList[i].value;
            }
        }

        setIncome(incomeCount);
        setExpense(expenseCount);

    }, [filteredList]);
    
    function onMonthChange(newMonth) {
        setCurrentMonth(newMonth);
    }

    return <>

        <Layout>

            <Header />

            <Content>

                <InfoArea currentMonth={currentMonth} onMonthChange={(newMonth)=>onMonthChange(newMonth)} income={income} expense={expense} />

                <FormArea/>

                <TableArea list={filteredList}/>

            </Content>

        </Layout>

    </>

}