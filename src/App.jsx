import { useState } from "react";
import { FaceCamera } from "./face-kit";

function App() {
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(null);

  return (
    <div style={{ padding: 40 }}>
      <button onClick={() => setShow(true)}>Open Camera</button>

      {show && (
        <FaceCamera
          onClose={() => setShow(false)}
          onResult={(data) => {
            console.log("RESULT:", data);
            setResult(data);
          }}
        />
      )}

      {result && (
        <div>
          <p>Age: {result.age}</p>
          <p>Gender: {result.gender}</p>
          <img src={result.image} width={200} />
        </div>
      )}
    </div>
  );
}

export default App;
