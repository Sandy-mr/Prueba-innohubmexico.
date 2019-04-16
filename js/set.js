function isSubsetOf(A, B) {
        result = (A.length === _.intersection(A, B).length);
        console.log(result)
        return result;
}

function isSupersetOf(A, B) {
        result = (B.length === _.intersection(B, A).length);
        console.log(result)
        return result;
}


A = new Set([1,2]);
B = new Set([1,2,3]);

var arrayA = Array.from(A);
var arrayB = Array.from(B);

A = arrayA;
B = arrayB;


console.log('---------SUB SET OF----------')

isSubsetOf(A,B) // -> true
isSubsetOf(B,A) // -> false


console.log('---------SUPER SET OF----------')
isSupersetOf(A,B) // -> false
isSupersetOf(B,A) // -> true