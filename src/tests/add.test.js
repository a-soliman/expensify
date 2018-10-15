const add = (a,b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('Should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('Should say "Hello"', () => {
    const result = generateGreeting('Mike');
    expect(result).toBe('Hello Mike!');
});