import productList from "../../assets/suggestions.json";

function filterSearch(searchText, maxSuggestions) {
    let result =  productList.reduce((acc, product) => {
       let matchingStrings =  isStringMatching(product, searchText);
        if(matchingStrings) acc.add(product);
        return acc;
    }, new Set());
    return Array.from(result).slice(0, maxSuggestions);
} 

const isStringMatching = (product, searchText) => {
    for(const word of product.trim().split(' ')) {
        if(word.toLocaleLowerCase().includes(searchText.trim().toLocaleLowerCase()))
            return true;
    }
    return false;
}
export default filterSearch