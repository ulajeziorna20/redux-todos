const Component = (props) => {
  return (
    <div>
      <button onClick={() => props.stateName("true")}>
        change Name on Ula
      </button>
      <button onClick={() => props.stateName("false ")}>
        change Name on Michał
      </button>
      <div>TO jest mój opis i on jest dla {props.desc ? "Michał" : "Ula"}</div>
    </div>
  )
}

export default Component
