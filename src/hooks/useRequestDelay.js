import {useState, useEffect} from 'react';


export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"

}
function useRequestDelay(delayTime = 1000, initialData=[]){
  
  const [data, setData] = useState(initialData);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (delayTime) => {
    return new Promise((resolve) => setTimeout(resolve, delayTime));
  };

  useEffect(() => {
    async function delayFunc() {
      try {
        delay({delayTime})        
        setRequestStatus(REQUEST_STATUS.SUCCESS);        
        setData(initialData);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);        
        setError(e);
      }
    }
    delayFunc();
  }, []);

  function updateRecord(recordUpdated) {
    //this is creating a new array
    //map through the old array and add them to the new array 
    //if you locate the record that needs updating 
    //then update the old record wih the new data
    const newRecords = data.map(function (rec) {
      return rec.id === recordUpdated.id ? recordUpdated : rec;
    });

    async function delayFunction() {
      try {
        await delay(2000);
        setData(newRecords);
      } catch (error) {
        console.log("error thrown inside delay function", error)
      }      
    }
    delayFunction();    
  }

  //This is no longer necessary as we have the update record generic method. 
  function onFavoriteToggle(id) {
    //find the speaker object to update
    const speakersRecPrevious = speakerData.find(function (rec) {
      return rec.id == id;
    });
    // toggle the true to false for the found speaker
    const speakerRecUpdate = {
      ...speakersRecPrevious,
      favorite: !speakersRecPrevious.favorite,
    };

    //Go to the current state and update the speaker as a favorite
    //by creating a new speakerData object that replaces the old speaker
    //data with the new updated info.
    const speakerDataNew = speakerData.map(function (rec) {
      return rec.id === id ? speakerRecUpdate : rec;
    });

    setSpeakerData(speakerDataNew);
  }

  return {
    data, requestStatus, error, updateRecord
  };
}

export default useRequestDelay;