// let BASE_URL = "http://localhost:8080/v1";
let BASE_URL = "https://stormy-taiga-71292.herokuapp.com/v1";
const request = (options) => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);
  
    return fetch(options.url, options).then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    );
  };
  export function getAllMeetings() {
   
    return request({
      url: BASE_URL + "/findAll",
      method: "GET",
    });
  }
  export function getAvailableParticipants(startTime,endTime) {
      return request({
        url: BASE_URL + "/getusers?startTime="+startTime+'&endTime='+endTime,
        method: "GET",
      })
  }
  export function deleteMeetingByMeetingId(meetingId) {
    return request({
      url: BASE_URL + "/delete/"+meetingId,
      method: "DELETE",
    })
}
export function updateMeeting(meeting) {
    return request({
      url: BASE_URL + "/update",
      body:JSON.stringify(meeting),
      method: "PUT",
    })
}
export function saveMeeting(meeting) {
    return request({
      url: BASE_URL + "/save",
      body:JSON.stringify(meeting),
      method: "POST",
    })
}