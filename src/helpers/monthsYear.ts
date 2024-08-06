
// export const miFuncion = (sign: '+' | '-', monthCount:number) => {
//     const currentYear = new Date().getFullYear()
//     const currentMonth = new Date().getMonth() + 1

//     if (sign === '+') {currentMonth + monthCount}
//     if (sign === '-') {currentMonth - monthCount}

//     const currentMonthCero = currentMonth < 10 ? `0${currentMonth.toString()}/${currentYear}` : `${currentMonth.toString()}/${currentYear}`
//     console.log(currentMonthCero);
//     return currentMonth
// }

export const actualMonthYear = () => {
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth() + 1
    const currentMonthCero = currentMonth < 10 ? `0${currentMonth.toString()}/${currentYear}` : `${currentMonth.toString()}/${currentYear}`
    return currentMonthCero
}

export const nowMonthWord = () => {
    const currentMonth = new Date().getMonth() + 1
    const months= ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    return months[currentMonth -1]
}

export const actualMonthWord = (month:number) => {
    const months= ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    
    return months[month -1]
}