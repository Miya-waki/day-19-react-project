export default function App(){
  return (
    <div>

      <MyComoponent/>
    </div>
  );
}


function MyComoponent(){
  const id =100;
  const background ="bg-danger"
  return (
    <div>
      <h1>Interpolation{id}</h1>
      <h1>Interpolation{id+100}</h1>

      <h1 id="1">Interpolation{id}</h1>
      <h1 id={id}>Interpolation</h1>
    </div>
  )
}