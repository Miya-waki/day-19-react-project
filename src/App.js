export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  let count =100;
  return (
    <div>
      <h1>interpolation {count}</h1>
      <h1>interpolation {count +100}</h1>
     
    </div>
  );
}
