const header = React.createElement("h1",{},"HELLO REACT");

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(header);
const para = React.createElement("div",{id:"main1"},[React.createElement("h1",{id:"main2"},"manasa"),React.createElement("h2",{id:"main3"},"lalitha")]);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(para);