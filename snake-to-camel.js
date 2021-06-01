function snakeToCamel(snakeCaseString){
    let snakeToCamel = snakeCaseString => snakeCaseString.replace(/([-_]\w)/g, g => g[1].toUpperCase());  
    let transformation = snakeToCamel(snakeCaseString);
    return transformation;
}  



