const matrixMessages = [
  "0101 EMESTÉ.CL 1100",
  "1010 TECNOLOGÍA EMPRESARIAL 0110",
  "0011 SOPORTE TÉCNICO 1001",
  "1100 SOLUCIONES TECNOLÓGICAS 0101",
  "0110 SOFTWARE A MEDIDA 1010",
  "1001 PÁGINAS WEB 0011",
  "0101 AUTOMATIZACIÓN 1100",
];

const columns = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${(index * 97) % 100}%`,
  delay: `${(index % 12) * -0.85}s`,
  duration: `${8 + (index % 9)}s`,
  text: matrixMessages[index % matrixMessages.length],
}));

export function MatrixBackground() {
  return (
    <div className="matrix-shell" aria-hidden="true">
      <div className="matrix-depth matrix-depth-one" />
      <div className="matrix-depth matrix-depth-two" />
      <div className="matrix-scan" />
      <div className="matrix-vignette" />
      {columns.map((column) => (
        <span
          key={column.id}
          className="matrix-column"
          style={{
            left: column.left,
            animationDelay: column.delay,
            animationDuration: column.duration,
          }}
        >
          {column.text}
        </span>
      ))}
    </div>
  );
}
