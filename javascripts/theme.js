const projIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" style="fill: #44546f"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707-1.414-1.414z"></path></svg>';
const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" style="fill: #44546f;"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>';
const leftIcon = '<div id="toggle-left" class="toggle-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: inherit"><path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path></svg></div>';
const RightIcon = '<div id="toggle-right" class="toggle-icon" style="display: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: inherit"><path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path></svg></div>';
const erpmineMenus = [
  {
    key: 'wkdashboard', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 576 512" style="fill: #44546f;"><path d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"/></svg>'
  },{
    key: 'wktime', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 576 512" style="fill: #44546f;"><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>'
  },{
    key: 'wkattendance', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 640 512" style="fill: #44546f;"><path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"/></svg>'
  },{
    key: 'wklead', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 640 512" style="fill: #44546f;"><path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160h44.8c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V348.3c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6V464c0 26.5-21.5 48-48 48H496c-26.5 0-48-21.5-48-48V391.2l47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240v32h96V240c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V336H272v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z"/></svg>'
  },{
    key: 'wkinvoice', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 576 512" style="fill: #44546f;"><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zM272 192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zM164 152v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20V345.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z"/></svg>'
  },{
    key: 'wkgltransaction', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 448 512" style="fill: #44546f;"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>'
  },{
    key: 'wkrfq', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 384 512" style="fill: #44546f;"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm0 32v64H288V256H96zM240 416h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>'
  },{
    key: 'wksurvey', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="20"  viewBox="0 0 448 512" style="fill: #44546f;"><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>'
  },,{
    key: 'wkproduct', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 576 512" style="fill: #44546f;"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>'
  },{
    key: 'wkreport', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style="fill: #44546f;"><path d="m20 8-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9 19H7v-9h2v9zm4 0h-2v-6h2v6zm4 0h-2v-3h2v3zM14 9h-1V4l5 5h-4z"></path></svg>'
  },{
    key: 'wkcrmenumeration', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 24 24" style="fill: #44546f;"><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>'
  }
];

const projMenusIcons = [
  {
    key: 'projects', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" style="fill: #44546f"><path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"/></svg>'
  },{
    key: 'news', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" style="fill: #44546f"><path d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>'
  },{
    key: 'gantt', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" style="fill: #44546f"><path d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zm96 64H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm160 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>'
  },{
    key: 'calendar', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" style="fill: #44546f"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"/></svg>'
  },{
    key: 'time-entries', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" style="fill: #44546f"><path d="M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32 97.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288v54.7c-28.3 12.3-48 40.5-48 73.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V288H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H544V169.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3V224H160V169.3zM488 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM320 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>'
  },{
    key: 'issues', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" style="fill: #44546f"><path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>'
  },{
    key: 'documents', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512" style="fill: #44546f"><path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"/></svg>'
  },{
    key: 'overview', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #44546f"><path d="M4.626 8.878a7.937 7.937 0 0 1 1.71-2.541 7.92 7.92 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.49 2.49 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059-1.19.5-2.26 1.22-3.18 2.139A9.98 9.98 0 0 0 2 12h2c0-1.086.211-2.136.626-3.122zm14.747 6.244c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.973 9.973 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538c2.502 0 4.538-2.036 4.538-4.538S14.502 7.462 12 7.462z"></path></svg>'
  },{
    key: 'files', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" style="fill: #44546f"><path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v96V384c0 35.3 28.7 64 64 64H256V384H64V160H256V96H64V32zM288 192c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4L409.4 9.4c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V192zm0 288c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V480z"/></svg>'
  },{
    key: 'wkskill', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" style="fill: #44546f"><path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"/></svg>'
  },{
    key: 'wkaccountproject', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" style="fill: #44546f;"><path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160h44.8c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V348.3c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6V464c0 26.5-21.5 48-48 48H496c-26.5 0-48-21.5-48-48V391.2l47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240v32h96V240c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V336H272v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z"/></svg>'
  },{
    key: 'wiki', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" style="fill: #44546f;"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>'
  },{
    key: 'activity', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" style="fill: #44546f;"><path d="M360 72a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zM144 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM496 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM200 313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-36.3-67.5c1.7-1.7 3.2-3.6 4.3-5.8L264 217.5V272c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V217.5l26.9 49.9c1.2 2.2 2.6 4.1 4.3 5.8l-36.3 67.5c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L440 313.5V352c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3H486.2c-16.3 0-31.9 4.5-45.4 12.6l-33.6-62.3c-15.3-28.5-45.1-46.3-77.5-46.3H310.2c-32.4 0-62.1 17.8-77.5 46.3l-33.6 62.3c-13.5-8.1-29.1-12.6-45.4-12.6H134.2c-32.4 0-62.1 17.8-77.5 46.3L18.9 340.6c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L88 313.5V352c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V313.5z"/></svg>'
  },{
    key: 'settings', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #44546f;"><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>'
  }
];

// Other Top Menu Icons
const topMenus = {
  defaultMenuSVG: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #44546f"><path d="M4.626 8.878a7.937 7.937 0 0 1 1.71-2.541 7.92 7.92 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.49 2.49 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059-1.19.5-2.26 1.22-3.18 2.139A9.98 9.98 0 0 0 2 12h2c0-1.086.211-2.136.626-3.122zm14.747 6.244c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.973 9.973 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538c2.502 0 4.538-2.036 4.538-4.538S14.502 7.462 12 7.462z"></path></svg>',
  timerStartIcon: '<svg width="29px" height="29px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#90c93e"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 2.75C9.25 2.33579 9.58579 2 10 2H14C14.4142 2 14.75 2.33579 14.75 2.75C14.75 3.16421 14.4142 3.5 14 3.5H10C9.58579 3.5 9.25 3.16421 9.25 2.75Z" fill="#90c93e"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M21 13.75C21 18.7206 16.9706 22.75 12 22.75C7.02944 22.75 3 18.7206 3 13.75C3 8.77944 7.02944 4.75 12 4.75C16.9706 4.75 21 8.77944 21 13.75ZM13.0261 11.0249C12.7888 10.8583 12.5201 10.686 12.2419 10.5168C11.1695 9.86466 10.6333 9.53859 10.1524 9.8996C9.6715 10.2606 9.62779 11.0164 9.54038 12.5278C9.51566 12.9553 9.5 13.3743 9.5 13.75C9.5 14.1257 9.51566 14.5447 9.54038 14.9722C9.62779 16.4836 9.6715 17.2394 10.1524 17.6004C10.6333 17.9614 11.1695 17.6353 12.2419 16.9832C12.5201 16.814 12.7888 16.6417 13.0261 16.4751C13.2966 16.2852 13.5909 16.0573 13.8876 15.8152C14.9625 14.9383 15.5 14.4999 15.5 13.75C15.5 13.0001 14.9625 12.5617 13.8876 11.6848C13.5909 11.4427 13.2966 11.2148 13.0261 11.0249Z" fill="#90c93e"></path> </g></svg>',
  timerStopIcon: '<svg width="29px" height="29px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#cc0101"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M21 13.75C21 18.7206 16.9706 22.75 12 22.75C7.02944 22.75 3 18.7206 3 13.75C3 8.77944 7.02944 4.75 12 4.75C16.9706 4.75 21 8.77944 21 13.75ZM11 16.25V11.25C11 10.7841 11 10.5511 10.9239 10.3673C10.8224 10.1223 10.6277 9.92761 10.3827 9.82612C10.1989 9.75 9.96594 9.75 9.5 9.75C9.03406 9.75 8.80109 9.75 8.61732 9.82612C8.37229 9.92761 8.17761 10.1223 8.07612 10.3673C8 10.5511 8 10.7841 8 11.25V16.25C8 16.7159 8 16.9489 8.07612 17.1327C8.17761 17.3777 8.37229 17.5724 8.61732 17.6739C8.80109 17.75 9.03406 17.75 9.5 17.75C9.96594 17.75 10.1989 17.75 10.3827 17.6739C10.6277 17.5724 10.8224 17.3777 10.9239 17.1327C11 16.9489 11 16.7159 11 16.25ZM16 16.25V11.25C16 10.7841 16 10.5511 15.9239 10.3673C15.8224 10.1223 15.6277 9.92761 15.3827 9.82612C15.1989 9.75 14.9659 9.75 14.5 9.75C14.0341 9.75 13.8011 9.75 13.6173 9.82612C13.3723 9.92761 13.1776 10.1223 13.0761 10.3673C13 10.5511 13 10.7841 13 11.25V16.25C13 16.7159 13 16.9489 13.0761 17.1327C13.1776 17.3777 13.3723 17.5724 13.6173 17.6739C13.8011 17.75 14.0341 17.75 14.5 17.75C14.9659 17.75 15.1989 17.75 15.3827 17.6739C15.6277 17.5724 15.8224 17.3777 15.9239 17.1327C16 16.9489 16 16.7159 16 16.25Z" fill="#cc0101"></path> <path d="M10 2C9.58579 2 9.25 2.33579 9.25 2.75C9.25 3.16421 9.58579 3.5 10 3.5H14C14.4142 3.5 14.75 3.16421 14.75 2.75C14.75 2.33579 14.4142 2 14 2H10Z" fill="#cc0101"></path> </g></svg>',
  issueStartIcon: '<svg fill="#90c93e" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 491.50 491.50" xml:space="preserve" stroke="#90c93e" stroke-width="0.004915"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.983"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M348.1,245.7c-67.8,0-122.9,55.1-122.9,122.9s55.1,122.9,122.9,122.9S471,436.4,471,368.6S415.9,245.7,348.1,245.7z M403.5,362.6l-41,41c-4,4-9.2,6-14.5,6c-5.2,0-10.5-2-14.5-6L313,383.1c-8-8-8-21,0-29s21-8,29,0l6,6l26.5-26.5c8-8,21-8,29,0 C411.5,341.7,411.5,354.6,403.5,362.6z"></path> </g> </g> <g> <g> <path d="M385.3,41h-57.7v-9.8c0-17.2-14-31.2-31.2-31.2H154c-17.2,0-31.2,14-31.2,31.2v9.7H65.2c-24.7,0-44.7,20.1-44.7,44.7 v361.1c0,24.7,20.1,44.7,44.7,44.7h174.9c-34.2-29.9-55.8-73.8-55.8-122.8h-81.9c-11.3,0-20.5-9.2-20.5-20.5s9.2-20.5,20.5-20.5 h81.9c1.8,0,3.4,0.6,5.1,1c3.8-14.9,9.5-29,17-42h-83.6c-11.3,0-20.5-9.2-20.5-20.5s9.2-20.5,20.5-20.5h102.4 c4.1,0,7.7,1.5,10.9,3.6c29.3-27.5,68.6-44.6,112-44.6c29.9,0,57.8,8.2,81.9,22.2V85.7C430,61,409.9,41,385.3,41z M163.8,184.3 h-41c-11.3,0-20.5-9.2-20.5-20.5c0-11.3,9.2-20.5,20.5-20.5h41c11.3,0,20.5,9.2,20.5,20.5C184.3,175.1,175.1,184.3,163.8,184.3z M163.8,81.9v-41h122.9v41H163.8z M327.6,184.3h-81.9c-11.3,0-20.5-9.2-20.5-20.5c0-11.3,9.2-20.5,20.5-20.5h81.9 c11.3,0,20.5,9.2,20.5,20.5C348.1,175.1,338.9,184.3,327.6,184.3z"></path> </g> </g> </g></svg>',
  issueStopIcon: '<svg fill="#cc0101" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 491.50 491.50" xml:space="preserve" stroke="#cc0101" stroke-width="0.004915"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.983"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M348.1,245.7c-67.8,0-122.9,55.1-122.9,122.9s55.1,122.9,122.9,122.9S471,436.4,471,368.6S415.9,245.7,348.1,245.7z M403.5,362.6l-41,41c-4,4-9.2,6-14.5,6c-5.2,0-10.5-2-14.5-6L313,383.1c-8-8-8-21,0-29s21-8,29,0l6,6l26.5-26.5c8-8,21-8,29,0 C411.5,341.7,411.5,354.6,403.5,362.6z"></path> </g> </g> <g> <g> <path d="M385.3,41h-57.7v-9.8c0-17.2-14-31.2-31.2-31.2H154c-17.2,0-31.2,14-31.2,31.2v9.7H65.2c-24.7,0-44.7,20.1-44.7,44.7 v361.1c0,24.7,20.1,44.7,44.7,44.7h174.9c-34.2-29.9-55.8-73.8-55.8-122.8h-81.9c-11.3,0-20.5-9.2-20.5-20.5s9.2-20.5,20.5-20.5 h81.9c1.8,0,3.4,0.6,5.1,1c3.8-14.9,9.5-29,17-42h-83.6c-11.3,0-20.5-9.2-20.5-20.5s9.2-20.5,20.5-20.5h102.4 c4.1,0,7.7,1.5,10.9,3.6c29.3-27.5,68.6-44.6,112-44.6c29.9,0,57.8,8.2,81.9,22.2V85.7C430,61,409.9,41,385.3,41z M163.8,184.3 h-41c-11.3,0-20.5-9.2-20.5-20.5c0-11.3,9.2-20.5,20.5-20.5h41c11.3,0,20.5,9.2,20.5,20.5C184.3,175.1,175.1,184.3,163.8,184.3z M163.8,81.9v-41h122.9v41H163.8z M327.6,184.3h-81.9c-11.3,0-20.5-9.2-20.5-20.5c0-11.3,9.2-20.5,20.5-20.5h81.9 c11.3,0,20.5,9.2,20.5,20.5C348.1,175.1,338.9,184.3,327.6,184.3z"></path></g></g></g></svg>',
  notifIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px" viewBox="0 0 448 512" style="fill: #44546f"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>',
  closeIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 384 512" style="fill: #5d5d5d"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>'
};

const colorCodeColors = [
  { "background": "#3498DB", "color": "#FFFFFF" },
  { "background": "#E74C3C", "color": "#FFFFFF" },
  { "background": "#2ECC71", "color": "#000000" },
  { "background": "#9B59B6", "color": "#FFFFFF" },
  { "background": "#F1C40F", "color": "#000000" },
  { "background": "#1ABC9C", "color": "#000000" },
  { "background": "#E67E22", "color": "#FFFFFF" },
  { "background": "#34495E", "color": "#FFFFFF" },
  { "background": "#7F8C8D", "color": "#FFFFFF" },
  { "background": "#C0392B", "color": "#FFFFFF" },
  { "background": "#2980B9", "color": "#FFFFFF" },
  { "background": "#27AE60", "color": "#FFFFFF" },
  { "background": "#8E44AD", "color": "#FFFFFF" },
  { "background": "#F39C12", "color": "#000000" },
  { "background": "#D35400", "color": "#FFFFFF" },
  { "background": "#2C3E50", "color": "#FFFFFF" },
  { "background": "#BDC3C7", "color": "#000000" },
  { "background": "#A93226", "color": "#FFFFFF" },
  { "background": "#1F618D", "color": "#FFFFFF" },
  { "background": "#196F3D", "color": "#FFFFFF" },
  { "background": "#6C3483", "color": "#FFFFFF" },
  { "background": "#B7950B", "color": "#FFFFFF" },
  { "background": "#117864", "color": "#FFFFFF" },
  { "background": "#AF601A", "color": "#FFFFFF" },
  { "background": "#17202A", "color": "#FFFFFF" },
  { "background": "#7B7D7D", "color": "#FFFFFF" },
  { "background": "#641E16", "color": "#FFFFFF" },
  { "background": "#154360", "color": "#FFFFFF" },
  { "background": "#145A32", "color": "#FFFFFF" },
  { "background": "#512E5F", "color": "#FFFFFF" },
  { "background": "#7D6608", "color": "#FFFFFF" },
  { "background": "#1C2833", "color": "#FFFFFF" },
  { "background": "#566573", "color": "#FFFFFF" },
  { "background": "#7B241C", "color": "#FFFFFF" },
  { "background": "#2471A3", "color": "#FFFFFF" },
  { "background": "#52BE80", "color": "#000000" },
  { "background": "#BB8FCE", "color": "#000000" },
  { "background": "#F7DC6F", "color": "#000000" },
  { "background": "#76D7C4", "color": "#000000" },
  { "background": "#F1948A", "color": "#000000" },
  { "background": "#5D6D7E", "color": "#FFFFFF" },
  { "background": "#212F3C", "color": "#FFFFFF" },
  { "background": "#6E2C00", "color": "#FFFFFF" },
  { "background": "#4ECDC4", "color": "#000000" },
  { "background": "#95A5A6", "color": "#000000" },
  { "background": "#4A235A", "color": "#FFFFFF" },
  { "background": "#4D5656", "color": "#FFFFFF" },
  { "background": "#117A65", "color": "#FFFFFF" },
  { "background": "#1A5276", "color": "#FFFFFF" },
  { "background": "#935116", "color": "#FFFFFF" },
];

$(document).ready(function(){

  // Dynamically load Semantic UI CSS
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.css';
  document.head.appendChild(cssLink);

  // Dynamically load Semantic UI JS
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.js';
  script.type = 'text/javascript';
  script.onload = function () {
    // Run Semantic UI dropdown initialization after the script is fully loaded
    $('select').each(function () {
      const $select = $(this);
      if(
        !$select.hasClass('ui dropdown')
        && !$(this).hasClass("select2-hidden-accessible")
        && (
          $(this).is(':visible')
          || ($select.parents('.tab-content').length > 0)
          || $select.parents('.ui-widget').length > 0
        ) // For settings tab content && Jquery Popup dropdowns
        && $select.prop('id') != 'available_c'
        && $select.prop('id') != 'selected_c'
        && !(this.name.includes('column') && $select.prop('multiple')) // To skip Redmine multi selection
        && !$(this).hasClass("multi-row")
      ){
        $select.addClass('ui dropdown');
      }
    });

    $('.ui.dropdown').dropdown({ placeholder: false });

    observeDD();
  };
  script.onerror = function () {
      console.error('Failed to load Semantic UI.');
  };
  document.head.appendChild(script);

  function observeDD() {
    // Load the Semantic UI if new dropdown rendered
    const targetNode = $('body')[0];
    const config = { childList: true, subtree: true, attributes: true, attributeFilter: ['disabled', 'multiple', 'style', 'class'] };
    const callback = function (mutationsList) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          $(mutation.addedNodes).each(function () {
            initDropdownUI(this);

            //TODO: Need to add this change to the removed nodes also
            // Update the UI dropdown when options are updated
            const $dropdown = $(this).parent();
            if ($(this).is('option') && $dropdown.hasClass('ui dropdown')) {
              const $parent = $dropdown.parent();
              if ($parent.length) {
                $dropdown.insertBefore($parent);
                $parent.remove();
                $dropdown.dropdown({ placeholder: false });
              }
            }
          });
        }

        // Check and update the UI dropdown based on DD attributes
        const $target = $(mutation.target);
        const $parent = $target.parent();
        if ($target.is('select') && mutation.type == 'attributes' && mutation.attributeName == 'disabled') {
          if ($target.prop('disabled')) {
            $parent.addClass('disabled');
          } else {
            $parent.removeClass('disabled');
          }
        }
        if ($target.is('option') && mutation.type == 'attributes' && mutation.attributeName == 'disabled') {
          const $select = $target.parents('select');
          const $div = $select.parent();
          $select.insertBefore($div);
          $div.remove();
          $select.dropdown({ placeholder: false });
        }
        if ($target.is('select') && mutation.type == 'attributes' && mutation.attributeName == 'multiple') {
          if ($target.prop('multiple')) {
            $target.insertBefore($parent);
            $parent.remove();
            $target.dropdown({ placeholder: false });
          } else {
            $target.dropdown('clear');
            $parent.removeClass('multiple');
          }
        }
        // Set DD UI for hidden dropdown when visible
        if(mutation.type == 'attributes'){
          initDropdownUI($target);
        }
      }
    };
    const ddObserver = new MutationObserver(callback);
    ddObserver.observe(targetNode, config);
  }

    $('#content').on('click', '.toggle-multiselect', function() {
      toggleMultiSelect($(this).siblings().find('select'));
    });

  // hide + menu on project menus
  if ($('#new-object').length > 0) $('#new-object').parent().hide();
  
  const scrSize = window.matchMedia('(min-width: 900px)');
  if (scrSize.matches) {
    // Top menu setup
    $('#top-menu').after('<div id="topmenu-nav"></div>');
    $('#topmenu-nav').append($('#top-menu').html());
    $('#top-menu').empty();
    $('#topmenu-nav').appendTo('#top-menu');
    $('#quick-search').appendTo('#top-menu');
    const ele = $('#quick-search label a');
    $('#quick-search label').empty();
    $(ele).appendTo('#quick-search label');
    const srch = '<div class = expandSearch ></div>';
    $('#quick-search #q').before(srch).prependTo('.expandSearch');
    $("#project-jump .drdn-trigger").prop("title", "Jump to project");
    $("#userprofile").prop("title", "User profile");
    $("#loggedas").prependTo("#account");
    $("#account").appendTo("#top-menu");
    $('#project-jump .drdn-trigger').html(projIcon);

    // For user profile Setup
    if($("#loggedas").length > 0) {
      var loggedasEle = $.parseHTML($("#loggedas").html());
      $("#loggedas").remove();
      $("#account ul").prepend('<li></li>');
      $("#account ul li").first().html(loggedasEle[1]);
    }
    var account = ' <div id="userprofile"><div class="profileicon account"></div>';
    account += '<div id="profilemenu" style="display: none;"></div></div>';
    $("#quick-search").append(account);
    $("#account ul").prop("id", "profilelist").appendTo("#profilemenu");
    $("#account").remove();
    $('#userprofile').appendTo('#quick-search');

    // For user profile popup setup
    $(".account").click(function() {
      var X = this.id;
      if(X == 1) {
        $("#profilemenu").hide();
        $(this).prop('id', '0');
      }
      else {
        $("#profilemenu").show();
        $(this).prop('id', '1');
      }
    });
    $("#profilemenu, .account").mouseup(function() {
      return false
    });
    $(document).mouseup(function() {
      $("#profilemenu").hide();
      $(".account").prop('id', '');
    });

    // The selected class should be added to the menu so that it matches the current page
    const projMenus = ['/activity', '/issues', '/time_entries', '/calendar', '/news', '/gantt'];
    const crLink = new URL(window.location.href);
    if(crLink.pathname.length > 5 && crLink.pathname.startsWith('/wk')){
      $('#topmenu-nav .wkdashboard').addClass('selected');
    }
    else if(crLink.pathname.startsWith('/projects') || projMenus.includes(crLink.pathname)){
      $('#topmenu-nav .projects').addClass('selected');
    }
    $('#topmenu-nav li a, #main-menu li a').each(function(){
      const link = new URL($(this).prop('href') || '');
      if (crLink.pathname == link.pathname && crLink.search == link.search) {
        $(this).addClass('selected');
      }
    });
    // Style selected menu
    $('#new-object, .menu-children a').removeClass('selected');
    $('.selected').each(function(){
      $(this).parents('li').addClass('highlighted');
    });

    // Add Toggle Icon for sideNav
    $('#main').before($('#main-menu'));
    $('<div id="left-nav"></div>').appendTo('#wrapper');
    if($('#main-menu').length == 0){
      $('<div id="main-menu" class="tabs"></div>').appendTo('#left-nav');
    }
    $('#main-menu').appendTo('#left-nav');
    $('html').append(leftIcon);
    $('html').append(RightIcon);

    // Toggle Icon left click action
    if(sessionStorage.getItem("showSideNav") == 'true'){
      setNavLeft();
    }
    $('#toggle-left').click(function() {
      setNavLeft();
    });

    // Toggle Icon right click action
    $('#toggle-right').click(function() {
      setNavRight();
    });

    // Add hover class to sideNav
    $('#left-nav').hover(function() {
      $('#left-nav.sidenav-left').each(function() {
        $('#left-nav').addClass('hover');
        $('.toggle-icon').addClass('hover');
        $('#main-menu').show();
      });
    },function() {
      $('#left-nav.sidenav-left').each(function() {
        $('#left-nav').removeClass('hover');
        $('.toggle-icon').removeClass('hover');
        $('#main-menu').hide();
      });
    });

    // Hide SideNav if SideNav empty
    if($('#main-menu').children().length > 1 || $('#sidebar-wrapper').children().length > 0) {
      $('#main').addClass('sidebar');
    }
    else{
      $('#left-nav').hide();
      $('.toggle-icon').hide();
    }

    //Add divider line between menus
    if($('#main-menu').children().length > 1 && $('#sidebar-wrapper').children().length > 0){
      $('#sidebar').addClass('border-top');
    }

    // Move Right sidebar to left sidebar within main-menu
    $('#sidebar').appendTo('#main-menu');
    $('.tabs-buttons').remove();
    const link = $('a.icon-only.icon-clear-query').prop('href');

    /* TODO: Need to add close icon for some sidebar menus */
    // $('a.icon-only.icon-clear-query').before('<a class="close-icon" href="'+link+'"></a>');
    // $('.query.selected').parents('li').addClass('row');
    $('a.icon-only.icon-clear-query').remove();

    // Adding ERPmine menu Icons
    erpmineMenus.map(({ key, svg })=>{
      $('#main-menu .'+key).before(svg);
    });

    // Adding Project menu Icons
    projMenusIcons.map(({ key, svg })=>{
      $('#main-menu .'+key).not('#admin-menu .'+key).before(svg);
    });

    //Adding Admin menu Icons
    // adminMenusIcons.map(({ key, svg })=>{
    //   $('#admin-menu .'+key).before(svg);
    // });

    //Adding Default menu Icon
    $('#main-menu ul a').each(function(){
      const svg = $(this).parents('li').find('svg');
      const parent = $(this).parents('#sidebar');
      if(svg.length == 0 && parent.length == 0 && $(this).prop('id') != 'new-object' && $(this).parents('ul').prop('class') != 'menu-children'){
        $(this).before(topMenus.defaultMenuSVG);
      }
    });

    $('#main-menu a.selected').each(function(){
      $(this).parents('li').each(function(){
        $(this).find('svg').css({
          'fill': '#0c66e4'
        });
      });
    });

    // Add Redmine Logo
    $(".home").parents('ul').prepend( '<li class="redmine-logo"><a id="redmine-home" href="/"><svg></svg></a></li>');
    $('.fa.fa-bell').parents('span').append(topMenus.notifIcon);
    $('.fa.fa-bell').remove();

    //Add Timer Icon
    $('#startdiv').html('<span id="clockin" style="display: '+ $('#clockin').css('display') +'">'+topMenus.timerStartIcon+'</span>');
    $('#enddiv').html('<span id="clockout" style="display: '+ $('#clockout').css('display') +'">'+topMenus.timerStopIcon+'</span>');

    //Add Issue starter Icon
    $('#issueImg img').hide();
    setIssueStartIcon();

    // Observe issue starter img prop changes
    var imgObserver = new MutationObserver(function(mutationsList, observer) {
      for(let mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          setIssueStartIcon();
        }
      }
    });
    if($('#issueImg img') && $('#issueImg img')[0]) imgObserver.observe($('#issueImg img')[0], { attributes: true });

    //Add header after topmenu nav
    $('#topmenu-nav').after($('#header'));
  }

  $('.help').parents("li").remove();

  //Redmine Right click list options
  setTimeout(listClickPosition, 200);

  // //accordion section
  // if($("#accordion").length > 0) $("#accordion").accordion();

    // Select all buttons and input type="submit"
    $('input[type="submit"], button[type="button"]').each(function() {
      $(this).addClass($(this).val().replace(/\s+/g, '_').toLowerCase() || $(this).text().replace(/\s+/g, '_').toLowerCase());
    });


  //For Redmine columns colorcode
  $('td.status').each(function(){
    const status = $(this).parent('tr').prop('class').split(' ').filter(val => val.includes('status-'))[0];
    $(this).addClass('colorcode-bg-setup col-'+status);
  });
  // List page colorcode
  setColorcode();

  //Dashboard graph width
  if(window.location.pathname == '/wkdashboard') {
    setInterval(()=>{
      $('#graph').children('div').each(function(){
        $(this).addClass("width33");
      });
    }, 150);
  }

  //Hide Top menu search button
  $('.expandSearch').siblings('label').hide();
  //Add placeholder for Search
  $('.expandSearch #q').prop('placeholder', 'Search');

  //Add Other Redmine Icons
  updateOtherIcons();

  // Observe img changes
  var imgObserver = new MutationObserver(function(mutationsList, observer) {
    for(let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        updateOtherIcons();
      }
    }
  });
  if($('#accordion') && $('#accordion')[0]) imgObserver.observe($('#accordion')[0], { childList: true, subtree: true });

  // Observe Time sheet comment img changes
  var tsObserver = new MutationObserver(function(mutationsList, observer) {
    for(let mutation of mutationsList) {
      if (mutation.type === 'attributes') {
        updateOtherIcons();
      }
    }
  });
  observerTSComment(tsObserver);
  $('.icon.icon-time-add').click(function(){
    observerTSComment(tsObserver);
  })

  $('#admin-menu svg').each(function() {
    const $svg = $(this);
    const $anchor = $svg.closest('a');
    if ($anchor.length) {
        $anchor.before($svg);
    }
  });

  // Prevent chevrons icon to add, edit and spent time icon
  const targets = $('a.icon-add svg use, a.icon-time-add svg use, a.icon-edit svg use, a.icon-copy svg use, a.icon-user svg use, a.icon-fav svg use');
  const observer = new MutationObserver((mutationsList, observer) => {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'href') {
        const currentHref = mutation.target.getAttribute('href');
        const originalHref = mutation.oldValue;
        // Only revert if the new value differs from the old value
        if (currentHref !== originalHref) {
          observer.disconnect();
          mutation.target.setAttribute('href', originalHref);
          observer.observe(mutation.target, { attributes: true, attributeOldValue: true });
        }
      }
    });
  });

  targets.each(function () {
    observer.observe(this, { attributes: true, attributeOldValue: true });
  });

  //* Fix for Project Member list */
  if(window.location.pathname.includes('settings/members')) {
    $('.name.icon.icon-user, .name.icon.icon-group').each(function(){
      $(this).prop('class', 'name icon-user');
    })
  }
});

function initDropdownUI($this){
  const $allDDs = $($this).find('select');
  $allDDs.each(function(){
    if($(this).is('select')
      && !$(this).hasClass('ui dropdown')
      && !$(this).hasClass("select2-hidden-accessible")
      && this.id != 'available_c'
      && this.id != 'selected_c'
    ){
      $(this).addClass('ui dropdown');
      $(this).dropdown({ placeholder: false });
    }
  })
}

function observerTSComment(tsObserver){
  $("[id^='custfield_img']").each(function(){
    tsObserver.observe(this, { attributes: true });
  });
}

function listClickPosition(){
  var entered = false, oldLeft = 0;
  if($('#context-menu').length > 0){
    const listClickObserve = new MutationObserver(function(mutationsList, observer) {
      mutationsList.forEach(function(mutation) {
        let entry = false, left = 0;
        if (mutation.type == 'attributes' && $('#context-menu').is(':visible')) {
          entry = true;
          left = parseInt($('#context-menu').css('left'));
          //Update icons in list popup options
          updateOtherIcons();
        }else{
          entry = false;
          entered = false;
        }
        if (entry && (!entered ||oldLeft != left)) {
          entered = true;
          const showSideNav = sessionStorage.getItem("showSideNav") != 'true';
          oldLeft = left-(showSideNav ? 245 : 20);
          correctOptionsPosition();
        }
      });
    });
    if($('#context-menu') && $('#context-menu')[0]) listClickObserve.observe($('#context-menu')[0], { attributes: true });
  }
}

function correctOptionsPosition(){
  const element = $('#context-menu')
  const crLeft = parseInt(element.css('left'));
  const showSideNav = sessionStorage.getItem("showSideNav") != 'true';
  element.css('left', (crLeft-(showSideNav ? 245 : 20)) + 'px');
  const crTop = parseInt(element.css('top'));
  element.css('top', (crTop-55) + 'px');
}

function setIssueStartIcon(){
  const issueSrc = $('#issueImg img').prop('src');
  $('#issueImg svg').remove();
  issueSrc && $('#issueImg').prepend(issueSrc.includes('finish') ? topMenus.issueStopIcon : topMenus.issueStartIcon);
}

function setNavLeft(){
  $('#left-nav').addClass('sidenav-left');
  $('.toggle-icon').addClass('left');
  $('#main').addClass('left');
  $(this).hide();
  $('#main-menu').hide();
  $('#toggle-right').show();
  $('#toggle-left').hide();
  savePosition(true);
}

function setNavRight(){
  $('#left-nav').removeClass('sidenav-left');
  $('.toggle-icon').removeClass('left');
  $('#main').removeClass('left');
  $(this).hide();
  $('#main-menu').show();
  $('#toggle-left').show();
  $('#toggle-right').hide();
  savePosition(false);
}

function savePosition(show=false){
  sessionStorage.setItem("showSideNav", show);
}

function setColorcode(){
  $("td.colorcode-bg-setup").each(function(){
    let status, bgObj={};
    if(this.className.includes('col-status-')){
      const classArr = this.className.split(' ');
      const className = classArr.find(name => name.includes('col-status-'));
      status = className.replace('col-status-','');
      status = parseInt(status) ? parseInt(status) : status;
      if(status){
        if(!Number.isInteger(status)){
          status = Array.from(status).reduce((sum, char) => sum + char.charCodeAt(0), 0);
        }
        status = status >= 50 ? (status % 50) : status;
        bgObj = colorCodeColors[status] || colorCodeColors[49];
        if($(this).html()){
          $(this).html('<div class="colorcode-box-'+status+'">'+$(this).html()+'</div>');
          $('.colorcode-box-'+status).css('background-color', bgObj.background);
          $('.colorcode-box-'+status).css('color', bgObj.color);
        }
      }
    }
  });
}

function updateOtherIcons(){
  $('img').each(function(){
    const path = ((new URL($(this).prop('src'))).pathname).replace(/\/plugin_assets\/redmine_wktime\/images\/|\/images\//g, "");
    if(['delete.png', 'edit.png', 'withoutcommant.png', 'stats.png', 'withcommant.png'].includes(path)){
      let key, parent;
      if(path == 'delete.png')
        key = 'icon-del';
      if(path == 'edit.png')
        key = 'icon-edit';
      if(path == 'withoutcommant.png')
        key = 'icon-list';
      if(path == 'withcommant.png')
        key = 'icon-bg-list';
      if(path == 'stats.png')
        key = 'icon-stats';
      if(['withoutcommant.png', 'withcommant.png'].includes(path) && $(this).parent('a').length == 0){
        $(this).wrap('<span style="margin-left: 5px;"></span>');
        parent = $(this).parent('span');
      }
      else{
        parent = $(this).parent('a');
      }
      $(parent).prop('title', $(this).prop('title'));
      $(this).hide();
    }
  });
}