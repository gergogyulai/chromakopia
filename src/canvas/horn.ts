export type HornPosition = typeof hornPositions;

export const hornPositions = {
  left: {
    a: {type: "a", x: -10, y: -80 },
    b: {type: "a", x: -5, y: -80 },
    c: {type: "a", x: 0, y: -80 },
    d: {type: "a", x: -10, y: -80 },
    e: {type: "a", x: 0, y: -80 },
    f: {type: "a", x: -5, y: -80 },
    g: {type: "a", x: 0, y: -80 },
    h: {type: "a", x: -5, y: -80 },
    i: {type: "a", x: -5, y: -80 },
    j: {type: "a", x: 0, y: -80 },
    k: {type: "a", x: -5, y: -80 },
    l: {type: "a", x: -5, y: -80 },
    m: {type: "a", x: -5, y: -80 },
    n: {type: "a", x: -2, y: -80 },
    o: {type: "a", x: 0, y: -80 },
    p: {type: "a", x: -5, y: -80 },
    q: {type: "a", x: 0, y: -80 },
    r: {type: "a", x: -5, y: -80 },
    s: {type: "a", x: 0, y: -80 },
    t: {type: "a", x: -5, y: -80 },
    u: {type: "a", x: -5, y: -80 },
    v: {type: "a", x: -10, y: -80 },
    w: {type: "a", x: -10, y: -80 },
    x: {type: "a", x: -5, y: -80 },
    y: {type: "a", x: -5, y: -80 },
    z: {type: "a", x: -3, y: -80 },
  },
  right: {
    a: { type: "a", x: 25, y: -80 },
    b: { type: "a", x: 35, y: -80 },
    c: { type: "a", x: 35, y: -85 },
    d: { type: "a", x: 38, y: -80 },
    e: { type: "a", x: 30, y: -83 },
    f: { type: "a", x: 30, y: -82 },
    g: { type: "a", x: 40, y: -80 },
    h: { type: "a", x: 47, y: -83 },
    i: { type: "a", x: 4, y: -80 },
    j: { type: "b", x: 12, y: -80 },
    k: { type: "a", x: 35, y: -80 },
    l: { type: "a", x: 5, y: -80 },
    m: { type: "a", x: 52, y: -80 },
    n: { type: "a", x: 43, y: -80 },
    o: { type: "a", x: 40, y: -80 },
    p: { type: "a", x: 30, y: -80 },
    q: { type: "a", x: 45, y: -80 },
    r: { type: "a", x: 30, y: -80 },
    s: { type: "a", x: 30, y: -80 },
    t: { type: "a", x: 30, y: -80 },
    u: { type: "a", x: 40, y: -80 },
    v: { type: "a", x: 35, y: -80 },
    w: { type: "a", x: 62, y: -80 },
    x: { type: "a", x: 32, y: -80 },
    y: { type: "a", x: 34, y: -80 },
    z: { type: "a", x: 20, y: -80 },
  },
};



export const drawRightHorn = (ctx: CanvasRenderingContext2D, x: number, y: number, type: string) => {
  ctx.beginPath();
  if (type === "a") {
    ctx.moveTo(x + 1, y + 45);
    ctx.bezierCurveTo(x + 7.16667, y + 42.5, x + 19.5, y + 30.5, x + 17.5, y + 2);
    ctx.bezierCurveTo(x + 35.9339, y + 16.5531, x + 31.0968, y + 43.0903, x + 23.5475, y + 61);
    ctx.bezierCurveTo(x + 21.7594, y + 65.2419, x + 17, y + 62, x + 15, y + 62);
    ctx.lineTo(x + 11, y + 61);
    ctx.lineTo(x + 1, y + 45);
  } else {
    ctx.beginPath();  
    ctx.moveTo(x + 11.9998, y + 62);      
    ctx.lineTo(x + 7.99981, y + 61);      
    ctx.lineTo(x + 1.49981, y + 50.6);      
    ctx.bezierCurveTo(x + 1.00001, y + 47.5, x + 0.999812, y + 47, x + 0.999812, y + 47);      
    ctx.bezierCurveTo(x + 0.999613, y + 46.5, x + 0.225213, y + 43.9036, x + 1.49981, y + 42.9277);      
    ctx.bezierCurveTo(x + 7.87744, y + 38.0446, x + 16.1667, y + 25.7529, x + 14.4998, y + 2);      
    ctx.bezierCurveTo(x + 32.9337, y + 16.5531, x + 28.0966, y + 43.0903, x + 20.5473, y + 61);      
    ctx.bezierCurveTo(x + 18.7592, y + 65.2419, x + 13.9998, y + 62, x + 11.9998, y + 62);      
  }
  ctx.closePath();
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
};

export const drawLeftHorn = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  ctx.beginPath();
  ctx.moveTo(x + 30.2725, y + 45);
  ctx.bezierCurveTo(x + 24.1058, y + 42.5, x + 11.7725, y + 30.5, x + 13.7725, y + 2);
  ctx.bezierCurveTo(x - 9.02754, y + 20, x + 3.77246, y + 56.3333, x + 13.2725, y + 72);
  ctx.lineTo(x + 30.2725, y + 45);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();
};