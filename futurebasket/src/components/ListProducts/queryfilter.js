import productList from "../../assets/products.json";

function queryFilter(searchText) {
    let result =  productList.reduce((acc, product) => {
       let matchingStrings =  isStringMatching(product.title, searchText);
        if(matchingStrings) acc.add(product);
        else if(isSearchTerm(product.tags, searchText)) acc.add(product);
        else if(isStringMatching(product.company, searchText));
        return acc;
    }, new Set());
    return Array.from(result);
} 

const isStringMatching = (product, searchText) => {
    for(const word of product.trim().split(' ')) {
        if(word.toLocaleLowerCase().includes(searchText.trim().toLocaleLowerCase()))
            return true;
    }
    return false;
}

const isSearchTerm = (arr, searchTerm) => {
    return arr.includes(searchTerm.trim().toLocaleLowerCase());
}

export default queryFilter