(this["webpackJsonpmodule-react-02-t2"]=this["webpackJsonpmodule-react-02-t2"]||[]).push([[0],{12:function(t,e,n){t.exports=n(23)},21:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),l=n(11),s=n(1),i=n(2),u=n(4),m=n(3),f=n(8),h=n(5),p=n.n(h),d=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",tel:""},t.changeInputField=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.submitForm=function(e){e.preventDefault(),t.props.onAddContacts(t.state.name,t.state.tel),e.target.reset(),t.setState({name:"",tel:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.submitForm,autoComplete:"off",className:p.a.contactForm},c.a.createElement("div",{className:p.a.wrapLabels},c.a.createElement("label",null,"Name",c.a.createElement("input",{type:"text",onChange:this.changeInputField,name:"name",required:!0,value:this.state.name})),c.a.createElement("label",null,"Number",c.a.createElement("input",{type:"tel",onChange:this.changeInputField,name:"tel",required:!0,pattern:"[0-9]{5,10}",title:"\u043e\u0442 5 \u0434\u043e 10 \u0446\u0438\u0444\u0440",value:this.state.tel}))),c.a.createElement("button",{type:"submit"},"Add Contact"))}}]),n}(a.Component);function v(t){var e=t.name,n=t.phone,a=t.onRemove;return c.a.createElement("li",{className:"listItem"},c.a.createElement("p",{className:"contactInfo"},e,": ",n),c.a.createElement("button",{onClick:a,type:"button"}," remove "))}var b=n(9),C=n.n(b);function E(t){var e=t.listData,n=t.removeContact;return console.log(e,"listData"),c.a.createElement("ul",{className:C.a.contactList},e.map((function(t){var e=t.id,a=t.name,r=t.phone;return c.a.createElement(v,{key:e,name:a,phone:r,onRemove:function(){return n(e)}})})))}var g=n(10);function F(t){var e=t.onSetFilter;return c.a.createElement("label",null,"Find contact by name",c.a.createElement("input",{type:"text",onChange:function(t){return e(t.target.value)}}))}function y(t){var e=t.children;return c.a.createElement("section",null,e)}var j=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContacts=function(e,n){t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[{name:e,phone:n,id:Object(g.uuid)()}])}})),console.log(t.state)},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.setFilterContact=function(e){t.setState({filter:e})},t.showFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(i.a)(n,[{key:"getContactData",value:function(){return this.state.contacts}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(d,{onAddContacts:this.addContacts})),this.state.contacts.length>=1&&c.a.createElement(y,null,c.a.createElement("h2",null,"Contacts"),this.state.contacts.length>1&&c.a.createElement(F,{onSetFilter:this.setFilterContact}),c.a.createElement(E,{listData:this.showFilteredContacts(),removeContact:this.removeContact})))}}]),n}(a.Component);n(21);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root"))},5:function(t,e,n){t.exports={contactForm:"CreateContactsForm_contactForm__3xeSg",wrapLabels:"CreateContactsForm_wrapLabels__1XY_o"}},9:function(t,e,n){t.exports={contactList:"ContactList_contactList__1Ri-j"}}},[[12,1,2]]]);
//# sourceMappingURL=main.434e63fa.chunk.js.map