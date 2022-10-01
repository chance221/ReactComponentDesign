import SpeakerList from "./SpeakerList";
import SpeakersToolbar from "./SpeakersToolbar";

import {SpeakerFilterProvider} from '../contexts/SpeakerFilterContext';



function Speakers(){
  
  
  return (
    <SpeakerFilterProvider startingShowSessions={false}>
      <SpeakersToolbar />
      <SpeakerList />
    </ SpeakerFilterProvider>
  )
}

export default Speakers;