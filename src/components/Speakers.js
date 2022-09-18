import SpeakerList from "./SpeakerList";
import SpeakersToolbar from "./SpeakersToolbar";
import {useState} from 'react';



function Speakers({ theme, setTheme}){
  
  const [showSessions, setShowSessions] = useState(true);

  
  return (
    <>
      <SpeakersToolbar 
        theme={theme} 
        setTheme={setTheme}
        showSessions={showSessions}
        setShowSessions= {setShowSessions}
      />
      <SpeakerList 
        showSessions={showSessions}/>
    </>
  )
}

export default Speakers;