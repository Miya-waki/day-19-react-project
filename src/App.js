


function MyComoponent(){
  const id =100;
  return (
    <div>
      <h1>Interpolation{id}</h1>
      <h1>Interpolation{id+100}</h1>

      <h1 id="1">Interpolation{id}</h1>
      <h1 id={id}>Interpolation</h1>
    </div>
  )
}