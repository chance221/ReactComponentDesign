import { useContext } from "react";
import Speaker from "./Speaker";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";

function SpeakerList() {
  const {
    data: speakerData,
    requestStatus,
    error,
    updateRecord,
  } = useRequestDelay(2000, data);

  const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

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
        {speakerData
          .filter(function (speaker) {
            return (
              speaker.first.toLowerCase().includes(searchQuery) ||
              speaker.last.toLowerCase().includes(searchQuery)
            );
          })
          .filter(function (speaker) {
            return speaker.sessions.find((session) => {
              return session.eventYear === eventYear;
            });
          })
          .map(function (speaker) {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                onFavoriteToggle={(doneCallback) => {
                  updateRecord(
                    {
                      ...speaker,
                      favorite: !speaker.favorite,
                    },
                    doneCallback
                  );
                }}
              />
            );
          })}
      </div>
    </div>
  );
}

export default SpeakerList;
