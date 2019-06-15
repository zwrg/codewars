// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

const expandedForm = (num) => String(num).split("").reverse().map((e, i) => e * Math.pow(10, i)).reverse().filter(v => v !== 0).join(" + ");
