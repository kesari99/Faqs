(this["webpackJsonpfaqs-app"]=this["webpackJsonpfaqs-app"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n=s(2),i=s.n(n),a=s(4),r=s.n(a),c=s(5),o=s(7),l=s(6),u=s(8),d=(s(13),s(0)),h=function(e){function t(){var e;Object(c.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=Object(l.a)(this,t,[].concat(n))).state={isActive:!1},e.renderAnswer=function(){var t=e.props.faqDetails.answerText;return e.state.isActive?Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{className:"horizontal-line"}),Object(d.jsx)("p",{className:"answer",children:t})]}):null},e.onToggleIsActive=function(){e.setState((function(e){return{isActive:!e.isActive}}))},e.renderActiveImage=function(){var t=e.state.isActive,s=t?"https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png":"https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png",n=t?"minus":"plus";return Object(d.jsx)("button",{className:"button",type:"button",onClick:e.onToggleIsActive,children:Object(d.jsx)("img",{className:"image",src:s,alt:n})})},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.faqDetails.questionText;return Object(d.jsxs)("li",{className:"faq-item",children:[Object(d.jsxs)("div",{className:"question-container",children:[Object(d.jsx)("h1",{className:"question",children:e}),this.renderActiveImage()]}),this.renderAnswer()]})}}])}(n.Component),j=h,b=(s(15),function(e){var t=e.faqsList;return Object(d.jsx)("div",{className:"app-container",children:Object(d.jsxs)("div",{className:"faqs-container",children:[Object(d.jsx)("h1",{className:"heading",children:"FAQs"}),Object(d.jsx)("ul",{className:"faqs-list",children:t.map((function(e){return Object(d.jsx)(j,{faqDetails:e},e.id)}))})]})})}),f=(s(16),[{id:0,questionText:"What is IRC?",answerText:"IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills."},{id:1,questionText:"What is the medium of instruction?",answerText:"The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon."},{id:2,questionText:"Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?",answerText:"Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information."},{id:3,questionText:"How will my doubts be cleared? What is the mechanism?",answerText:"You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students."}]),m=function(){return Object(d.jsx)(b,{faqsList:f})};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.031cf2ca.chunk.js.map