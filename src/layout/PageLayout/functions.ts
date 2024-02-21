
export const replaceWhiteSpacesAndToLowerCase = (value : string) => {
    return value.replace(/\s/g, '-').toLowerCase();
}



  export const parseFilters = (filters: Map<string, string>) => {
    let filterString = '';


    const processDate = (date: string): string => {

        return date;
    };
    
    filters.forEach((value, key) => {
        if (value && value !== 'none') {
            if (key.toLowerCase() === 'dates' && value.includes(',')) {

                const [from, to] = value.split(',').map(date => date.trim());
                

                const processedFrom = processDate(from);
                const processedTo = processDate(to);
                

                filterString += `&from=${encodeURIComponent(processedFrom)}`;
                filterString += `&to=${encodeURIComponent(processedTo)}`;
            } else {

                filterString += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
            }
        }
    });

    return filterString;
};
