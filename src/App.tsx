import { useEffect, useState } from "react";
import BigSort from "./sections/Bigsort";
import SidebarCode from "./sections/Debugger";
import SidebarSettings from "./sections/Settings";
import type { AlgorithmKey, LanguageKey, MessageKey, OrderKey, SpeedKey } from "./types";
function App() {
  const [rangeValue, setRangeValue] = useState(10);

  const generateRandomValue = () => {
    const randomValue = Math.floor(Math.random() * 11) + 5;
    setRangeValue(randomValue);
  };

  const [codeAlgorithm,setCodeAlgorithm] = useState<AlgorithmKey>("BUBBLE");
  const [codeLanguage, setCodeLanguage] = useState<LanguageKey>("JAVASCRIPT");

  const [algSpeed, setAlgSpeed] = useState<SpeedKey>("1.0x");

  const [message, setMessage] = useState<MessageKey | null>(null);

  const [algOrder, setAlgOrder] = useState<OrderKey>("ASCENDING");

  const [theme, setTheme] = useState("dark");

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme") || "dark";
    setTheme(storageTheme);
    document.documentElement.classList.toggle("dark", storageTheme === "dark");
  }, []);


  return (
    <div className="flex overflow-y-scroll scroll-bar-custom flex-row justify-between bg-WM-background dark:bg-BM-background h-screen w-screen text-WM-text dark:text-BM-text font-display">
      <SidebarSettings         
        rangeValue={rangeValue}
        setRangeValue={setRangeValue}
        randomNumberItems={generateRandomValue} 

        codeAlgorithm={codeAlgorithm}
        setCodeAlgorithm={setCodeAlgorithm}

        algSpeed={algSpeed}
        setAlgSpeed={setAlgSpeed}

        algOrder={algOrder}
        setAlgOrder={setAlgOrder}

        codeLanguage={codeLanguage} 
        setCodeLanguage={setCodeLanguage} 

        theme={theme}
        handleThemeChange={handleThemeChange}
      />

      <BigSort 
        randomNumberItems={rangeValue}
        codeLanguage={codeLanguage}
        codeAlgorithm={codeAlgorithm}
        algSpeed={algSpeed}
        setMessage={setMessage} 
        algOrder={algOrder}      
      />

      <SidebarCode 
        codeLanguage={codeLanguage} 
        codeAlgorithm={codeAlgorithm}
        message={message}
      />
    </div>
  )
}

export default App
