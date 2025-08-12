// Export of module..there is two type

// 1. Named exports
// 2. Default
// 3. module-export using require

export const a = 1;
export const b = 2;
export const c = 3;
export const d = 4;
export const e = 5;
export const f = 6;

// 2. Default exports

let obj;
export default obj = {
  x: 5,
  y: 9,
};

// 3. using requierd

module.exports = {
    g : 2,
    h :3,
}