(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),i=a(19),o=a.n(i),s=(a(98),a(42)),l=a(43),m=a(51),p=a(44),c=a(52),u=a(4),d=a(3),h=a(116),g=a(57),f=a.n(g),b=a(92),j=a(59),w=a(50),v=a(112),E=a(114),y=a(105),x=a(83),C=d.a.create({row:{flexDirection:"row",justifyContent:"center",alignItems:"center",padding:15,marginBottom:5,backgroundColor:"white",borderBottomWidth:d.a.hairlineWidth,borderBottomColor:"rgba(0,0,0,0.1)"},rowIcon:{width:64,height:64,marginRight:20,borderRadius:"50%",boxShadow:"0 1px 2px 0 rgba(0,0,0,0.1)"},rowData:{flex:1},rowDataText:{fontSize:15,textTransform:"capitalize",color:"#4b4b4b"},rowDataSubText:{fontSize:13,opacity:.8,color:"#a8a689",marginTop:4}}),D=function(e){var t=e.item;return n.a.createElement(u.a,{style:C.row},n.a.createElement(y.a,{style:C.rowIcon,source:t.picture.medium}),n.a.createElement(u.a,{style:C.rowData},n.a.createElement(x.a,{style:C.rowDataText},t.service),n.a.createElement(x.a,{style:C.rowDataText},"".concat(t.name.title," ").concat(t.name.first," ").concat(t.name.last)),n.a.createElement(x.a,{style:C.rowDataSubText},t.phone)))},k=a(115),B=d.a.create({actionsContainer:{flex:1,flexDirection:"row",justifyContent:"flex-end",alignItems:"center",padding:10},actionButton:{padding:10,color:"white",borderRadius:6,width:80,backgroundColor:"#808080",marginRight:5,marginLeft:5},actionButtonDestructive:{backgroundColor:"#ff4b21"},actionButtonText:{textAlign:"center"}}),O=function(e){return console.log(e),n.a.createElement(u.a,{style:B.actionsContainer},n.a.createElement(k.a,{style:[B.actionButton,B.actionButtonDestructive],onPress:function(){}},n.a.createElement(x.a,{style:B.actionButtonText},"call")))},S=function(e){var t=e.users;return n.a.createElement(E.a,{data:t,bounceFirstRowOnMount:!0,maxSwipeDistance:160,renderItem:D,renderQuickActions:O})},A=a(91),T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={users:[],loading:!0},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"getUsers",value:function(){var e=Object(j.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=A.a,this.setState({users:Object(b.a)(t),loading:!1});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement(w.a,{noSpacer:!0,noScroll:!0,style:F.container},this.state.loading?n.a.createElement(v.a,{style:[F.centering],color:"#ff8179",size:"large"}):n.a.createElement(S,{users:this.state.users}))}}]),t}(n.a.Component),F=d.a.create({container:{backgroundColor:"whitesmoke"},centering:{alignItems:"center",justifyContent:"center",padding:8,height:"100vh"}}),W=T,I=a(113),R=d.a.create({headerContainer:{borderBottomWidth:d.a.hairlineWidth,borderBottomColor:"#ff4e3f",backgroundColor:"#ff8179"},header:{padding:10,paddingVertical:5,alignItems:"center",flexDirection:"row",minHeight:50},headerCenter:{flex:1,order:2},headerLeft:{order:1,width:80},headerRight:{order:3,width:80},title:{fontSize:19,fontWeight:"600",textAlign:"center",color:"white"}}),M=function(e){e.onBack;var t=e.title;return n.a.createElement(I.a,{style:R.headerContainer},n.a.createElement(u.a,{style:R.header},n.a.createElement(u.a,{style:R.headerCenter},n.a.createElement(x.a,{accessibilityRole:"heading","aria-level":"3",style:R.title},t))))},z=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(u.a,{style:G.appContainer},n.a.createElement(M,{title:"Arihant Details"}),n.a.createElement(W,null))}}]),t}(n.a.Component),G=d.a.create({appContainer:{flex:1}});h.a.registerComponent("App",function(){return z});var J=z;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e){e.exports={a:[{name:{title:"Mrs",first:"Ambika",last:""},service:"Cook",email:"no Email Details available",phone:"+91 73585 32866",picture:{large:"https://randomuser.me/api/portraits/lego/8.jpg",medium:"https://randomuser.me/api/portraits/med/lego/8.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/lego/8.jpg"}},{name:{title:"Mrs",first:"Owner",last:""},service:"Water Can Service",email:"no Email Details Found",phone:"+91 89394 47974",picture:{large:"https://randomuser.me/api/portraits/lego/2.jpg",medium:"https://randomuser.me/api/portraits/med/lego/2.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/lego/2.jpg"}},{name:{title:"Mr",first:"Bhaiya",last:""},service:"Water Can & Cleaning services",email:"no Email Details Found",phone:"+91 90927 75224",picture:{large:"https://randomuser.me/api/portraits/lego/5.jpg",medium:"https://randomuser.me/api/portraits/med/lego/5.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/lego/5.jpg"}},{name:{title:"",first:"Office",last:""},service:"Arihant Escapade",email:"no Email Details Found",phone:"044 4333 1029",picture:{large:"https://randomuser.me/api/portraits/lego/0.jpg",medium:"https://randomuser.me/api/portraits/med/lego/0.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/lego/0.jpg"}},{name:{title:"",first:"Admin",last:""},service:"Arihant Escapade",email:"no Email Details Found",phone:"+91 93803 33341",picture:{large:"https://randomuser.me/api/portraits/lego/2.jpg",medium:"https://randomuser.me/api/portraits/med/lego/2.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/lego/2.jpg"}},{name:{title:"",first:"Plumber",last:""},service:"Arihant Escapade",email:"no Email Details Found",phone:"+91 99622 27128",picture:{large:"https://randomuser.me/api/portraits/lego/7.jpg",medium:"https://randomuser.me/api/portraits/med/lego/7.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/lego/7.jpg"}},{name:{title:"",first:"Electrician",last:""},service:"Arihant Escapade",email:"no Email Details Found",phone:"+91 99622 27129",picture:{large:"https://randomuser.me/api/portraits/lego/4.jpg",medium:"https://randomuser.me/api/portraits/med/lego/4.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/lego/4.jpg"}},{name:{title:"",first:"Office",last:""},service:"Super Gas",email:"no Email Details Found",phone:"044 2814 0450",picture:{large:"https://randomuser.me/api/portraits/lego/0.jpg",medium:"https://randomuser.me/api/portraits/med/lego/0.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/lego/0.jpg"}},{name:{title:"Mr",first:"Delivery Boy",last:""},service:"Super Gas",email:"no Email Details Found",phone:"+91 90927 20909",picture:{large:"https://randomuser.me/api/portraits/lego/5.jpg",medium:"https://randomuser.me/api/portraits/med/lego/5.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/lego/5.jpg"}},{name:{title:"",first:"usename: 0926501250",last:""},service:"TNEB",email:"",phone:"password: tneb1234567890",picture:{large:"https://randomuser.me/api/portraits/lego/1.jpg",medium:"https://randomuser.me/api/portraits/med/lego/1.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/lego/1.jpg"}}]}},93:function(e,t,a){e.exports=a(104)},98:function(e,t,a){}},[[93,2,1]]]);
//# sourceMappingURL=main.6ca6965a.chunk.js.map