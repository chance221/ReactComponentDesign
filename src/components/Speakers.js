import {data} from '../../SpeakerData';
import SpeakerList from './SpeakerList';
import Header from './Header';
import SpeakersToolbar from './SpeakersToolbar';

function Speakers(){
  return (
    <div className="container-fluid">
      <Header />
      <SpeakersToolbar />
      <SpeakerList data={data}/>
    </div>  
  );
}

export default Speakers;