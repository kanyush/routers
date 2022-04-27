// Задание 3 ------------------------
function Exercise3() {
    return (
      <div className="exercise">
        <h1 className="exercise__title">Задание 3</h1>
        <Rating rate={1} onChange={rate => console.log(rate)} />
      </div>
    );
  }
  /*
  Это компонент для показывания рейтингов.
  1. Нужно, чтобы по клику на звезду, должны быть активными
  и другие звезды, которые находятся до нее.
  2. В зависимости от пропса rate, по умолчанию
  должны быть активным соотвествующее количество звезд.
  Как бы рейтинг по умолчанию.
  3. После клика нужно передавать рейтинг в коллбэк onChange 
  */
  function Rating({ rate, onChange }) {
    return (
      <div style={{ display: "flex" }}>
        <Star active={true} />
        <Star active={true} />
        <Star active={false} />
        <Star active={false} />
        <Star active={false} />
      </div>
    );
  }
  
  function Star({ active, ...props }) {
    return (
      <svg width={20} height={19} viewBox="0 0 20 19" fill="none" {...props}>
        <path
          clipRule="evenodd"
          d="M10 .5l2.781 5.595L19 6.998l-4.5 4.353 1.062 6.149L10 14.595 4.438 17.5 5.5 11.35 1 6.999l6.219-.903L10 .5v0z"
          stroke={active ? "#FFA84C" : "#999"}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  export default Exercise3