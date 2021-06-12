import React from 'react';
import { useHistory } from 'react-router-dom'

const Header=()=>{
  let history = useHistory();
  return (
    <div className='p-2 m-3'>
      <button onClick={()=>{history.push('/')}} className="btn btn-primary"><b>All Interviews</b></button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{history.push('/create-meeting')}} className="btn btn-secondary" ><b>Schedule New Interview</b></button>
    </div>
  );
}
export default Header;