import { useCallback, useState ,useEffect} from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charecterAllowed, setcharecterAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charecterAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length );
      pass += str.charAt(char);
      console.log(pass);
    }
  

    setPassword(pass);


  }, [length, numberAllowed, charecterAllowed, setPassword]);

 
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charecterAllowed,passwordGenerator])
  return (
    <>
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
        <div className="w-full max-w-xl bg-slate-800 rounded-2xl shadow-2xl p-6">
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            Password Generator
          </h1>

          <div className="flex mb-6">
            <input
              type="text"
              placeholder="Generated Password"
              className="flex-1 bg-slate-700 text-white px-4 py-3 rounded-l-lg outline-none"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-r-lg transition">
              Copy
            </button>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-white mb-2">
              <span>Password Length</span>
              <span>{length}</span>
            </div>

            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="w-full accent-orange-500"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>

          <div className="space-y-4">
            <label className="flex items-center gap-3 text-white">
              <input
                type="checkbox"
                defaultValue={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
                className="w-5 h-5 accent-orange-500"
              />
              Include Numbers
            </label>

            <label className="flex items-center gap-3 text-white">
              <input
                type="checkbox"
                defaultValue={setcharecterAllowed}
                id="charecterInput"
                onChange={() => {
                  setcharecterAllowed((prev) => !prev);
                }}
                className="w-5 h-5 accent-orange-500"
              />
              Include Special Characters
            </label>
          </div>

          {/* <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition">
          Generate Password
        </button> */}
        </div>
      </div>
    </>
  );
}

export default App;
