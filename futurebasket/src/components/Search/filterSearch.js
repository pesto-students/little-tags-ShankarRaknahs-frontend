import productList from "../../assets/products.json";

function filterSearch(searchText, maxSuggestions) {
    let result =  productList.reduce((acc, product) => {
       let matchingStrings =  isStringMatching(product.title, searchText);
        if(matchingStrings) acc.add(product.title);
        else {
            matchingStrings = isStringMatching(product.category, searchText);
            if(matchingStrings) acc.add(product.title);
        }
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