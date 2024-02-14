export const replaceWhiteSpacesAndToLowerCase = (value : string) => {
    return value.replace(/\s/g, '-').toLowerCase();
}

export const toCamelCase = (value : string) => {
    return value
      .split(/[\s-_]+/)
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      })
      .join('');
  }

    export const parseFilters = (filters : Map<string, string>) => {
        let filterString = '';
        
        filters.forEach((value, key) => {
            if (value && value !== 'none') {
                filterString += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
            }
        });
    return filterString;
};