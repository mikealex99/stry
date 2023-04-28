"use strict";(self.webpackChunk_mikealex_tsdx_demo=self.webpackChunk_mikealex_tsdx_demo||[]).push([[463],{"./stories/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExpressButton:()=>ExpressButton,ExpressOutlinedButton:()=>ExpressOutlinedButton,Primary:()=>Primary,Secondary:()=>Secondary,Tertiary:()=>Tertiary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ButtonMat({color,background,size,text,variant,outlineColor,mainColor}){return(0,jsx_runtime.jsx)(Button.Z,{style:{backgroundColor:background||"",color:color||"",borderColor:outlineColor},variant,size,color:mainColor,children:text})}ButtonMat.displayName="ButtonMat";try{ButtonMat.displayName="ButtonMat",ButtonMat.__docgenInfo={description:"",displayName:"ButtonMat",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"any"}},background:{defaultValue:null,description:"",name:"background",required:!0,type:{name:"any"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"any"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"any"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"any"}},outlineColor:{defaultValue:null,description:"",name:"outlineColor",required:!0,type:{name:"any"}},mainColor:{defaultValue:null,description:"",name:"mainColor",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ButtonMat.tsx#ButtonMat"]={docgenInfo:ButtonMat.__docgenInfo,name:"ButtonMat",path:"src/ButtonMat.tsx#ButtonMat"})}catch(__react_docgen_typescript_loader_error){}const Button_stories={title:"ButtonMat",component:ButtonMat,decorators:[__webpack_require__("./node_modules/storybook-addon-designs/esm/index.js").Z6],argTypes:{color:{control:{type:"color",presetColors:["#ff0000","#00ff00","#0000ff","rgba(255, 255, 255, 0)"]}},background:{control:{type:"color",presetColors:["#ff0000","#00ff00","#0000ff","rgba(255, 255, 255, 0)"]}},outlineColor:{control:{type:"color",presetColors:["#ff0000","#00ff00","#0000ff"]}},mainColor:{options:["inherit","primary","secondary","success","error","info","warning"],control:{type:"select"}},size:{options:["small","medium","large"],control:{type:"select"}},variant:{options:["contained","outlined","text"],control:{type:"select"}},text:{control:"text"}}},ExpressButton={args:{text:"ExpresSoft"}},ExpressOutlinedButton={args:{text:"ExpresSoft",color:"black",variant:"outlined"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/nvmBEQ7sz8jRFVzNMnJoaf/Untitled?node-id=1-4&t=FTHnwiq2qYOXGhg5-4"}}},Primary={args:{background:"#ff0",text:"ButtonMat",color:"red"}},Secondary={args:{...Primary.args,text:"😄👍😍💯"}},Tertiary={args:{...Primary.args,text:"📚📕📈🤓"}},__namedExportsOrder=["ExpressButton","ExpressOutlinedButton","Primary","Secondary","Tertiary"];ExpressButton.parameters={...ExpressButton.parameters,docs:{...ExpressButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'ExpresSoft'\n  }\n}",...ExpressButton.parameters?.docs?.source}}},ExpressOutlinedButton.parameters={...ExpressOutlinedButton.parameters,docs:{...ExpressOutlinedButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'ExpresSoft',\n    color: 'black',\n    variant: 'outlined'\n  },\n  parameters: {\n    design: {\n      type: 'figma',\n      url: 'https://www.figma.com/file/nvmBEQ7sz8jRFVzNMnJoaf/Untitled?node-id=1-4&t=FTHnwiq2qYOXGhg5-4'\n    }\n  }\n}",...ExpressOutlinedButton.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    background: '#ff0',\n    text: 'ButtonMat',\n    color: 'red'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    text: '😄👍😍💯'\n  }\n}",...Secondary.parameters?.docs?.source}}},Tertiary.parameters={...Tertiary.parameters,docs:{...Tertiary.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    text: '📚📕📈🤓'\n  }\n}",...Tertiary.parameters?.docs?.source}}}}}]);