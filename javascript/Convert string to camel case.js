// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str) {
    if (!str) return "";
    else {
        let x = str.split(/[_-]/);
        console.log(x);
        x = x.map((e, i) => {
            if (i > 0) {
                let tmp = e;
                return tmp.charAt(0).toUpperCase() + tmp.slice(1);
            }
            return e;
        });
        console.log(x);
        return x.join("");
    }
}

// better
// function toCamelCase(str){
//     var regExp=/[-_]\w/ig;
//     return str.replace(regExp,function(match){
//           return match.charAt(1).toUpperCase();
//      });
// }