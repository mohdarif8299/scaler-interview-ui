import React, { useEffect, useState } from 'react';
import { getAllMeetings,deleteMeetingByMeetingId } from '../services/ApiUtil';
import { Link } from "react-router-dom";

const AllMeeting=()=>{
  const [open,setOpen] = useState(false);
  const [meeting, setMeeting] = useState([]);
  const style = {
      boxShadow:"#dadada 0px 1px 2px 1px",
      borderRadius:"0px"

  }
 
  const allMeetings = () => {
    getAllMeetings().then((data) => {
      console.log("Data ",data);
      setMeeting(data);
    });
  };

  const deleteMeeting=(meetingId)=>{
    deleteMeetingByMeetingId(meetingId).then((data)=>{
      console.log(data);     
      allMeetings();
    });
  }
  const handleMeetingDelete=(e)=>{
    console.log(e);
    deleteMeeting(e);
  }

  useEffect(()=>{
    allMeetings();
  },[])
  return (
   <div className='container'>
       {meeting.map((m,key) => {
                    return (
                      <div className="col-md-12 p-2 m-2" style={style} key={key}>
                        <div>
                            <p>Interview Agenda: <b>{m.agenda} </b></p> 
                        </div>
                        <div>
                            <p><b>Participant 1 </b>: <span>{m.participantOne}</span> 
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <b>Participant 2 </b>: <span>{m.participantTwo}</span> 
                            </p>
                        </div>
                        <div>
                            <p><b>Interview Start Time </b>: <span>{m.startTime}</span> 
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <b>Interview End Time</b>: <span>{m.endTime}</span> 
                            </p>
                        </div>
                        <Link 
                         to={{
                          pathname: "/update",
                          state: {
                            meeting:m
                          },
                        }}
                        className="btn btn-secondary" ><b>Reschedule</b></Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; 
                        <button className="btn btn-danger" onClick={()=>{
                        handleMeetingDelete(m.meetingId);
                        }}><b>Delete</b></button>
                      </div>
                    );
         })}
   </div>
  );
}
export default AllMeeting;