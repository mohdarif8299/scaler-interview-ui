(this["webpackJsonpscaler-interview-portal"]=this["webpackJsonpscaler-interview-portal"]||[]).push([[0],{15:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(17),i=n.n(a),r=(n(23),n.p,n(24),n(3)),s=n(2),l="https://stormy-taiga-71292.herokuapp.com/v1",j=function(e){var t={headers:new Headers({"Content-Type":"application/json"})};return e=Object.assign({},t,e),fetch(e.url,e).then((function(e){return e.json().then((function(t){return e.ok?t:Promise.reject(t)}))}))};function b(e,t){return j({url:l+"/getusers?startTime="+e+"&endTime="+t,method:"GET"})}n(15);var u=n(0),o=function(){var e=new FormData,t=Object(r.f)(),n=Object(c.useState)(""),a=Object(s.a)(n,2),i=(a[0],a[1],Object(c.useState)("")),o=Object(s.a)(i,2),d=o[0],O=o[1],h=Object(c.useState)(""),p=Object(s.a)(h,2),x=p[0],m=p[1],f=Object(c.useState)("00"),v=Object(s.a)(f,2),g=v[0],S=v[1],w=Object(c.useState)("01"),T=Object(s.a)(w,2),I=T[0],N=T[1],C=Object(c.useState)("00"),A=Object(s.a)(C,2),y=A[0],k=A[1],E=Object(c.useState)("00"),P=Object(s.a)(E,2),M=P[0],D=P[1],F=Object(c.useState)("00:00"),H=Object(s.a)(F,2),R=H[0],J=H[1],L=Object(c.useState)(),U=Object(s.a)(L,2),V=U[0],q=U[1],B=Object(c.useState)(!1),G=Object(s.a)(B,2),_=G[0],z=G[1],K=Object(c.useState)("01:00"),Q=Object(s.a)(K,2),W=Q[0],X=Q[1],Y=Object(c.useState)(0),Z=Object(s.a)(Y,2),$=Z[0],ee=Z[1],te=Object(c.useState)([]),ne=Object(s.a)(te,2),ce=ne[0],ae=ne[1],ie=Object(c.useState)(null),re=Object(s.a)(ie,2),se=re[0],le=re[1],je=Object(c.useState)(null),be=Object(s.a)(je,2),ue=be[0],oe=be[1],de=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],Oe=["00","05","10","15","20","25","30","35","40","45","50","55"],he=function(e,t){b(e,t).then((function(e){console.log("Data ",e),ae(e)}))};Object(c.useEffect)((function(){R=g+":"+y,W=I+":"+M,J(g+":"+y),X(I+":"+M),he(R,W)}),[]);var pe={agenda:d,startTime:R,endTime:W,participantOne:se,participantTwo:ue,resume:x},xe=function(e){if(!1===e.target.checked)ee($-=1),se===e.target.value?(se=null,le(null)):ue===e.target.value&&(ue=null,oe(null));else{if($>=2)return e.target.checked=!e.target.checked,void alert("Only Two Allowed At A Time");if(ee($+=1),null===se){var t=e.target.value;se=t,le(e.target.value)}else if(null===ue){var n=e.target.value;oe(ue=n)}}},me=function(){var e;R>=W?alert("InValid Interview Time  "+R+" "+W):null==se||null==ue?alert("Meeting Must have Two Participant"):""===d?alert("Meeting Agenda cant be blank"):(console.log(pe),z(!0),(e=pe,j({url:l+"/save",body:JSON.stringify(e),method:"POST"})).then((function(){z(!1),t.push("/")})))};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:"Schedule a New Interview"})}),Object(u.jsxs)("form",{children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Meeting Agenda"})," \xa0\xa0\xa0 ",Object(u.jsx)("input",{className:"inpt-agenda",onChange:function(e){O(e.target.value)},placeholder:"Enter here",required:!0})]}),Object(u.jsx)("p",{children:Object(u.jsxs)("b",{children:["Interview Start Time \xa0\xa0\xa0\xa0",Object(u.jsx)("select",{value:g,onChange:function(e){var t=e.target.value;g=t,S(t),R=g+":"+y,J(g+":"+y),he(R,W)},children:de.map((function(e,t){return Object(u.jsx)("option",{children:e},t)}))}),"\xa0\xa0Hour \xa0\xa0\xa0\xa0",Object(u.jsx)("select",{value:y,onChange:function(e){var t=e.target.value;R=g+":"+(y=t),k(e.target.value),J(g+":"+y),he(R,W)},children:Oe.map((function(e,t){return Object(u.jsx)("option",{children:e},t)}))})," \xa0\xa0Minute \xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0  ",Object(u.jsx)("span",{children:"Interview Start Time, "})," ",R,Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"Interview End Time \xa0\xa0\xa0\xa0",Object(u.jsx)("select",{value:I,onChange:function(e){var t=e.target.value;I=t,N(t),W=I+":"+M,X(I+":"+M),he(R,W)},children:de.map((function(e,t){return Object(u.jsx)("option",{children:e},t)}))})," \xa0\xa0Hour \xa0\xa0\xa0\xa0",Object(u.jsx)("select",{value:M,onChange:function(e){var t=e.target.value;M=t,D(t),W=I+":"+M,X(I+":"+M),he(R,W)},children:Oe.map((function(e,t){return Object(u.jsx)("option",{children:e},t)}))})," \xa0\xa0Minute \xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0   ",Object(u.jsx)("span",{children:"Interview End Time, "})," ",W]})}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsxs)("div",{className:"form-group files color",children:[Object(u.jsx)("label",{children:"Upload Resume "}),Object(u.jsx)("input",{type:"file",className:"form-control",name:"file",onChange:function(t){t.preventDefault(),V=t.target.files[0],q(V),e.append("file",V),fetch(l+"/upload",{method:"post",body:e}).then((function(e){e.json().then((function(t){return e.ok?(console.log("resume uploaded",t),x=t.message,m(x),t):Promise.reject(t)}))})).catch((function(e){console.log(e)}))}})]})})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:"Available Users/Participants"})}),ce.map((function(e,t){return Object(u.jsxs)("div",{className:"participant mb-2",children:[Object(u.jsx)("label",{htmlFor:t,children:e.emailId}),Object(u.jsx)("input",{id:t,type:"checkbox",value:e.emailId,onChange:xe})]},t)}))]}),Object(u.jsx)("button",{className:"btn btn-primary col-12",disabled:_,onClick:function(e){e.preventDefault(),me()},children:Object(u.jsx)("b",{children:"Schedule Interview"})})]})]})},d=n(8),O=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=(t[0],t[1],Object(c.useState)([])),a=Object(s.a)(n,2),i=a[0],r=a[1],b={boxShadow:"#dadada 0px 1px 2px 1px",borderRadius:"0px"},o=function(){j({url:l+"/findAll",method:"GET"}).then((function(e){console.log("Data ",e),r(e)}))},O=function(e){(function(e){return j({url:l+"/delete/"+e,method:"DELETE"})})(e).then((function(e){console.log(e),o()}))};return Object(c.useEffect)((function(){o()}),[]),Object(u.jsx)("div",{className:"container",children:i.map((function(e,t){return Object(u.jsxs)("div",{className:"col-md-12 p-2 m-2",style:b,children:[Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:["Interview Agenda: ",Object(u.jsxs)("b",{children:[e.agenda," "]})]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Participant 1 "}),": ",Object(u.jsx)("span",{children:e.participantOne}),"\xa0 \xa0 \xa0 \xa0",Object(u.jsx)("b",{children:"Participant 2 "}),": ",Object(u.jsx)("span",{children:e.participantTwo})]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Interview Start Time "}),": ",Object(u.jsx)("span",{children:e.startTime}),"\xa0 \xa0 \xa0 \xa0",Object(u.jsx)("b",{children:"Interview End Time"}),": ",Object(u.jsx)("span",{children:e.endTime})]})}),""!=e.resume?Object(u.jsxs)("b",{children:[Object(u.jsx)("a",{className:"btn btn-primary",href:e.resume,target:"_blank",children:"View Resume"}),"\xa0 \xa0 \xa0 \xa0 "]}):null,Object(u.jsx)(d.b,{to:{pathname:"/update",state:{meeting:e}},className:"btn btn-secondary",children:Object(u.jsx)("b",{children:"Reschedule"})}),"\xa0 \xa0 \xa0 \xa0",Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){var t;t=e.meetingId,console.log(t),O(t)},children:Object(u.jsx)("b",{children:"Delete"})})]},t)}))})},h=function(){var e=Object(r.f)();return Object(u.jsxs)("div",{className:"p-2 m-3",children:[Object(u.jsx)("button",{onClick:function(){e.push("/")},className:"btn btn-primary",children:Object(u.jsx)("b",{children:"All Interviews"})})," \xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(u.jsx)("button",{onClick:function(){e.push("/create-meeting")},className:"btn btn-secondary",children:Object(u.jsx)("b",{children:"Schedule New Interview"})})]})},p=function(){var e=Object(r.g)().state.meeting,t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],i=n[1],o=Object(r.f)(),d=Object(c.useState)(""),O=Object(s.a)(d,2),h=O[0],p=O[1],x=Object(c.useState)(!1),m=Object(s.a)(x,2),f=m[0],v=m[1],g=Object(c.useState)(null),S=Object(s.a)(g,2),w=S[0],T=S[1],I=Object(c.useState)(null),N=Object(s.a)(I,2),C=N[0],A=N[1],y=Object(c.useState)(""),k=Object(s.a)(y,2),E=(k[0],k[1]),P=Object(c.useState)(""),M=Object(s.a)(P,2),D=(M[0],M[1]),F=Object(c.useState)("00"),H=Object(s.a)(F,2),R=H[0],J=H[1],L=Object(c.useState)("01"),U=Object(s.a)(L,2),V=U[0],q=U[1],B=Object(c.useState)("00"),G=Object(s.a)(B,2),_=G[0],z=G[1],K=Object(c.useState)("00"),Q=Object(s.a)(K,2),W=Q[0],X=Q[1],Y=Object(c.useState)("00:00"),Z=Object(s.a)(Y,2),$=Z[0],ee=Z[1],te=Object(c.useState)("01:00"),ne=Object(s.a)(te,2),ce=ne[0],ae=ne[1],ie=Object(c.useState)(0),re=Object(s.a)(ie,2),se=(re[0],re[1],Object(c.useState)([])),le=Object(s.a)(se,2),je=(le[0],le[1]),be=Object(c.useState)(null),ue=Object(s.a)(be,2),oe=ue[0],de=ue[1],Oe=Object(c.useState)(null),he=Object(s.a)(Oe,2),pe=he[0],xe=he[1],me=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],fe=["00","05","10","15","20","25","30","35","40","45","50","55"],ve=function(e,t){b(e,t).then((function(e){console.log("Data Chagned ",e),je(e),w=null,C=null,e.forEach((function(e){console.log(e),e.emailId===oe&&(w=e.emailId,T(w)),e.emailId===pe&&(C=e.emailId,A(C))})),console.log(w+"    "+C)}))};Object(c.useEffect)((function(){i(e.meetingId),p(e.agenda),oe=e.participantOne,pe=e.participantTwo,T(oe),A(pe),de(oe),xe(pe),$=e.startTime,ce=e.endTime,E($),D(ce),ee($),ae(ce),R=$.charAt(0)+$.charAt(1),J(R),_=$.charAt(3)+$.charAt(4),z(_),V=ce.charAt(0)+ce.charAt(1),q(V),W=ce.charAt(3)+ce.charAt(4),X(W),console.log(e),$=R+":"+_,ce=V+":"+W,ee(R+":"+_),ae(V+":"+W),ve($,ce)}),[]);var ge={meetingId:a,agenda:h,startTime:$,endTime:ce,participantOne:oe,participantTwo:pe},Se=function(){$>ce?alert("InValid Interview Time  "+$+" "+ce):null==w||null==C?alert("Meeting Must have Two Participant"):""===h?alert("Meeting Agenda cant be blank"):(v(!0),function(e){return j({url:l+"/update",body:JSON.stringify(e),method:"PUT"})}(ge).then((function(e){v(!1),console.log(e),o.push("/")})),console.log(ge))};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:"Schedule a New Interview"})}),Object(u.jsxs)("form",{children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Meeting Agenda"})," \xa0\xa0\xa0 ",Object(u.jsx)("input",{value:h,className:"inpt-agenda",onChange:function(e){p(e.target.value)},placeholder:"Enter here",required:!0})]}),Object(u.jsx)("p",{children:Object(u.jsxs)("b",{children:["Interview Start Time \xa0\xa0\xa0\xa0",Object(u.jsx)("select",{value:R,onChange:function(e){var t=e.target.value;R=t,J(t),$=R+":"+_,ee(R+":"+_),ve($,ce)},children:me.map((function(e,t){return Object(u.jsx)("option",{children:e},t)}))}),"\xa0\xa0Hour \xa0\xa0\xa0\xa0",Object(u.jsx)("select",{value:_,onChange:function(e){var t=e.target.value;$=R+":"+(_=t),z(e.target.value),ee(R+":"+_),ve($,ce)},children:fe.map((function(e,t){return Object(u.jsx)("option",{children:e},t)}))})," \xa0\xa0Minute \xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0  ",Object(u.jsx)("span",{children:"Interview Start Time, "})," ",$,Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"Interview End Time \xa0\xa0\xa0\xa0",Object(u.jsx)("select",{value:V,onChange:function(e){var t=e.target.value;V=t,q(t),ce=V+":"+W,ae(V+":"+W),ve($,ce)},children:me.map((function(e,t){return Object(u.jsx)("option",{children:e},t)}))})," \xa0\xa0Hour \xa0\xa0\xa0\xa0",Object(u.jsx)("select",{value:W,onChange:function(e){var t=e.target.value;W=t,X(t),ce=V+":"+W,ae(V+":"+W),ve($,ce)},children:fe.map((function(e,t){return Object(u.jsx)("option",{children:e},t)}))})," \xa0\xa0Minute \xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0   ",Object(u.jsx)("span",{children:"Interview End Time, "})," ",ce]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:[Object(u.jsxs)("b",{children:["Participant 1: ",oe]}),"\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0",Object(u.jsxs)("b",{children:["Participant 2: ",pe]})]})}),Object(u.jsx)("button",{className:"btn btn-primary col-12",disabled:f,onClick:function(e){e.preventDefault(),Se()},children:Object(u.jsx)("b",{children:"ReSchedule Interview"})})]})]})};var x=Object(r.h)((function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)(h,{}),Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",component:function(){return Object(u.jsx)(O,{})}}),Object(u.jsx)(r.a,{exact:!0,path:"/create-meeting",component:function(){return Object(u.jsx)(o,{})}}),Object(u.jsx)(r.a,{exact:!0,path:"/update",component:function(){return Object(u.jsx)(p,{})}})]})]})})})})),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};n(31);i.a.render(Object(u.jsx)(d.a,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),m()}},[[32,1,2]]]);
//# sourceMappingURL=main.28be3ddc.chunk.js.map