(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(92)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),d=a(13),c=a.n(d),i=(a(49),a(50),a(4)),l=a(1),s=a(35),o=a(36),p=a(42),u=a(37),b=a(43),m=(a(51),a(19)),O=a.n(m),f=a(5),g={cards:{"card-1":{id:"card-1",content:"Take out the garbage"},"card-2":{id:"card-2",content:"Watch my favorite show"},"card-3":{id:"card-3",content:"Charge my phone"},"card-4":{id:"card-4",content:"Cook dinner"}},lists:{"list-1":{id:"list-1",title:"To do",cardOrder:["card-1","card-2","card-3"]},"list-2":{id:"list-2",title:"In progresss",cardOrder:["card-4"]},"list-3":{id:"list-3",title:"Done",cardOrder:[]}},listOrder:["list-1","list-2","list-3"]},j=function(e){var t=e.card,a=e.index;return n.a.createElement(f.b,{draggableId:t.id,index:a},function(e,a){return n.a.createElement("li",Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,className:a.isDragging?"trello-card is-dragging":"trello-card"}),t.content)})},h=function(e){var t=e.list,a=e.cards,r=e.addCard,d=e.index;return n.a.createElement(f.b,{draggableId:t.id,index:d},function(e){return n.a.createElement("section",Object.assign({className:"trello-list__container"},e.draggableProps,{ref:e.innerRef}),n.a.createElement("div",{className:"trello-list"},n.a.createElement("h2",Object.assign({className:"trello-list__title"},e.dragHandleProps),t.title),n.a.createElement(f.c,{droppableId:t.id,type:"CARD"},function(e){return n.a.createElement("ul",Object.assign({},e.droppableProps,{ref:e.innerRef,className:"trello-card__container"}),function(e){return e.map(function(e,t){return n.a.createElement(j,{key:e.id,card:e,index:t})})}(a),e.placeholder)}),n.a.createElement("div",{className:"trello-list__button",type:"button",onClick:function(){!function(e,t){var a=window.prompt("Please enter the content of new card");a&&t({listId:e.id,cardContent:a})}(t,r)}},n.a.createElement("h3",{className:"button__text"},"+ Add a card"))))})},v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),d=0;d<r;d++)n[d]=arguments[d];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state=g,a.handleAddCard=function(e){var t=a.state,r=t.cards,n=t.lists,d=e.listId,c=e.cardContent,s={id:"card-".concat(O()()),content:c},o=Object(l.a)({},r,Object(i.a)({},s.id,s)),p=Array.from(n[d].cardOrder);p.push(s.id);var u=Object(l.a)({},n[d],{cardOrder:p}),b=Object(l.a)({},a.state,{cards:o,lists:Object(l.a)({},n,Object(i.a)({},d,u))});a.setState(b)},a.handleAddList=function(){var e=a.state,t=e.lists,r=e.listOrder,n=window.prompt("Please enter the title of new list");if(n){var d={id:"list-".concat(O()()),title:n,cardOrder:[]},c=Array.from(r);c.push(d.id);var s=Object(l.a)({},a.state,{lists:Object(l.a)({},t,Object(i.a)({},d.id,d)),listOrder:c});a.setState(s)}},a.onDragEnd=function(e){var t=e.draggableId,r=e.source,n=e.destination,d=e.type,c=a.state,s=c.lists,o=c.listOrder;if(n&&(n.droppableId!==r.droppableId||n.index!==r.index))if("LIST"!==d){var p=s[r.droppableId],u=s[n.droppableId];if(p.id===u.id){var b=Array.from(p.cardOrder);b.splice(r.index,1),b.splice(n.index,0,t);var m=Object(l.a)({},p,{cardOrder:b}),O=Object(l.a)({},a.state,{lists:Object(l.a)({},s,Object(i.a)({},m.id,m))});a.setState(O)}else{var f,g=Array.from(p.cardOrder),j=Array.from(u.cardOrder);g.splice(r.index,1),j.splice(n.index,0,t);var h=Object(l.a)({},p,{cardOrder:g}),v=Object(l.a)({},u,{cardOrder:j}),E=Object(l.a)({},a.state,{lists:Object(l.a)({},s,(f={},Object(i.a)(f,h.id,h),Object(i.a)(f,v.id,v),f))});a.setState(E)}}else{var y=Array.from(o);y.splice(r.index,1),y.splice(n.index,0,t);var x=Object(l.a)({},a.state,{listOrder:y});a.setState(x)}},a}return Object(b.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.cards,r=t.lists,d=t.listOrder;return n.a.createElement(f.a,{onDragEnd:this.onDragEnd},n.a.createElement(f.c,{droppableId:"board",direction:"horizontal",type:"LIST"},function(t){return n.a.createElement("main",Object.assign({className:"trello-board"},t.droppableProps,{ref:t.innerRef}),d.map(function(t,d){var c=r[t],i=c.cardOrder.map(function(e){return a[e]});return n.a.createElement(h,{key:c.id,list:c,cards:i,index:d,addCard:e.handleAddCard})}),t.placeholder,n.a.createElement("section",{className:"trello-list__container trello-list__add-new"},n.a.createElement("div",{className:"trello-list",onClick:e.handleAddList},n.a.createElement("h2",{className:"trello-list__title"},"+ Add another list"))))}))}}]),t}(r.Component);var E=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("nav",null,"App Bar"),n.a.createElement("header",null,"Board Title"),n.a.createElement(v,null))};c.a.render(n.a.createElement(E,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ce8f170a.chunk.js.map