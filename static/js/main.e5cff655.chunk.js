(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(33)},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=a(6),s=a(7),i=a(9),m=a(8),d=a(10),p=a(20),u=a(5),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).getStyle=function(){return{textDecoration:a.props.todo.completed?"line-through":"none"}},a.markComplete=function(e){console.log(a.props)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title;return r.a.createElement("div",{style:this.getStyle()},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:this.getStyle(),className:"col s2"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)}),r.a.createElement("span",null,"?"))),r.a.createElement("div",{style:this.getStyle(),className:"col s8"},a),r.a.createElement("div",{className:"col s2 right-align"}," ",r.a.createElement("i",{class:"material-icons"},"delete"))))}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return r.a.createElement(h,{key:t.id,todo:t,markComplete:e.props.markComplete})})}}]),t}(n.Component),b=(a(28),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={todos:[{id:1,title:"Take out the trash",completed:!1},{id:2,title:"Update the Opengateweb",completed:!1},{id:3,title:"Dinner with wife",completed:!1},{id:4,title:"GITHub push the new codo",completed:!1}]},a.markComplete=function(e){a.setState({todos:a.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{basename:"/reacttodo"},r.a.createElement(u.a,{path:"".concat("/reacttodo","/reacttodo")},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m12 l12 m6 z-depth-5"},r.a.createElement("div",{className:"card blue-grey darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},"TODO List"),r.a.createElement("p",null,"With this React Craush Course we will learn about installation and drilling components. No state manager installed - Redux."),r.a.createElement("p",null,r.a.createElement("strong",null,"Work in progress ..."))),r.a.createElement("div",{className:"card-action"},r.a.createElement("a",{href:"https://youtu.be/sBws8MSXN7A"},"YT Course"),r.a.createElement("a",{href:"https://opengateweb.com"},"Last min: 50:01"))))),r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col s12 m12 l12 m6 z-depth-5 mt-30"},r.a.createElement("div",{className:"card blue-grey lighten-4"},r.a.createElement("div",{className:"card-content black-text"},r.a.createElement("span",{className:"card-title"},"If Completed"),r.a.createElement(E,{todos:this.state.todos,markComplete:this.markComplete})),r.a.createElement("div",{className:"card-action "},r.a.createElement("a",{className:"black-text",href:"https:/opengateweb.com",target:"_blank",rel:"noopener noreferrer"},"Home OpenGateWeb"),r.a.createElement("a",{className:"black-text",href:"https://reactjs.org/docs/getting-started.html",target:"_blank",rel:"noopener noreferrer"},"React Docs")))))))))}}]),t}(n.Component));l.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.e5cff655.chunk.js.map