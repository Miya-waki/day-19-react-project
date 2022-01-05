import { useState } from "react";
export default function App(){
  return (
    <div>

      <MyComoponent/>
    </div>
  );
}


function MyComoponent(){
  const id1 =100;
  const background ="bg-info";
  
   
    const list = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    const [cardCss, setCardcss] = useState("bg-primary text-light fs-3 p-4 mb-1");
  
    const primaryTheme = () => setCardcss("bg-primary text-light fs-3 p-4 mb-1");
    const darkTheme = () => setCardcss("bg-dark text-light fs-3 p-4 mb-1");
    const dangerTheme = () => setCardcss("bg-danger text-light fs-3 p-4 mb-1");
  
    return (
      <div>
        <input
          type="button"
          value="Primary Theme"
          className="btn btn-primary btn-sm"
          onClick={primaryTheme}
        />
        <input
          type="button"
          value="Primary Theme"
          className="btn btn-dark btn-sm"
          onClick={darkTheme}
        />
        <input
          type="button"
          value="Danger Theme"
          className="btn btn-danger btn-sm"
          onClick={dangerTheme}
        />
        {list.map(() => (
          <div className={cardCss}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
            earum. {cardCss}
          </div>
        ))}
      </div>
  );
}