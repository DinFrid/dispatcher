export const formatDate = (dateString : string) => {
    const date = new Date(dateString);

    const optionsDay = { weekday: 'long' as 'long' }; 

    const optionsDate = { year: 'numeric' as 'numeric', month: 'long' as 'long', day: 'numeric' as 'numeric' };
    

    const dayName = date.toLocaleDateString('en-US', optionsDay);

    const datePart = date.toLocaleDateString('en-US', optionsDate);

    const formattedDate = `${dayName} ${datePart.replace(',', '')}`; 

    return formattedDate;
};