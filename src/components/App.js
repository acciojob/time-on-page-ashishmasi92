
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
let [count,setCount] = useState(0)


useEffect(()=>{

 let id=  setInterval(()=>{
    setCount((prev)=>{return prev+1})
  },1000)

return ()=>clearInterval(id)

},[])

  return (
    <div>

      you have been on this page for {count} second.
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
