const State = {

    items: [
        { date: new Date(2021, 9, 15), category: 'food', title: 'McDonalds', value: 32.12 },
        { date: new Date(2021, 10, 15), category: 'food', title: 'Burguer King', value: 31.00 },
        { date: new Date(2021, 11, 9), category: 'salary', title: 'Salario', value: 1220.62 },
        { date: new Date(2021, 11, 15), category: 'rent', title: 'Aluguel', value: 400.00 },
        { date: new Date(2021, 11, 15), category: 'food', title: 'McDonalds', value: 30.00 },
        { date: new Date(2021, 11, 15), category: 'food', title: 'Subway', value: 40.00 },
        { date: new Date(2021, 11, 15), category: 'expense', title: 'Cabo USB', value: 20.00 }
    ],

    categories: {
        food: {
            title: 'Alimentação', color: 'bg-blue-500', expense: true
        },
        rent: {
            title: 'Aluguel', color: 'bg-orange-500', expense: true
        },
        salary: {
            title: 'Salário', color: 'bg-green-500', expense: false
        },
        expense: {
            title: 'Despesa', color: 'bg-red-500', expense: true
        }
    }

};

function InfoReducer(state = State, action) {

    switch (action.type) {

        case 'ADD_DATA':

            return { ...state, items: [...state.items, action.payload] };


        case 'DEL_DATA':

            return { ...state, items: [ ...state.items.filter(item => item !== action.payload) ] };


        default:

            return state;

    }

}

export default InfoReducer;