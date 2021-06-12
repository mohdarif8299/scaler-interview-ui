import React, { useEffect, useRef, useState } from 'react';
import { getAvailableParticipants, saveMeeting } from "../services/ApiUtil";
import { useHistory } from 'react-router-dom'
import './meeting-component.css';

const Meeting=()=>{
    let history = useHistory();
    const [agenda,setAgenda] = useState('');
    let [startTimeHour,setStartTimeHour] = useState('00');
    let [endTimeHour,setEndTimeHour] = useState('01');
    let [startTimeMinute,setStartTimeMinute] = useState('00');
    let [endTimeMinute,setEndTimeMinute] = useState('00');
    let [startTime,setStartTime] = useState('00:00');
    const [loading,setLoading] = useState(false);
    let [endTime,setEndTime] = useState('01:00');
    let [count,setCount] = useState(0);
    let [participants,setParticipants] = useState([]);
    let [participantOne,setParticipantOne] = useState(null);
    let [participantTwo,setParticipantTwo] = useState(null);
    const hours = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
    const minutes = ['00','05','10','15','20','25','30','35','40','45','50','55'];
    
    const getAllAvailableparticipants = (startTime,endTime)=> {
      getAvailableParticipants(startTime,endTime).then((data) => {
        console.log("Data ",data);
        setParticipants(data);
      });
    }
    
    useEffect(()=>{
      startTime = startTimeHour+":"+startTimeMinute;  
      endTime = endTimeHour+":"+endTimeMinute;
      setStartTime(startTimeHour+":"+startTimeMinute);
        setEndTime(endTimeHour+":"+endTimeMinute)
        getAllAvailableparticipants(startTime,endTime);
    },[]);

    const Meeting = {
      agenda,
      startTime,
      endTime,
      participantOne,
      participantTwo
    }

    const handleParticipant=(e)=>{
     
      if(e.target.checked===false) {
            count-=1;
            setCount(count);
           if(participantOne===e.target.value) {
             participantOne = null;
             setParticipantOne(null);
           }  else if(participantTwo===e.target.value) {
            participantTwo = null;
            setParticipantTwo(null);
           }

      } else {
       
        if(count>2) {
          e.target.checked = !e.target.checked;
         alert('Only Two Allowed At A Time');
         return ;
       }

        count+=1;
        setCount(count); 
        if(participantOne===null) { 
          let updated = e.target.value;  
          participantOne = updated;
            setParticipantOne(e.target.value);
        }
        else if(participantTwo===null) {
          let updated = e.target.value;  
          participantTwo = updated;
            setParticipantTwo(participantTwo) 
        }
      }
    }
    const validate=()=>{
      if(startTime>endTime) {
        alert('InValid Interview Time  '+startTime+' '+endTime);
      } else if(participantOne==null || participantTwo==null) {
        alert('Meeting Must have Two Participant')
      }
      else if(agenda==='') {
        alert('Meeting Agenda cant be blank');
      } else {
        console.log(Meeting);
        setLoading(true)
        saveMeeting(Meeting).then(()=>{
          setLoading(false);
          history.push('/');
        });
        //history.push('/')
      }
    }

  return (
    <div className="container">
      <p><b>Schedule a New Interview</b></p>
      <form>
      
            <p><b>Meeting Agenda</b> &nbsp;&nbsp;&nbsp; <input className="inpt-agenda" onChange={(e)=>{
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
     <div>
      <p><b>Available Users/Participants</b></p>
      
      {
        
        participants.map((p,k)=>{
          return (
            <div className="participant mb-2" key={k}>
              <label htmlFor={k}>{p.emailId}</label>
              <input id={k} type='checkbox' value={p.emailId}  onChange={handleParticipant}/>
            </div>
          )
        })

      }
      </div>

            <button className='btn btn-primary col-12' disabled={loading} onClick={(e)=>{e.preventDefault();validate();}}><b>Schedule Interview</b></button>
      
      </form>
    </div>
  );
}
export default Meeting;