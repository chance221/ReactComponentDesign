import Speaker from "./Speaker";
import useRequestDelay, {REQUEST_STATUS} from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";


function SpeakerList({ showSessions }) {


  const {
    data: speakerData, 
    requestStatus,
    error, 
    updateRecord,
  } = useRequestDelay(2000, data);
  

  if (requestStatus === REQUEST_STATUS.FAIURE) {
    return (
      <div className="text-danger">
        ERROR:<b>loading Speaker Data Failed {error}</b>
      </div>
    );
  }
  if (requestStatus === REQUEST_STATUS.LOADING) return <div>...Loading</div>;

  return (
    <div className="container speaker-list">
      
        <div className="row">
          {speakerData.map(function (speaker) {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                showSessions={showSessions}
                onFavoriteToggle={(doneCallback) => {                  
                  updateRecord({
                    ...speaker,
                    favorite: !speaker.favorite,
                  }, 
                  doneCallback)
                }}
              />
            );
          })}
        </div>
      
    </div>
  );
}

export default SpeakerList;
