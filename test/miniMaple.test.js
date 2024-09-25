import {MiniMaple} from "../src/miniMaple";

test('4*x^3, x', () => {
    expect(MiniMaple.diff('4*x^3', 'x')).toEqual('12*x^2');
});

test('4*x^3, y', () => {
    expect(MiniMaple.diff('4*x^3', 'y')).toEqual('0');
});

test('4*x^3 - x^2, x', () => {
    expect(MiniMaple.diff('4*x^3 - x^2', 'x')).toEqual('12*x^2 - 2*x');
});

test('4*x^3 - x^2, x', () => {
    expect(MiniMaple.diff('23x^5 - 5 y +4 -3*x', 'x')).toEqual('115*x^4 - 3');
});

test('4*x^3 - x^2 - 34, y', () => {
    expect(MiniMaple.diff('4*x^3 - x^2 - 34', 'y')).toEqual('0');
});

test('Unsupported operation', () => {
    expect(() => MiniMaple.diff('sin(x)', 'x')).toThrow();
});

test('12x^^3, x', () => {
    expect(() => MiniMaple.diff('12x^^3', 'x')).toThrow();
});

test('12x^^3, x3', () => {
    expect(() => MiniMaple.diff('12x^^3', 'x3')).toThrow();
});

test('7 - 3*x^3, x', () => {
    expect(MiniMaple.diff('7 - 3*x^3', 'x')).toEqual('- 9*x^2');
});

test('2*var^3 - 4*var^2 + var - 1, var', () => {
    expect(MiniMaple.diff('2*var^3 - 4*var^2 + var - 1', 'var')).toEqual('6*var^2 - 8*var + 1');
});

test('-3*x^4 + x^3 - 2*x + 5, x', () => {
    expect(MiniMaple.diff('-3*x^4 + x^3 - 2*x + 5', 'x')).toEqual('- 12*x^3 + 3*x^2 - 2');
});