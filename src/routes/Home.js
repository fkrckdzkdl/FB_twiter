import React, { useState } from "react";
import Navigation from "components/Navigation";
import {dbService} from "fbInstanc"
import { doc, setDoc } from "firebase/firestore"; 
import { async } from "@firebase/util";
const Home = () => {

    
    const [nweet,setNweet] = useState("");
    const onSubmit = async(event) => {
        event.preventDefault();
        await setDoc(doc(dbService, "rweets", "chat"), {
            name: "Los Angeles",
            contents: nweet,
          });
    }
    // 이벤트 타겟의 값을 가져오는
    const onChange = (event) => {
        const { target:{value},} = event;
        setNweet(value)
    }
    return(
        <div>
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="what's on your mind?" maxLength={120} onChange={onChange}/>
        <input type="submit" value="Rweet" />
    </form>
</div>
    )
}
export default Home; 