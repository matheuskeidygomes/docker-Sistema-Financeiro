export function getCurrentMonth() {

    const DateNow = new Date();

    return `${DateNow.getFullYear()}-${DateNow.getMonth() + 1}`;

}

export function filterListByMonth(list, date) {

    const [year, month] = date.split('-');

    return list.filter((item) => {

        let newDate = new Date(item.date);

        return newDate.getFullYear() === parseInt(year) && newDate.getMonth() + 1 === parseInt(month)
    });

    /*

    let newList = [];

    for(let i in list) {

        let newDate = new Date(list[i].date);

        if (newDate.getFullYear() === parseInt(year) && newDate.getMonth() + 1 === parseInt(month)) {
            newList.push(list[i]);
        }
    }

    return newList;

    */

}

export function formatDate(date) {

    let newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate(); 

    function addZeroToDate(number) {

        return number < 10 ? `0${number}` : `${number}`;
    }

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;

}

export function formatCurrentMonth(currentMonth) {

    let [year, month] = currentMonth.split('-');
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return `${months[parseInt(month) - 1]} de ${year}`;
}

