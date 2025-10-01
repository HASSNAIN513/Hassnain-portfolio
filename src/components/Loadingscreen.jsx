import { useEffect, useState } from "react";

function Loadingscreen({iscomplete}) {
  const [text, settext] = useState("");
  const word = "< WELCOME />";

  useEffect(() => {
   let i= 0
    const interval= setInterval(() => {
        settext(word.substring(0,i));
        i++
        if( i>word.length){
            clearInterval(interval)
            setTimeout(() => {
                iscomplete()
            }, 1000);
        }

    },200 );
  
    return () => {
      clearInterval(interval)
    }
  },[iscomplete])
  
  return (
    <div className="h-screen inset-0 z-50 bg-black items-center text-gray flex justify-center gap-4 flex-col  ">
      <div className="text-4xl  font-bold">{text}<span className="text-4xl animate-blink">|</span>
      </div>

      <div className="w-60 h-[2px] bg-white/30 overflow-hidden ">
        <div className="w-1/4 h-full bg-blue-700 transition duration-300 animate-loading"></div>
      </div>
    </div>
  );
}

export default Loadingscreen;
