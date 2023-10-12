// The lobby (global scope)
let pigeon = {
    color: 'white',
    pattern: 'solid'
};

// Unit 1: Function to change pigeon's color
function unit1(newColor) {
    pigeon.color = newColor;
    console.log('Unit 1 changed the pigeon color to:', pigeon.color);
}

// Unit 2: Function to change pigeon's pattern
function unit2(newPattern) {
    pigeon.pattern = newPattern;
    console.log('Unit 2 changed the pigeon pattern to:', pigeon.pattern);
}

// Initial pigeon attributes
console.log('Initial pigeon attributes:', pigeon);

// Unit 1 changes the color
unit1('gray');

// Unit 2 changes the pattern
unit2('striped');

// Final pigeon attributes after changes
console.log('Final pigeon attributes:', pigeon);
