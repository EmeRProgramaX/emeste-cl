const columns = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${(index * 97) % 100}%`,
  delay: `${(index % 12) * -0.85}s`,
  duration: `${8 + (index % 9)}s`,
  text: index % 3 === 0 ? "0101 EMESTE 1100" : index % 3 === 1 ? "1010 CODEX 0110" : "0011 SYSTEM 1001",
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
