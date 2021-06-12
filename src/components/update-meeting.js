import React, { useEffect, useState } from 'react';
import { getAvailableParticipants, updateMeeting } from "../services/ApiUtil";
import { useHistory, useParams,useLocation } from 'react-router-dom'
import './meeting-component.css';

const UpdateMeeting=()=>{
    const location = useLocation()
    const { meeting } = location.state;
    const [meetingId,setMeetingId] = useState('');
    let history = useHistory();
    const [agenda,setAgenda] = useState('');
    let [loading,setLoading] = useState(false);
    let [p1,setP1] = useState(null);
    let [p2,setP2] = useState(null);
    let [initialStartTime,setInitialStartTime] = useState('');
    let [initialEndTime,setInitialEndTime] = useState('');
    let [startTimeHour,setStartTimeHour] = useState('00');
    let [endTimeHour,setEndTimeHour] = useState('01');
    let [startTimeMinute,setStartTimeMinute] = useState('00');
    let [endTimeMinute,setEndTimeMinute] = useState('00');
    let [startTime,setStartTime] = useState('00:00');
    let [endTime,setEndTime] = useState('01:00');
    let [count,setCount] = useState(0);
    let [participants,setParticipants] = useState([]);
    let [participantOne,setParticipantOne] = useState(null);
    let [participantTwo,setParticipantTwo] = useState(null);
    const hours = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
    const minutes = ['00','05','10','15','20','25','30','35','40','45','50','55'];
    
    const getAllAvailableparticipants = (startTime,endTime)=> {
      getAvailableParticipants(startTime,endTime).then((data) => {
        console.log("Data Chagned ",data);
        participants = data;
        setParticipants(participants);
         p1 = null;
         p2 = null;
      
                  data.forEach((item) => {
                      console.log(item);
                      if (item.emailId === participantOne) {
                          p1 = item.emailId;
                          setP1(p1);
                      }
                       if(item.emailId === participantTwo) {
                           p2 = item.emailId;
                           setP2(p2);
                      }
                  });

         console.log(p1+"    "+p2);

      });
     
    }
    useEffect(()=>{
        
        
        setMeetingId(meeting.meetingId);
        setAgenda(meeting.agenda);
        participantOne = meeting.participantOne;
        participantTwo = meeting.participantTwo;
        setP1(participantOne);
        setP2(participantTwo);
        setParticipantOne(participantOne);
        setParticipantTwo(participantTwo);
        startTime = meeting.startTime;
        endTime = meeting.endTime;
        initialStartTime = startTime;
        setInitialStartTime(initialStartTime);
        initialEndTime = endTime;
        setInitialEndTime(initialEndTime);
        setStartTime(startTime);
        setEndTime(endTime);
        startTimeHour=startTime.charAt(0)+startTime.charAt(1);
        setStartTimeHour(startTimeHour);
        startTimeMinute = startTime.charAt(3)+startTime.charAt(4)
        setStartTimeMinute(startTimeMinute);
        endTimeHour = endTime.charAt(0)+endTime.charAt(1);
        setEndTimeHour(endTimeHour);
        endTimeMinute = endTime.charAt(3)+endTime.charAt(4)
        setEndTimeMinute(endTimeMinute);
        console.log(meeting);

     //   console.log("Meeting ID",props.meeting.meetingId);
      startTime = startTimeHour+":"+startTimeMinute;  
      endTime = endTimeHour+":"+endTimeMinute;
      setStartTime(startTimeHour+":"+startTimeMinute);
      setEndTime(endTimeHour+":"+endTimeMinute)
      getAllAvailableparticipants(startTime,endTime);
    },[]);

    const Meeting = {
      meetingId,
      agenda,
      startTime,
      endTime,
      participantOne,
      participantTwo
    }

  
    const validate=()=>{
      if(startTime>endTime) {
        alert('InValid Interview Time  '+startTime+' '+endTime);
      } else if(p1==null || p2==null) {
        alert('Meeting Must have Two Participant')
      }
      else if(agenda==='') {
        alert('Meeting Agenda cant be blank');
      } else {
          setLoading(true);
        updateMeeting(Meeting).then((data)=>{
            setLoading(false);
            console.log(data);history.push("/");
        });
        console.log(Meeting);
      }
    }

  return (
    <div className="container">
      <p><b>Schedule a New Interview</b></p>
      <form>
      
            <p><b>Meeting Agenda</b> &nbsp;&nbsp;&nbsp; <input value={agenda} className="inpt-agenda" onChange={(e)=>{
              setAgenda(e.target.value)
            }} placeholder='Enter here' required></input></p>
            <p><b>Interview Start Time &nbsp;&nbsp;&nbsp;&nbsp;
               <select value={startTimeHour} onChange={(v)=>{
                 let updated = v.target.value;
                 startTimeHour = updated;
                 setStartTimeHour(updated);
                 startTime = startTimeHour+":"+startTimeMinute;
                 setStartTime(startTimeHour+":"+startTimeMinute);
                 getAllAvailableparticipants(startTime,endTime);
               }}>{hours.map((h,k)=>{
                 return <option key={k}>{h}</option>
               })}</select> 
            &nbsp;&nbsp;Hour
            &nbsp;&nbsp;&nbsp;&nbsp; 
            <select value={startTimeMinute} onChange={(v)=>{
                let updated = v.target.value;
                startTimeMinute = updated;
               startTime = startTimeHour+":"+startTimeMinute;
                setStartTimeMinute(v.target.value);
               setStartTime(startTimeHour+":"+startTimeMinute);
               getAllAvailableparticipants(startTime,endTime);
            }} >{minutes.map((h,k)=>{
                 return <option key={k} >{h}</option>
               })}</select> &nbsp;&nbsp;Minute
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  <span>Interview Start Time, </span> {startTime}
       <br/><br/>   
     Interview End Time &nbsp;&nbsp;&nbsp;&nbsp; 
     <select value={endTimeHour} onChange={(v)=>{
        let updated = v.target.value;
        endTimeHour = updated;
        setEndTimeHour(updated);
        endTime = endTimeHour+":"+endTimeMinute;
        setEndTime(endTimeHour+":"+endTimeMinute);
        getAllAvailableparticipants(startTime,endTime);
     }}>{hours.map((h,k)=>{
                 return <option key={k}>{h}</option>
               })}</select> &nbsp;&nbsp;Hour
            &nbsp;&nbsp;&nbsp;&nbsp; 
          
          
          <select value={endTimeMinute} onChange={(v)=>{
             
             let updated = v.target.value;
                endTimeMinute = updated;
               setEndTimeMinute(updated);
               endTime = endTimeHour+":"+endTimeMinute;
               setEndTime(endTimeHour+":"+endTimeMinute);
               getAllAvailableparticipants(startTime,endTime);
            }}>{minutes.map((h,k)=>{
                 return <option key={k}>{h}</option>
               })}</select> &nbsp;&nbsp;Minute
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;   <span>Interview End Time, </span> {endTime}
        </b>
      </p>    
     
     <div><p>
         <b>Participant 1: {participantOne}</b>
         &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
         <b>Participant 2: {participantTwo}</b>
     </p></div>
            <button className='btn btn-primary col-12' disabled={loading} onClick={(e)=>{e.preventDefault();validate();}}><b>ReSchedule Interview</b></button>
      
      </form>
    </div>
  );
}
export default UpdateMeeting;