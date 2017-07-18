function insertSuffix(suffix, tree){

    console.log('inserting suffix: ' + suffix);
    
    var isLeafCase = suffix.length == 1;
    
    if(isLeafCase){
        return;
    }
    
    var first = suffix[0];

    for(var child in tree.children){
        if(child.character == first){
            insertSuffix(suffix.substring(1), child); 
            return;
        }
    }

    var newChild = {character:first, children:[]};
    tree.children.push(newChild);
    insertSuffix(suffix.substring(1), newChild); 
  }

function buildSuffixTree(strings, specialChar){
    var tree = {children: []};
    for(var i = 0; i < strings.length; i++){
        var string = strings[i];
        console.log("processing:"+ string);
        for(var i= 0; i < string.length; i++){
            var suffix = string.substring(i);
            console.log("suffix:"+ string);
            insertSuffix(suffix, tree);               
        } 
    }
    return tree;
}

var tree = buildSuffixTree(['ABCDEF','BCDEGGH'], '$');
console.log(tree);
