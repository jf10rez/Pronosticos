export const TrendingsButtons = ({ values, setValues }) => {

  const handleSubmit = (e) => {
    const { value: elHpValor } = e.target;

    if (values.length <= 0) return setValues((val) => [...val, 1]);

    console.log((values[values.length - 1] + +elHpValor) / 2);
    return setValues((val) => [
      ...val,
      +((values[values.length - 1] + +elHpValor) / 2).toFixed(2),
    ]);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
      <div style={{ display: 'flex', gap: 10 }}>
        <button
          style={{
            width: 72,
            height: 40,
            backgroundColor: "red",
            color: "white",
          }}
          value="1"
          onClick={handleSubmit}
        >
          Muy baja
        </button>
        <button
          style={{
            width: 70,
            height: 40,
            backgroundColor: "red",
            color: "white",
          }}
          value="1.5"
          onClick={handleSubmit}
        >
          Baja
        </button>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <button
          style={{
            width: 70,
            height: 40,
            backgroundColor: "green",
            color: "white",
          }}
          value="2"
          onClick={handleSubmit}
        >
          Alta
        </button>
        <button
          style={{
            width: 70,
            height: 40,
            backgroundColor: "green",
            color: "white",
          }}
          value="3"
          onClick={handleSubmit}
        >
          Muy Alta
        </button>
      </div>
    </div>
  );
};
