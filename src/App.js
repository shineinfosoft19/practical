import "./App.css";
import Canvas from "./Canvas";

function App() {
  let loop = Array.from(Array(32).keys()).map((i) => 8 + i * 8);
  const width = 256;
  const height = 128;
  let arr = [];

  /* call for color box */
  const draw = (ctx) => {
    if (ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      let x = 0;
      let y = 0;
      loop.forEach((r) => {
        loop.forEach((g) => {
          loop.forEach((b) => {
            arr.push({ r, g, b, t: r + g + b });
          });
        });
      });
      arr
        .sort((a, b) => b.t - a.t)
        .forEach(({ r, g, b }) => {
          ctx.fillStyle = `rgb(${r},${g},${b})`;
          ctx.fillRect(x, y, 1, 1);
          y++;
          if (ctx.canvas.height <= y) {
            y = 0;
            x++;
          }
        });
    }
  };
  return (
    <div>
      <h1>Example</h1>
      <Canvas draw={draw} width={width} height={height} />
    </div>
  );
}

export default App;
