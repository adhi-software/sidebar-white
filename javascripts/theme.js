const projIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" style="fill: #44546f"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707-1.414-1.414z"></path></svg>';
const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" style="fill: #44546f;"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>';
const leftIcon = '<div id="toggle-left" class="toggle-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: inherit"><path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path></svg></div>';
const RightIcon = '<div id="toggle-right" class="toggle-icon" style="display: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: inherit"><path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path></svg></div>';
const erpmineMenus = [
  {
    key: 'wkdashboard', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" style="fill: #44546f;"><path d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"/></svg>'
  },{
    key: 'wktime', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" style="fill: #44546f;"><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>'
  },{
    key: 'wkattendance', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" style="fill: #44546f;"><path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"/></svg>'
  },{
    key: 'wklead', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" style="fill: #44546f;"><path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160h44.8c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V348.3c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6V464c0 26.5-21.5 48-48 48H496c-26.5 0-48-21.5-48-48V391.2l47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240v32h96V240c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V336H272v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z"/></svg>'
  },{
    key: 'wkinvoice', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" style="fill: #44546f;"><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zM272 192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zM164 152v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20V345.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z"/></svg>'
  },{
    key: 'wkgltransaction', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" style="fill: #44546f;"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>'
  },{
    key: 'wkrfq', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512" style="fill: #44546f;"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm0 32v64H288V256H96zM240 416h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>'
  },{
    key: 'wksurvey', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 448 512" style="fill: #44546f;"><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>'
  },{
    key: 'wkproduct', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" style="fill: #44546f;"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>'
  },{
    key: 'wkreport', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #44546f;"><path d="m20 8-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9 19H7v-9h2v9zm4 0h-2v-6h2v6zm4 0h-2v-3h2v3zM14 9h-1V4l5 5h-4z"></path></svg>'
  },{
    key: 'wkcrmenumeration', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #44546f;"><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>'
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

/* --------------------------------------------------------------------------
 * Semantic UI dropdown <-> native <select> display sync
 * -------------------------------------------------------------------------- */
(function () {
  if (typeof $ === 'undefined' || !$.fn || $.fn.erpDropdownValSyncInstalled) {
    return;
  }

  function repaintDropdownLabel(select) {
    if (select.multiple) { return; }
    if (!select.options.length) { return; }     // mid-rebuild — leave the label alone
    const $drop = $(select).parent('.ui.dropdown');
    if (!$drop.length) { return; }              // not themed — nothing to repaint

    const option = select.selectedIndex >= 0 ? select.options[select.selectedIndex] : null;
    const $text = $drop.children('.text').first();
    if ($text.length) {
      // Mirror whatever the <select> now holds. A blank option carries a
      // non-breaking space as its label, which is exactly what Semantic shows
      // for the empty choice (dropdowns here are inited with placeholder:false).
      if (option) {
        $text.removeClass('default').text(option.text);
      } else {
        $text.addClass('default').text('');
      }
    }

    const value = option ? option.value : null;
    $drop.children('.menu').children('.item').each(function(){
      $(this).toggleClass('active selected', $(this).attr('data-value') === value);
    });
  }

  let reconcilePending = false;
  function scheduleReconcile() {
    if (reconcilePending) { return; }
    reconcilePending = true;
    window.requestAnimationFrame(function () {
      reconcilePending = false;
      document.querySelectorAll('.ui.dropdown > select').forEach(repaintDropdownLabel);
    });
  }

  const nativeVal = $.fn.val;
  $.fn.val = function () {
    const result = nativeVal.apply(this, arguments);
    if (arguments.length) {                     // setter only — never the getter
      for (let i = 0; i < this.length; i++) {
        if (this[i] && this[i].nodeName === 'SELECT') {
          scheduleReconcile();
          break;
        }
      }
    }
    return result;
  };

  [[window.HTMLSelectElement, 'value'],
   [window.HTMLSelectElement, 'selectedIndex'],
   [window.HTMLOptionElement, 'selected']].forEach(function (target) {
    const proto = target[0] && target[0].prototype;
    const prop = target[1];
    if (!proto) { return; }
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (!desc || !desc.set || !desc.configurable) { return; }   // leave it alone
    Object.defineProperty(proto, prop, {
      configurable: desc.configurable,
      enumerable: desc.enumerable,
      get: desc.get,
      set: function (v) {
        desc.set.call(this, v);
        scheduleReconcile();
      },
    });
  });

  // Belt and braces for writes that happen through neither jQuery nor a plain
  // property assignment (option nodes swapped wholesale, values restored inside
  // an AJAX handler, a dialog populated just before it opens).
  $(document).ajaxComplete(scheduleReconcile);
  $(document).on('dialogopen', scheduleReconcile);

  $.fn.erpDropdownValSyncInstalled = true;
})();

$(document).ready(function(){

  // Semantic UI (dropdown + transition) is bundled with this theme instead of
  // loaded from a CDN: its JS is appended at the END of this file and its CSS is
  // imported by stylesheets/application.css. Both are available synchronously
  // here (theme.js runs before DOMContentLoaded), so we init dropdowns directly.
  $('select').each(function () {
    const $select = $(this);
    if(
      !$select.hasClass('ui dropdown')
      && !$(this).hasClass("select2-hidden-accessible")
      && !$(this).hasClass("productItemsDD") // owned by invoice.js's select2() init, not Semantic UI
      && (
        $(this).is(':visible')
        || ($select.parents('.tab-content').length > 0)
        || $select.parents('.ui-widget').length > 0
      ) // For settings tab content && Jquery Popup dropdowns
      && $select.prop('id') != 'available_c'
      && $select.prop('id') != 'selected_c'
      && !(this.name.includes('column') && $select.prop('multiple')) // To skip Redmine multi selection
      && !$(this).hasClass("multi-row")
      && !$select.hasClass('issueDD')
      && !this.name.includes('__template__')
    ){
      $select.addClass('ui dropdown');
    }
  });

  $('.ui.dropdown').dropdown({ placeholder: false });

  observeDD();

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
    // Top menu setup. This install renders the multi_tenant plugin layout,
    // whose #top-menu contains: #account (the core profile dropdown) and the
    // top_menu <ul>. Move the top_menu links into a styled #topmenu-nav.
    $('<div id="topmenu-nav"></div>').appendTo('#top-menu');
    $('#top-menu > ul').first().appendTo('#topmenu-nav');

    // Move the search box into the fixed top bar
    $('#quick-search').appendTo('#top-menu');
    const searchLink = $('#quick-search label a');
    $('#quick-search label').empty();
    searchLink.appendTo('#quick-search label');
    $('#quick-search #q').before('<div class="expandSearch"></div>');
    $('#quick-search #q').prependTo('.expandSearch');
    $('#project-jump .drdn-trigger').prop('title', 'Jump to project').html(projIcon);

    // User profile popup — rebuild the layout's flat #account menu as Redmine's
    // core dropdown markup. The core Stimulus "dropdown" controller (loaded via
    // the layout's importmap) connects to data-controller="dropdown" on its own
    // and handles toggle, outside-click and Escape.
    const $account = $('#account');
    // The multi_tenant Redmine 7.0 layout already renders the modern #account
    // dropdown (a .dropdown-trigger wrapping the avatar + a .dropdown-content).
    // Only rebuild it for the legacy flat markup — otherwise we'd add a second
    // trigger (duplicate profile icon) and a second dropdown-content target.
    if (!$account.children('.dropdown-trigger').length) {
      const $accountMenu = $account.children('ul').first();
      $account.addClass('dropdown').attr('data-controller', 'dropdown');
      $account.prepend(
        '<a href="#" class="dropdown-trigger" title="User profile" data-action="click->dropdown#toggle">' +
          '<div class="profileicon"></div>' +
        '</a>'
      );
      const $dropdownContent = $('<div class="dropdown-content hidden" data-dropdown-target="content"></div>').appendTo($account);
      const $loggedas = $('#loggedas');
      if ($loggedas.length) {
        $('<div class="user-info"></div>').append($loggedas.contents()).appendTo($dropdownContent);
        $loggedas.remove();
        $dropdownContent.append('<div class="dropdown-divider"></div>');
      }
      $dropdownContent.append($accountMenu);
    }
    $('#quick-search').append($account);

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
      updateTitlePosition();
    });

    // Toggle Icon right click action
    $('#toggle-right').click(function() {
      setNavRight();
      updateTitlePosition();
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
    // Redmine 7.0 adds its own collapsible-sidebar toggle; the theme provides
    // its own left-nav toggle, so remove the native one to avoid duplicates.
    $('#sidebar-switch-panel').remove();
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
    const issueImgObserver = new MutationObserver(function(mutationsList, observer) {
      for(let mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          setIssueStartIcon();
        }
      }
    });
    if($('#issueImg img') && $('#issueImg img')[0]) issueImgObserver.observe($('#issueImg img')[0], { attributes: true });

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
  if(window.location.pathname == '/wkdashboard' && $('#graph').length) {
    const applyGraphWidth = () => $('#graph').children('div').addClass('width33');
    applyGraphWidth();
    new MutationObserver(applyGraphWidth).observe($('#graph')[0], { childList: true });
  }

  //Hide Top menu search button
  $('.expandSearch').siblings('label').hide();
  //Add placeholder for Search
  $('.expandSearch #q').prop('placeholder', 'Search');

  //Add Other Redmine Icons
  updateOtherIcons();

  // Observe img changes
  const accordionObserver = new MutationObserver(function(mutationsList, observer) {
    for(let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        updateOtherIcons();
      }
    }
  });
  if($('#accordion') && $('#accordion')[0]) accordionObserver.observe($('#accordion')[0], { childList: true, subtree: true });

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

  // NOTE: Redmine 7.0 manages SVG sprite icon <use href> itself. The previous
  // observer that reverted those href changes fought core and is removed.
  // To customise action icons, ship an images/icons.svg sprite override in the
  // theme (Redmine 7.0 Feature #43087) instead of patching the DOM at runtime.

  //* Fix for Project Member list */
  if(window.location.pathname.includes('settings/members')) {
    $('.name.icon.icon-user, .name.icon.icon-group').each(function(){
      $(this).prop('class', 'name icon-user');
    })
  }
  updateTitlePosition();
});

function initDropdownUI($this){
  const $allDDs = $($this).find('select');
  $allDDs.each(function(){
    if($(this).is('select')
      && $(this).is(':visible')
      && !$(this).hasClass('ui dropdown') // don't re-run setup on an already-initialized dropdown
      && !$(this).hasClass("select2-hidden-accessible")
      && !$(this).hasClass("productItemsDD") // owned by invoice.js's select2() init, not Semantic UI
      && this.id != 'available_c'
      && this.id != 'selected_c'
      && !(this.name.includes('column') && $(this).prop('multiple')) // To skip Redmine multi selection
      && !$(this).hasClass("multi-row")
      && !$(this).hasClass("issueDD")
      && !this.name.includes('__template__')
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
  const menu = document.getElementById('context-menu');
  if (!menu) return;
  // Redmine 7.0 positions the context menu correctly against page coordinates
  // (Defect #25114), so the theme no longer offsets it. We only refresh the
  // plugin icons inside the menu when it becomes visible.
  const listClickObserve = new MutationObserver(function() {
    if ($('#context-menu').is(':visible')) {
      updateOtherIcons();
    }
  });
  listClickObserve.observe(menu, { attributes: true });
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
    const src = $(this).prop('src');
    if (!src) return; // skip images without a resolvable src (new URL('') throws)
    const path = (new URL(src)).pathname.replace(/\/plugin_assets\/redmine_wktime\/images\/|\/images\//g, "");
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

function updateTitlePosition() {
  const $contentH2 = $('#content h2').first();
  // Page-level tab navigation only: the wiki editor's Edit/Preview bar
  // (jstoolbar) is also class "tabs" and sits inside form fields, so the
  // page title must never be injected in front of it.
  const $tabs = $('#content .tabs').not('.jstTabs').first();
  const $queryFormTabs = $('#query_form .tabs');
  const $mainMenu = $('#main-menu');
  
  const pageTitle = 
    $contentH2.text().trim() || 
    $('#content .tab-title h2').text().trim() || 
    $('#left-nav .menu-title h2').text().trim();

  const sideNavOpen = sessionStorage.getItem("showSideNav") !== 'true';

  // Create the side-nav title in both states, not only when the nav is open:
  // pages loaded with the nav collapsed still need it so the hover flyout
  // shows the page heading.
  if (!$mainMenu.find('.menu-title').length && pageTitle) {
    $mainMenu.prepend(`<div class="menu-title"><h2>${pageTitle}</h2></div>`);
  }

  if (sideNavOpen) {
    // Side nav open
    if ($('#left-nav').is(':visible')) {
      $contentH2.hide();
    }
    $('#content .tab-title').hide();
  } else {
    // Side nav closed
    $contentH2.show();
    if (pageTitle && $tabs.length && !$queryFormTabs.length) {
      const $tabTitle = $('#content .tab-title');
      if ($tabTitle.length) {
        $tabTitle.show();
      } else {
        $('<div class="tab-title"><h2>' + pageTitle + '</h2></div>').insertBefore($tabs);
      }
      $contentH2.hide();
    }
  }
}


/*!
 * Semantic UI 2.5.0 (bundled) — transition + dropdown components only.
 * Vendored here to avoid a runtime CDN dependency; the matching CSS is imported
 * by stylesheets/application.css. MIT License — https://github.com/Semantic-Org/Semantic-UI
 * Requires jQuery (loaded by Redmine before this theme).
 *
 * Kept at the END of the file so the theme's own code reads first. This is safe:
 * theme.js executes before DOMContentLoaded, so $.fn.dropdown/$.fn.transition are
 * defined by the time the $(document).ready handler above initialises dropdowns.
 * --- Vendor code below; do not edit. ---
 */
!function(C,n,A,S){"use strict";n=void 0!==n&&n.Math==Math?n:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),C.fn.transition=function(){var u,r=C(this),p=r.selector||"",g=(new Date).getTime(),v=[],b=arguments,y=b[0],h=[].slice.call(arguments,1),w="string"==typeof y;n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||n.msRequestAnimationFrame;return r.each(function(t){var d,s,e,c,i,a,n,o,m=C(this),l=this,f={initialize:function(){d=f.get.settings.apply(l,b),c=d.className,e=d.error,i=d.metadata,o="."+d.namespace,n="module-"+d.namespace,s=m.data(n)||f,a=f.get.animationEndEvent(),!1===(w=w&&f.invoke(y))&&(f.verbose("Converted arguments into settings object",d),d.interval?f.delay(d.animate):f.animate(),f.instantiate())},instantiate:function(){f.verbose("Storing instance of module",f),s=f,m.data(n,s)},destroy:function(){f.verbose("Destroying previous module for",l),m.removeData(n)},refresh:function(){f.verbose("Refreshing display type on next animation"),delete f.displayType},forceRepaint:function(){f.verbose("Forcing element repaint");var n=m.parent(),e=m.next();0===e.length?m.detach().appendTo(n):m.detach().insertBefore(e)},repaint:function(){f.verbose("Repainting element");l.offsetWidth},delay:function(n){var e,i=(i=f.get.animationDirection())||(f.can.transition()?f.get.direction():"static");n=n!==S?n:d.interval,e="auto"==d.reverse&&i==c.outward||1==d.reverse?(r.length-t)*d.interval:t*d.interval,f.debug("Delaying animation by",e),setTimeout(f.animate,e)},animate:function(n){if(d=n||d,!f.is.supported())return f.error(e.support),!1;if(f.debug("Preparing animation",d.animation),f.is.animating()){if(d.queue)return!d.allowRepeats&&f.has.direction()&&f.is.occurring()&&!0!==f.queuing?f.debug("Animation is currently occurring, preventing queueing same animation",d.animation):f.queue(d.animation),!1;if(!d.allowRepeats&&f.is.occurring())return f.debug("Animation is already occurring, will not execute repeated animation",d.animation),!1;f.debug("New animation started, completing previous early",d.animation),s.complete()}f.can.animate()?f.set.animating(d.animation):f.error(e.noAnimation,d.animation,l)},reset:function(){f.debug("Resetting animation to beginning conditions"),f.remove.animationCallbacks(),f.restore.conditions(),f.remove.animating()},queue:function(n){f.debug("Queueing animation of",n),f.queuing=!0,m.one(a+".queue"+o,function(){f.queuing=!1,f.repaint(),f.animate.apply(this,d)})},complete:function(n){f.debug("Animation complete",d.animation),f.remove.completeCallback(),f.remove.failSafe(),f.is.looping()||(f.is.outward()?(f.verbose("Animation is outward, hiding element"),f.restore.conditions(),f.hide()):f.is.inward()?(f.verbose("Animation is outward, showing element"),f.restore.conditions(),f.show()):(f.verbose("Static animation completed"),f.restore.conditions(),d.onComplete.call(l)))},force:{visible:function(){var n=m.attr("style"),e=f.get.userStyle(),i=f.get.displayType(),t=e+"display: "+i+" !important;",a=m.css("display"),o=n===S||""===n;a!==i?(f.verbose("Overriding default display to show element",i),m.attr("style",t)):o&&m.removeAttr("style")},hidden:function(){var n=m.attr("style"),e=m.css("display"),i=n===S||""===n;"none"===e||f.is.hidden()?i&&m.removeAttr("style"):(f.verbose("Overriding default display to hide element"),m.css("display","none"))}},has:{direction:function(n){var i=!1;return"string"==typeof(n=n||d.animation)&&(n=n.split(" "),C.each(n,function(n,e){e!==c.inward&&e!==c.outward||(i=!0)})),i},inlineDisplay:function(){var n=m.attr("style")||"";return C.isArray(n.match(/display.*?;/,""))}},set:{animating:function(n){var e;f.remove.completeCallback(),n=n||d.animation,e=f.get.animationClass(n),f.save.animation(e),f.force.visible(),f.remove.hidden(),f.remove.direction(),f.start.animation(e)},duration:function(n,e){!(e="number"==typeof(e=e||d.duration)?e+"ms":e)&&0!==e||(f.verbose("Setting animation duration",e),m.css({"animation-duration":e}))},direction:function(n){(n=n||f.get.direction())==c.inward?f.set.inward():f.set.outward()},looping:function(){f.debug("Transition set to loop"),m.addClass(c.looping)},hidden:function(){m.addClass(c.transition).addClass(c.hidden)},inward:function(){f.debug("Setting direction to inward"),m.removeClass(c.outward).addClass(c.inward)},outward:function(){f.debug("Setting direction to outward"),m.removeClass(c.inward).addClass(c.outward)},visible:function(){m.addClass(c.transition).addClass(c.visible)}},start:{animation:function(n){n=n||f.get.animationClass(),f.debug("Starting tween",n),m.addClass(n).one(a+".complete"+o,f.complete),d.useFailSafe&&f.add.failSafe(),f.set.duration(d.duration),d.onStart.call(l)}},save:{animation:function(n){f.cache||(f.cache={}),f.cache.animation=n},displayType:function(n){"none"!==n&&m.data(i.displayType,n)},transitionExists:function(n,e){C.fn.transition.exists[n]=e,f.verbose("Saving existence of transition",n,e)}},restore:{conditions:function(){var n=f.get.currentAnimation();n&&(m.removeClass(n),f.verbose("Removing animation class",f.cache)),f.remove.duration()}},add:{failSafe:function(){var n=f.get.duration();f.timer=setTimeout(function(){m.triggerHandler(a)},n+d.failSafeDelay),f.verbose("Adding fail safe timer",f.timer)}},remove:{animating:function(){m.removeClass(c.animating)},animationCallbacks:function(){f.remove.queueCallback(),f.remove.completeCallback()},queueCallback:function(){m.off(".queue"+o)},completeCallback:function(){m.off(".complete"+o)},display:function(){m.css("display","")},direction:function(){m.removeClass(c.inward).removeClass(c.outward)},duration:function(){m.css("animation-duration","")},failSafe:function(){f.verbose("Removing fail safe timer",f.timer),f.timer&&clearTimeout(f.timer)},hidden:function(){m.removeClass(c.hidden)},visible:function(){m.removeClass(c.visible)},looping:function(){f.debug("Transitions are no longer looping"),f.is.looping()&&(f.reset(),m.removeClass(c.looping))},transition:function(){m.removeClass(c.visible).removeClass(c.hidden)}},get:{settings:function(n,e,i){return"object"==typeof n?C.extend(!0,{},C.fn.transition.settings,n):"function"==typeof i?C.extend({},C.fn.transition.settings,{animation:n,onComplete:i,duration:e}):"string"==typeof e||"number"==typeof e?C.extend({},C.fn.transition.settings,{animation:n,duration:e}):"object"==typeof e?C.extend({},C.fn.transition.settings,e,{animation:n}):"function"==typeof e?C.extend({},C.fn.transition.settings,{animation:n,onComplete:e}):C.extend({},C.fn.transition.settings,{animation:n})},animationClass:function(n){var e=n||d.animation,i=f.can.transition()&&!f.has.direction()?f.get.direction()+" ":"";return c.animating+" "+c.transition+" "+i+e},currentAnimation:function(){return!(!f.cache||f.cache.animation===S)&&f.cache.animation},currentDirection:function(){return f.is.inward()?c.inward:c.outward},direction:function(){return f.is.hidden()||!f.is.visible()?c.inward:c.outward},animationDirection:function(n){var i;return"string"==typeof(n=n||d.animation)&&(n=n.split(" "),C.each(n,function(n,e){e===c.inward?i=c.inward:e===c.outward&&(i=c.outward)})),i||!1},duration:function(n){return!1===(n=n||d.duration)&&(n=m.css("animation-duration")||0),"string"==typeof n?-1<n.indexOf("ms")?parseFloat(n):1e3*parseFloat(n):n},displayType:function(n){return n=n===S||n,d.displayType?d.displayType:(n&&m.data(i.displayType)===S&&f.can.transition(!0),m.data(i.displayType))},userStyle:function(n){return(n=n||m.attr("style")||"").replace(/display.*?;/,"")},transitionExists:function(n){return C.fn.transition.exists[n]},animationStartEvent:function(){var n,e=A.createElement("div"),i={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(n in i)if(e.style[n]!==S)return i[n];return!1},animationEndEvent:function(){var n,e=A.createElement("div"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(n in i)if(e.style[n]!==S)return i[n];return!1}},can:{transition:function(n){var e,i,t,a,o,r,s=d.animation,l=f.get.transitionExists(s),u=f.get.displayType(!1);if(l===S||n){if(f.verbose("Determining whether animation exists"),e=m.attr("class"),i=m.prop("tagName"),a=(t=C("<"+i+" />").addClass(e).insertAfter(m)).addClass(s).removeClass(c.inward).removeClass(c.outward).addClass(c.animating).addClass(c.transition).css("animationName"),o=t.addClass(c.inward).css("animationName"),u||(u=t.attr("class",e).removeAttr("style").removeClass(c.hidden).removeClass(c.visible).show().css("display"),f.verbose("Determining final display state",u),f.save.displayType(u)),t.remove(),a!=o)f.debug("Direction exists for animation",s),r=!0;else{if("none"==a||!a)return void f.debug("No animation defined in css",s);f.debug("Static animation found",s,u),r=!1}f.save.transitionExists(s,r)}return l!==S?l:r},animate:function(){return f.can.transition()!==S}},is:{animating:function(){return m.hasClass(c.animating)},inward:function(){return m.hasClass(c.inward)},outward:function(){return m.hasClass(c.outward)},looping:function(){return m.hasClass(c.looping)},occurring:function(n){return n="."+(n=n||d.animation).replace(" ","."),0<m.filter(n).length},visible:function(){return m.is(":visible")},hidden:function(){return"hidden"===m.css("visibility")},supported:function(){return!1!==a}},hide:function(){f.verbose("Hiding element"),f.is.animating()&&f.reset(),l.blur(),f.remove.display(),f.remove.visible(),f.set.hidden(),f.force.hidden(),d.onHide.call(l),d.onComplete.call(l)},show:function(n){f.verbose("Showing element",n),f.remove.hidden(),f.set.visible(),f.force.visible(),d.onShow.call(l),d.onComplete.call(l)},toggle:function(){f.is.visible()?f.hide():f.show()},stop:function(){f.debug("Stopping current animation"),m.triggerHandler(a)},stopAll:function(){f.debug("Stopping all animation"),f.remove.queueCallback(),m.triggerHandler(a)},clear:{queue:function(){f.debug("Clearing animation queue"),f.remove.queueCallback()}},enable:function(){f.verbose("Starting animation"),m.removeClass(c.disabled)},disable:function(){f.debug("Stopping animation"),m.addClass(c.disabled)},setting:function(n,e){if(f.debug("Changing setting",n,e),C.isPlainObject(n))C.extend(!0,d,n);else{if(e===S)return d[n];C.isPlainObject(d[n])?C.extend(!0,d[n],e):d[n]=e}},internal:function(n,e){if(C.isPlainObject(n))C.extend(!0,f,n);else{if(e===S)return f[n];f[n]=e}},debug:function(){!d.silent&&d.debug&&(d.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,d.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),f.verbose.apply(console,arguments)))},error:function(){d.silent||(f.error=Function.prototype.bind.call(console.error,console,d.name+":"),f.error.apply(console,arguments))},performance:{log:function(n){var e,i;d.performance&&(i=(e=(new Date).getTime())-(g||e),g=e,v.push({Name:n[0],Arguments:[].slice.call(n,1)||"",Element:l,"Execution Time":i})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var n=d.name+":",i=0;g=!1,clearTimeout(f.performance.timer),C.each(v,function(n,e){i+=e["Execution Time"]}),n+=" "+i+"ms",p&&(n+=" '"+p+"'"),1<r.length&&(n+=" ("+r.length+")"),(console.group!==S||console.table!==S)&&0<v.length&&(console.groupCollapsed(n),console.table?console.table(v):C.each(v,function(n,e){console.log(e.Name+": "+e["Execution Time"]+"ms")}),console.groupEnd()),v=[]}},invoke:function(t,n,e){var a,o,i,r=s;return n=n||h,e=l||e,"string"==typeof t&&r!==S&&(t=t.split(/[\. ]/),a=t.length-1,C.each(t,function(n,e){var i=n!=a?e+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(C.isPlainObject(r[i])&&n!=a)r=r[i];else{if(r[i]!==S)return o=r[i],!1;if(!C.isPlainObject(r[e])||n==a)return r[e]!==S&&(o=r[e]),!1;r=r[e]}})),C.isFunction(o)?i=o.apply(e,n):o!==S&&(i=o),C.isArray(u)?u.push(i):u!==S?u=[u,i]:i!==S&&(u=i),o!==S&&o}};f.initialize()}),u!==S?u:this},C.fn.transition.exists={},C.fn.transition.settings={name:"Transition",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document);
!function(X,Y,G,J){"use strict";Y=void 0!==Y&&Y.Math==Math?Y:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),X.fn.dropdown=function(z){var P,H=X(this),j=X(G),N=H.selector||"",U="ontouchstart"in G.documentElement,K=(new Date).getTime(),W=[],B=z,$="string"==typeof B,Q=[].slice.call(arguments,1);return H.each(function(n){var e,t,i,a,o,s,r,m=X.isPlainObject(z)?X.extend(!0,{},X.fn.dropdown.settings,z):X.extend({},X.fn.dropdown.settings),h=m.className,c=m.message,l=m.fields,g=m.keys,p=m.metadata,u=m.namespace,d=m.regExp,b=m.selector,v=m.error,f=m.templates,w="."+u,x="module-"+u,C=X(this),S=X(m.context),y=C.find(b.text),A=C.find(b.search),T=C.find(b.sizer),k=C.find(b.input),L=C.find(b.icon),I=0<C.prev().find(b.text).length?C.prev().find(b.text):C.prev(),D=C.children(b.menu),q=D.find(b.item),R=!1,O=!1,V=!1,E=this,M=C.data(x),F={initialize:function(){F.debug("Initializing dropdown",m),F.is.alreadySetup()?F.setup.reference():(F.setup.layout(),m.values&&F.change.values(m.values),F.refreshData(),F.save.defaults(),F.restore.selected(),F.create.id(),F.bind.events(),F.observeChanges(),F.instantiate())},instantiate:function(){F.verbose("Storing instance of dropdown",F),M=F,C.data(x,F)},destroy:function(){F.verbose("Destroying previous dropdown",C),F.remove.tabbable(),C.off(w).removeData(x),D.off(w),j.off(a),F.disconnect.menuObserver(),F.disconnect.selectObserver()},observeChanges:function(){"MutationObserver"in Y&&(s=new MutationObserver(F.event.select.mutation),r=new MutationObserver(F.event.menu.mutation),F.debug("Setting up mutation observer",s,r),F.observe.select(),F.observe.menu())},disconnect:{menuObserver:function(){r&&r.disconnect()},selectObserver:function(){s&&s.disconnect()}},observe:{select:function(){F.has.input()&&s.observe(C[0],{childList:!0,subtree:!0})},menu:function(){F.has.menu()&&r.observe(D[0],{childList:!0,subtree:!0})}},create:{id:function(){o=(Math.random().toString(16)+"000000000").substr(2,8),a="."+o,F.verbose("Creating unique id for element",o)},userChoice:function(e){var n,i,a;return!!(e=e||F.get.userValues())&&(e=X.isArray(e)?e:[e],X.each(e,function(e,t){!1===F.get.item(t)&&(a=m.templates.addition(F.add.variables(c.addResult,t)),i=X("<div />").html(a).attr("data-"+p.value,t).attr("data-"+p.text,t).addClass(h.addition).addClass(h.item),m.hideAdditions&&i.addClass(h.hidden),n=n===J?i:n.add(i),F.verbose("Creating user choices for value",t,i))}),n)},userLabels:function(e){var t=F.get.userValues();t&&(F.debug("Adding user labels",t),X.each(t,function(e,t){F.verbose("Adding custom user value"),F.add.label(t,t)}))},menu:function(){D=X("<div />").addClass(h.menu).appendTo(C)},sizer:function(){T=X("<span />").addClass(h.sizer).insertAfter(A)}},search:function(e){e=e!==J?e:F.get.query(),F.verbose("Searching for query",e),F.has.minCharacters(e)?F.filter(e):F.hide()},select:{firstUnfiltered:function(){F.verbose("Selecting first non-filtered element"),F.remove.selectedItem(),q.not(b.unselectable).not(b.addition+b.hidden).eq(0).addClass(h.selected)},nextAvailable:function(e){var t=(e=e.eq(0)).nextAll(b.item).not(b.unselectable).eq(0),n=e.prevAll(b.item).not(b.unselectable).eq(0);0<t.length?(F.verbose("Moving selection to",t),t.addClass(h.selected)):(F.verbose("Moving selection to",n),n.addClass(h.selected))}},setup:{api:function(){var e={debug:m.debug,urlData:{value:F.get.value(),query:F.get.query()},on:!1};F.verbose("First request, initializing API"),C.api(e)},layout:function(){C.is("select")&&(F.setup.select(),F.setup.returnedObject()),F.has.menu()||F.create.menu(),F.is.search()&&!F.has.search()&&(F.verbose("Adding search input"),A=X("<input />").addClass(h.search).prop("autocomplete","off").insertBefore(y)),F.is.multiple()&&F.is.searchSelection()&&!F.has.sizer()&&F.create.sizer(),m.allowTab&&F.set.tabbable()},select:function(){var e=F.get.selectValues();F.debug("Dropdown initialized on a select",e),C.is("select")&&(k=C),0<k.parent(b.dropdown).length?(F.debug("UI dropdown already exists. Creating dropdown menu only"),C=k.closest(b.dropdown),F.has.menu()||F.create.menu(),D=C.children(b.menu),F.setup.menu(e)):(F.debug("Creating entire dropdown from select"),C=X("<div />").attr("class",k.attr("class")).addClass(h.selection).addClass(h.dropdown).html(f.dropdown(e)).insertBefore(k),k.hasClass(h.multiple)&&!1===k.prop("multiple")&&(F.error(v.missingMultiple),k.prop("multiple",!0)),k.is("[multiple]")&&F.set.multiple(),k.prop("disabled")&&(F.debug("Disabling dropdown"),C.addClass(h.disabled)),k.removeAttr("class").detach().prependTo(C)),F.refresh()},menu:function(e){D.html(f.menu(e,l)),q=D.find(b.item)},reference:function(){F.debug("Dropdown behavior was called on select, replacing with closest dropdown"),C=C.parent(b.dropdown),M=C.data(x),E=C.get(0),F.refresh(),F.setup.returnedObject()},returnedObject:function(){var e=H.slice(0,n),t=H.slice(n+1);H=e.add(C).add(t)}},refresh:function(){F.refreshSelectors(),F.refreshData()},refreshItems:function(){q=D.find(b.item)},refreshSelectors:function(){F.verbose("Refreshing selector cache"),y=C.find(b.text),A=C.find(b.search),k=C.find(b.input),L=C.find(b.icon),I=0<C.prev().find(b.text).length?C.prev().find(b.text):C.prev(),D=C.children(b.menu),q=D.find(b.item)},refreshData:function(){F.verbose("Refreshing cached metadata"),q.removeData(p.text).removeData(p.value)},clearData:function(){F.verbose("Clearing metadata"),q.removeData(p.text).removeData(p.value),C.removeData(p.defaultText).removeData(p.defaultValue).removeData(p.placeholderText)},toggle:function(){F.verbose("Toggling menu visibility"),F.is.active()?F.hide():F.show()},show:function(e){if(e=X.isFunction(e)?e:function(){},!F.can.show()&&F.is.remote()&&(F.debug("No API results retrieved, searching before show"),F.queryRemote(F.get.query(),F.show)),F.can.show()&&!F.is.active()){if(F.debug("Showing dropdown"),!F.has.message()||F.has.maxSelections()||F.has.allResultsFiltered()||F.remove.message(),F.is.allFiltered())return!0;!1!==m.onShow.call(E)&&F.animate.show(function(){F.can.click()&&F.bind.intent(),F.has.menuSearch()&&F.focusSearch(),F.set.visible(),e.call(E)})}},hide:function(e){e=X.isFunction(e)?e:function(){},F.is.active()&&!F.is.animatingOutward()&&(F.debug("Hiding dropdown"),!1!==m.onHide.call(E)&&F.animate.hide(function(){F.remove.visible(),e.call(E)}))},hideOthers:function(){F.verbose("Finding other dropdowns to hide"),H.not(C).has(b.menu+"."+h.visible).dropdown("hide")},hideMenu:function(){F.verbose("Hiding menu  instantaneously"),F.remove.active(),F.remove.visible(),D.transition("hide")},hideSubMenus:function(){var e=D.children(b.item).find(b.menu);F.verbose("Hiding sub menus",e),e.transition("hide")},bind:{events:function(){U&&F.bind.touchEvents(),F.bind.keyboardEvents(),F.bind.inputEvents(),F.bind.mouseEvents()},touchEvents:function(){F.debug("Touch device detected binding additional touch events"),F.is.searchSelection()||F.is.single()&&C.on("touchstart"+w,F.event.test.toggle),D.on("touchstart"+w,b.item,F.event.item.mouseenter)},keyboardEvents:function(){F.verbose("Binding keyboard events"),C.on("keydown"+w,F.event.keydown),F.has.search()&&C.on(F.get.inputEvent()+w,b.search,F.event.input),F.is.multiple()&&j.on("keydown"+a,F.event.document.keydown)},inputEvents:function(){F.verbose("Binding input change events"),C.on("change"+w,b.input,F.event.change)},mouseEvents:function(){F.verbose("Binding mouse events"),F.is.multiple()&&C.on("click"+w,b.label,F.event.label.click).on("click"+w,b.remove,F.event.remove.click),F.is.searchSelection()?(C.on("mousedown"+w,F.event.mousedown).on("mouseup"+w,F.event.mouseup).on("mousedown"+w,b.menu,F.event.menu.mousedown).on("mouseup"+w,b.menu,F.event.menu.mouseup).on("click"+w,b.icon,F.event.icon.click).on("focus"+w,b.search,F.event.search.focus).on("click"+w,b.search,F.event.search.focus).on("blur"+w,b.search,F.event.search.blur).on("click"+w,b.text,F.event.text.focus),F.is.multiple()&&C.on("click"+w,F.event.click)):("click"==m.on?C.on("click"+w,F.event.test.toggle):"hover"==m.on?C.on("mouseenter"+w,F.delay.show).on("mouseleave"+w,F.delay.hide):C.on(m.on+w,F.toggle),C.on("click"+w,b.icon,F.event.icon.click).on("mousedown"+w,F.event.mousedown).on("mouseup"+w,F.event.mouseup).on("focus"+w,F.event.focus),F.has.menuSearch()?C.on("blur"+w,b.search,F.event.search.blur):C.on("blur"+w,F.event.blur)),D.on("mouseenter"+w,b.item,F.event.item.mouseenter).on("mouseleave"+w,b.item,F.event.item.mouseleave).on("click"+w,b.item,F.event.item.click)},intent:function(){F.verbose("Binding hide intent event to document"),U&&j.on("touchstart"+a,F.event.test.touch).on("touchmove"+a,F.event.test.touch),j.on("click"+a,F.event.test.hide)}},unbind:{intent:function(){F.verbose("Removing hide intent event from document"),U&&j.off("touchstart"+a).off("touchmove"+a),j.off("click"+a)}},filter:function(e){function t(){F.is.multiple()&&F.filterActive(),(e||!e&&0==F.get.activeItem().length)&&F.select.firstUnfiltered(),F.has.allResultsFiltered()?m.onNoResults.call(E,n)?m.allowAdditions?m.hideAdditions&&(F.verbose("User addition with no menu, setting empty style"),F.set.empty(),F.hideMenu()):(F.verbose("All items filtered, showing message",n),F.add.message(c.noResults)):(F.verbose("All items filtered, hiding dropdown",n),F.hideMenu()):(F.remove.empty(),F.remove.message()),m.allowAdditions&&F.add.userSuggestion(e),F.is.searchSelection()&&F.can.show()&&F.is.focusedOnSearch()&&F.show()}var n=e!==J?e:F.get.query();m.useLabels&&F.has.maxSelections()||(m.apiSettings?F.can.useAPI()?F.queryRemote(n,function(){m.filterRemoteData&&F.filterItems(n),t()}):F.error(v.noAPI):(F.filterItems(n),t()))},queryRemote:function(e,n){var t={errorDuration:!1,cache:"local",throttle:m.throttle,urlData:{query:e},onError:function(){F.add.message(c.serverError),n()},onFailure:function(){F.add.message(c.serverError),n()},onSuccess:function(e){var t=e[l.remoteValues];X.isArray(t)&&0<t.length?(F.remove.message(),F.setup.menu({values:e[l.remoteValues]})):F.add.message(c.noResults),n()}};C.api("get request")||F.setup.api(),t=X.extend(!0,{},t,m.apiSettings),C.api("setting",t).api("query")},filterItems:function(e){var i=e!==J?e:F.get.query(),a=null,t=F.escape.string(i),o=new RegExp("^"+t,"igm");F.has.query()&&(a=[],F.verbose("Searching for matching values",i),q.each(function(){var e,t,n=X(this);if("both"==m.match||"text"==m.match){if(-1!==(e=String(F.get.choiceText(n,!1))).search(o))return a.push(this),!0;if("exact"===m.fullTextSearch&&F.exactSearch(i,e))return a.push(this),!0;if(!0===m.fullTextSearch&&F.fuzzySearch(i,e))return a.push(this),!0}if("both"==m.match||"value"==m.match){if(-1!==(t=String(F.get.choiceValue(n,e))).search(o))return a.push(this),!0;if("exact"===m.fullTextSearch&&F.exactSearch(i,t))return a.push(this),!0;if(!0===m.fullTextSearch&&F.fuzzySearch(i,t))return a.push(this),!0}})),F.debug("Showing only matched items",i),F.remove.filteredItem(),a&&q.not(a).addClass(h.filtered)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if(e=e.toLowerCase(),t=t.toLowerCase(),n<i)return!1;if(i===n)return e===t;e:for(var a=0,o=0;a<i;a++){for(var s=e.charCodeAt(a);o<n;)if(t.charCodeAt(o++)===s)continue e;return!1}return!0},exactSearch:function(e,t){return e=e.toLowerCase(),-1<(t=t.toLowerCase()).indexOf(e)},filterActive:function(){m.useLabels&&q.filter("."+h.active).addClass(h.filtered)},focusSearch:function(e){F.has.search()&&!F.is.focusedOnSearch()&&(e?(C.off("focus"+w,b.search),A.focus(),C.on("focus"+w,b.search,F.event.search.focus)):A.focus())},forceSelection:function(){var e=q.not(h.filtered).filter("."+h.selected).eq(0),t=q.not(h.filtered).filter("."+h.active).eq(0),n=0<e.length?e:t;if(0<n.length&&!F.is.multiple())return F.debug("Forcing partial selection to selected item",n),void F.event.item.click.call(n,{},!0);m.allowAdditions&&F.set.selected(F.get.query()),F.remove.searchTerm()},change:{values:function(e){m.allowAdditions||F.clear(),F.debug("Creating dropdown with specified values",e),F.setup.menu({values:e}),X.each(e,function(e,t){if(1==t.selected)return F.debug("Setting initial selection to",t.value),F.set.selected(t.value),!0})}},event:{change:function(){V||(F.debug("Input changed, updating selection"),F.set.selected())},focus:function(){m.showOnFocus&&!R&&F.is.hidden()&&!t&&F.show()},blur:function(e){t=G.activeElement===this,R||t||(F.remove.activeLabel(),F.hide())},mousedown:function(){F.is.searchSelection()?i=!0:R=!0},mouseup:function(){F.is.searchSelection()?i=!1:R=!1},click:function(e){X(e.target).is(C)&&(F.is.focusedOnSearch()?F.show():F.focusSearch())},search:{focus:function(){R=!0,F.is.multiple()&&F.remove.activeLabel(),m.showOnFocus&&F.search()},blur:function(e){t=G.activeElement===this,F.is.searchSelection()&&!i&&(O||t||(m.forceSelection&&F.forceSelection(),F.hide())),i=!1}},icon:{click:function(e){L.hasClass(h.clear)?F.clear():F.can.click()&&F.toggle()}},text:{focus:function(e){R=!0,F.focusSearch()}},input:function(e){(F.is.multiple()||F.is.searchSelection())&&F.set.filtered(),clearTimeout(F.timer),F.timer=setTimeout(F.search,m.delay.search)},label:{click:function(e){var t=X(this),n=C.find(b.label),i=n.filter("."+h.active),a=t.nextAll("."+h.active),o=t.prevAll("."+h.active),s=0<a.length?t.nextUntil(a).add(i).add(t):t.prevUntil(o).add(i).add(t);e.shiftKey?(i.removeClass(h.active),s.addClass(h.active)):e.ctrlKey?t.toggleClass(h.active):(i.removeClass(h.active),t.addClass(h.active)),m.onLabelSelect.apply(this,n.filter("."+h.active))}},remove:{click:function(){var e=X(this).parent();e.hasClass(h.active)?F.remove.activeLabels():F.remove.activeLabels(e)}},test:{toggle:function(e){var t=F.is.multiple()?F.show:F.toggle;F.is.bubbledLabelClick(e)||F.is.bubbledIconClick(e)||F.determine.eventOnElement(e,t)&&e.preventDefault()},touch:function(e){F.determine.eventOnElement(e,function(){"touchstart"==e.type?F.timer=setTimeout(function(){F.hide()},m.delay.touch):"touchmove"==e.type&&clearTimeout(F.timer)}),e.stopPropagation()},hide:function(e){F.determine.eventInModule(e,F.hide)}},select:{mutation:function(e){F.debug("<select> modified, recreating menu");var n=!1;X.each(e,function(e,t){if(X(t.target).is("select")||X(t.addedNodes).is("select"))return n=!0}),n&&(F.disconnect.selectObserver(),F.refresh(),F.setup.select(),F.set.selected(),F.observe.select())}},menu:{mutation:function(e){var t=e[0],n=t.addedNodes?X(t.addedNodes[0]):X(!1),i=t.removedNodes?X(t.removedNodes[0]):X(!1),a=n.add(i),o=a.is(b.addition)||0<a.closest(b.addition).length,s=a.is(b.message)||0<a.closest(b.message).length;o||s?(F.debug("Updating item selector cache"),F.refreshItems()):(F.debug("Menu modified, updating selector cache"),F.refresh())},mousedown:function(){O=!0},mouseup:function(){O=!1}},item:{mouseenter:function(e){var t=X(e.target),n=X(this),i=n.children(b.menu),a=n.siblings(b.item).children(b.menu),o=0<i.length;0<i.find(t).length||!o||(clearTimeout(F.itemTimer),F.itemTimer=setTimeout(function(){F.verbose("Showing sub-menu",i),X.each(a,function(){F.animate.hide(!1,X(this))}),F.animate.show(!1,i)},m.delay.show),e.preventDefault())},mouseleave:function(e){var t=X(this).children(b.menu);0<t.length&&(clearTimeout(F.itemTimer),F.itemTimer=setTimeout(function(){F.verbose("Hiding sub-menu",t),F.animate.hide(!1,t)},m.delay.hide))},click:function(e,t){var n=X(this),i=X(e?e.target:""),a=n.find(b.menu),o=F.get.choiceText(n),s=F.get.choiceValue(n,o),r=0<a.length,l=0<a.find(i).length;F.has.menuSearch()&&X(G.activeElement).blur(),l||r&&!m.allowCategorySelection||(F.is.searchSelection()&&(m.allowAdditions&&F.remove.userAddition(),F.remove.searchTerm(),F.is.focusedOnSearch()||1==t||F.focusSearch(!0)),m.useLabels||(F.remove.filteredItem(),F.set.scrollPosition(n)),F.determine.selectAction.call(this,o,s))}},document:{keydown:function(e){var t=e.which;if(F.is.inObject(t,g)){var n=C.find(b.label),i=n.filter("."+h.active),a=(i.data(p.value),n.index(i)),o=n.length,s=0<i.length,r=1<i.length,l=0===a,c=a+1==o,u=F.is.searchSelection(),d=F.is.focusedOnSearch(),v=F.is.focused(),f=d&&0===F.get.caretPosition();if(u&&!s&&!d)return;t==g.leftArrow?!v&&!f||s?s&&(e.shiftKey?F.verbose("Adding previous label to selection"):(F.verbose("Selecting previous label"),n.removeClass(h.active)),l&&!r?i.addClass(h.active):i.prev(b.siblingLabel).addClass(h.active).end(),e.preventDefault()):(F.verbose("Selecting previous label"),n.last().addClass(h.active)):t==g.rightArrow?(v&&!s&&n.first().addClass(h.active),s&&(e.shiftKey?F.verbose("Adding next label to selection"):(F.verbose("Selecting next label"),n.removeClass(h.active)),c?u?d?n.removeClass(h.active):F.focusSearch():r?i.next(b.siblingLabel).addClass(h.active):i.addClass(h.active):i.next(b.siblingLabel).addClass(h.active),e.preventDefault())):t==g.deleteKey||t==g.backspace?s?(F.verbose("Removing active labels"),c&&u&&!d&&F.focusSearch(),i.last().next(b.siblingLabel).addClass(h.active),F.remove.activeLabels(i),e.preventDefault()):f&&!s&&t==g.backspace&&(F.verbose("Removing last label on input backspace"),i=n.last().addClass(h.active),F.remove.activeLabels(i)):i.removeClass(h.active)}}},keydown:function(e){var t=e.which;if(F.is.inObject(t,g)){var n,i=q.not(b.unselectable).filter("."+h.selected).eq(0),a=D.children("."+h.active).eq(0),o=0<i.length?i:a,s=0<o.length?o.siblings(":not(."+h.filtered+")").addBack():D.children(":not(."+h.filtered+")"),r=o.children(b.menu),l=o.closest(b.menu),c=l.hasClass(h.visible)||l.hasClass(h.animating)||0<l.parent(b.menu).length,u=0<r.length,d=0<o.length,v=0<o.not(b.unselectable).length,f=t==g.delimiter&&m.allowAdditions&&F.is.multiple();if(m.allowAdditions&&m.hideAdditions&&(t==g.enter||f)&&v&&(F.verbose("Selecting item from keyboard shortcut",o),F.event.item.click.call(o,e),F.is.searchSelection()&&F.remove.searchTerm()),F.is.visible()){if(t!=g.enter&&!f||(t==g.enter&&d&&u&&!m.allowCategorySelection?(F.verbose("Pressed enter on unselectable category, opening sub menu"),t=g.rightArrow):v&&(F.verbose("Selecting item from keyboard shortcut",o),F.event.item.click.call(o,e),F.is.searchSelection()&&F.remove.searchTerm()),e.preventDefault()),d&&(t==g.leftArrow&&l[0]!==D[0]&&(F.verbose("Left key pressed, closing sub-menu"),F.animate.hide(!1,l),o.removeClass(h.selected),l.closest(b.item).addClass(h.selected),e.preventDefault()),t==g.rightArrow&&u&&(F.verbose("Right key pressed, opening sub-menu"),F.animate.show(!1,r),o.removeClass(h.selected),r.find(b.item).eq(0).addClass(h.selected),e.preventDefault())),t==g.upArrow){if(n=d&&c?o.prevAll(b.item+":not("+b.unselectable+")").eq(0):q.eq(0),s.index(n)<0)return F.verbose("Up key pressed but reached top of current menu"),void e.preventDefault();F.verbose("Up key pressed, changing active item"),o.removeClass(h.selected),n.addClass(h.selected),F.set.scrollPosition(n),m.selectOnKeydown&&F.is.single()&&F.set.selectedItem(n),e.preventDefault()}if(t==g.downArrow){if(0===(n=d&&c?n=o.nextAll(b.item+":not("+b.unselectable+")").eq(0):q.eq(0)).length)return F.verbose("Down key pressed but reached bottom of current menu"),void e.preventDefault();F.verbose("Down key pressed, changing active item"),q.removeClass(h.selected),n.addClass(h.selected),F.set.scrollPosition(n),m.selectOnKeydown&&F.is.single()&&F.set.selectedItem(n),e.preventDefault()}t==g.pageUp&&(F.scrollPage("up"),e.preventDefault()),t==g.pageDown&&(F.scrollPage("down"),e.preventDefault()),t==g.escape&&(F.verbose("Escape key pressed, closing dropdown"),F.hide())}else f&&e.preventDefault(),t!=g.downArrow||F.is.visible()||(F.verbose("Down key pressed, showing dropdown"),F.show(),e.preventDefault())}else F.has.search()||F.set.selectedLetter(String.fromCharCode(t))}},trigger:{change:function(){var e=G.createEvent("HTMLEvents"),t=k[0];t&&(F.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},determine:{selectAction:function(e,t){F.verbose("Determining action",m.action),X.isFunction(F.action[m.action])?(F.verbose("Triggering preset action",m.action,e,t),F.action[m.action].call(E,e,t,this)):X.isFunction(m.action)?(F.verbose("Triggering user action",m.action,e,t),m.action.call(E,e,t,this)):F.error(v.action,m.action)},eventInModule:function(e,t){var n=X(e.target),i=0<n.closest(G.documentElement).length,a=0<n.closest(C).length;return t=X.isFunction(t)?t:function(){},i&&!a?(F.verbose("Triggering event",t),t(),!0):(F.verbose("Event occurred in dropdown, canceling callback"),!1)},eventOnElement:function(e,t){var n=X(e.target),i=n.closest(b.siblingLabel),a=G.body.contains(e.target),o=0===C.find(i).length,s=0===n.closest(D).length;return t=X.isFunction(t)?t:function(){},a&&o&&s?(F.verbose("Triggering event",t),t(),!0):(F.verbose("Event occurred in dropdown menu, canceling callback"),!1)}},action:{nothing:function(){},activate:function(e,t,n){if(t=t!==J?t:e,F.can.activate(X(n))){if(F.set.selected(t,X(n)),F.is.multiple()&&!F.is.allFiltered())return;F.hideAndClear()}},select:function(e,t,n){if(t=t!==J?t:e,F.can.activate(X(n))){if(F.set.value(t,e,X(n)),F.is.multiple()&&!F.is.allFiltered())return;F.hideAndClear()}},combo:function(e,t,n){t=t!==J?t:e,F.set.selected(t,X(n)),F.hideAndClear()},hide:function(e,t,n){F.set.value(t,e,X(n)),F.hideAndClear()}},get:{id:function(){return o},defaultText:function(){return C.data(p.defaultText)},defaultValue:function(){return C.data(p.defaultValue)},placeholderText:function(){return"auto"!=m.placeholder&&"string"==typeof m.placeholder?m.placeholder:C.data(p.placeholderText)||""},text:function(){return y.text()},query:function(){return X.trim(A.val())},searchWidth:function(e){return e=e!==J?e:A.val(),T.text(e),Math.ceil(T.width()+1)},selectionCount:function(){var e=F.get.values();return F.is.multiple()?X.isArray(e)?e.length:0:""!==F.get.value()?1:0},transition:function(e){return"auto"==m.transition?F.is.upward(e)?"slide up":"slide down":m.transition},userValues:function(){var e=F.get.values();return!!e&&(e=X.isArray(e)?e:[e],X.grep(e,function(e){return!1===F.get.item(e)}))},uniqueArray:function(n){return X.grep(n,function(e,t){return X.inArray(e,n)===t})},caretPosition:function(){var e,t,n=A.get(0);return"selectionStart"in n?n.selectionStart:G.selection?(n.focus(),t=(e=G.selection.createRange()).text.length,e.moveStart("character",-n.value.length),e.text.length-t):void 0},value:function(){var e=0<k.length?k.val():C.data(p.value),t=X.isArray(e)&&1===e.length&&""===e[0];return e===J||t?"":e},values:function(){var e=F.get.value();return""===e?"":!F.has.selectInput()&&F.is.multiple()?"string"==typeof e?e.split(m.delimiter):"":e},remoteValues:function(){var e=F.get.values(),i=!1;return e&&("string"==typeof e&&(e=[e]),X.each(e,function(e,t){var n=F.read.remoteData(t);F.verbose("Restoring value from session data",n,t),n&&((i=i||{})[t]=n)})),i},choiceText:function(e,t){if(t=t!==J?t:m.preserveHTML,e)return 0<e.find(b.menu).length&&(F.verbose("Retrieving text of element with sub-menu"),(e=e.clone()).find(b.menu).remove(),e.find(b.menuIcon).remove()),e.data(p.text)!==J?e.data(p.text):t?X.trim(e.html()):X.trim(e.text())},choiceValue:function(e,t){return t=t||F.get.choiceText(e),!!e&&(e.data(p.value)!==J?String(e.data(p.value)):"string"==typeof t?X.trim(t.toLowerCase()):String(t))},inputEvent:function(){var e=A[0];return!!e&&(e.oninput!==J?"input":e.onpropertychange!==J?"propertychange":"keyup")},selectValues:function(){var a={values:[]};return C.find("option").each(function(){var e=X(this),t=e.html(),n=e.attr("disabled"),i=e.attr("value")!==J?e.attr("value"):t;"auto"===m.placeholder&&""===i?a.placeholder=t:a.values.push({name:t,value:i,disabled:n})}),m.placeholder&&"auto"!==m.placeholder&&(F.debug("Setting placeholder value to",m.placeholder),a.placeholder=m.placeholder),m.sortSelect?(a.values.sort(function(e,t){return e.name>t.name?1:-1}),F.debug("Retrieved and sorted values from select",a)):F.debug("Retrieved values from select",a),a},activeItem:function(){return q.filter("."+h.active)},selectedItem:function(){var e=q.not(b.unselectable).filter("."+h.selected);return 0<e.length?e:q.eq(0)},itemWithAdditions:function(e){var t=F.get.item(e),n=F.create.userChoice(e);return n&&0<n.length&&(t=0<t.length?t.add(n):n),t},item:function(i,a){var e,o,s=!1;return i=i!==J?i:F.get.values()!==J?F.get.values():F.get.text(),e=o?0<i.length:i!==J&&null!==i,o=F.is.multiple()&&X.isArray(i),a=""===i||0===i||(a||!1),e&&q.each(function(){var e=X(this),t=F.get.choiceText(e),n=F.get.choiceValue(e,t);if(null!==n&&n!==J)if(o)-1===X.inArray(String(n),i)&&-1===X.inArray(t,i)||(s=s?s.add(e):e);else if(a){if(F.verbose("Ambiguous dropdown value using strict type check",e,i),n===i||t===i)return s=e,!0}else if(String(n)==String(i)||t==i)return F.verbose("Found select item by value",n,i),s=e,!0}),s}},check:{maxSelections:function(e){return!m.maxSelections||((e=e!==J?e:F.get.selectionCount())>=m.maxSelections?(F.debug("Maximum selection count reached"),m.useLabels&&(q.addClass(h.filtered),F.add.message(c.maxSelections)),!0):(F.verbose("No longer at maximum selection count"),F.remove.message(),F.remove.filteredItem(),F.is.searchSelection()&&F.filterItems(),!1))}},restore:{defaults:function(){F.clear(),F.restore.defaultText(),F.restore.defaultValue()},defaultText:function(){var e=F.get.defaultText();e===F.get.placeholderText?(F.debug("Restoring default placeholder text",e),F.set.placeholderText(e)):(F.debug("Restoring default text",e),F.set.text(e))},placeholderText:function(){F.set.placeholderText()},defaultValue:function(){var e=F.get.defaultValue();e!==J&&(F.debug("Restoring default value",e),""!==e?(F.set.value(e),F.set.selected()):(F.remove.activeItem(),F.remove.selectedItem()))},labels:function(){m.allowAdditions&&(m.useLabels||(F.error(v.labels),m.useLabels=!0),F.debug("Restoring selected values"),F.create.userLabels()),F.check.maxSelections()},selected:function(){F.restore.values(),F.is.multiple()?(F.debug("Restoring previously selected values and labels"),F.restore.labels()):F.debug("Restoring previously selected values")},values:function(){F.set.initialLoad(),m.apiSettings&&m.saveRemoteData&&F.get.remoteValues()?F.restore.remoteValues():F.set.selected(),F.remove.initialLoad()},remoteValues:function(){var e=F.get.remoteValues();F.debug("Recreating selected from session data",e),e&&(F.is.single()?X.each(e,function(e,t){F.set.text(t)}):X.each(e,function(e,t){F.add.label(e,t)}))}},read:{remoteData:function(e){var t;if(Y.Storage!==J)return(t=sessionStorage.getItem(e))!==J&&t;F.error(v.noStorage)}},save:{defaults:function(){F.save.defaultText(),F.save.placeholderText(),F.save.defaultValue()},defaultValue:function(){var e=F.get.value();F.verbose("Saving default value as",e),C.data(p.defaultValue,e)},defaultText:function(){var e=F.get.text();F.verbose("Saving default text as",e),C.data(p.defaultText,e)},placeholderText:function(){var e;!1!==m.placeholder&&y.hasClass(h.placeholder)&&(e=F.get.text(),F.verbose("Saving placeholder text as",e),C.data(p.placeholderText,e))},remoteData:function(e,t){Y.Storage!==J?(F.verbose("Saving remote data to session storage",t,e),sessionStorage.setItem(t,e)):F.error(v.noStorage)}},clear:function(){F.is.multiple()&&m.useLabels?F.remove.labels():(F.remove.activeItem(),F.remove.selectedItem()),F.set.placeholderText(),F.clearValue()},clearValue:function(){F.set.value("")},scrollPage:function(e,t){var n=t||F.get.selectedItem(),i=n.closest(b.menu),a=i.outerHeight(),o=i.scrollTop(),s=q.eq(0).outerHeight(),r=Math.floor(a/s),l=(i.prop("scrollHeight"),"up"==e?o-s*r:o+s*r),c=q.not(b.unselectable),u="up"==e?c.index(n)-r:c.index(n)+r,d=("up"==e?0<=u:u<c.length)?c.eq(u):"up"==e?c.first():c.last();0<d.length&&(F.debug("Scrolling page",e,d),n.removeClass(h.selected),d.addClass(h.selected),m.selectOnKeydown&&F.is.single()&&F.set.selectedItem(d),i.scrollTop(l))},set:{filtered:function(){var e=F.is.multiple(),t=F.is.searchSelection(),n=e&&t,i=t?F.get.query():"",a="string"==typeof i&&0<i.length,o=F.get.searchWidth(),s=""!==i;e&&a&&(F.verbose("Adjusting input width",o,m.glyphWidth),A.css("width",o)),a||n&&s?(F.verbose("Hiding placeholder text"),y.addClass(h.filtered)):e&&(!n||s)||(F.verbose("Showing placeholder text"),y.removeClass(h.filtered))},empty:function(){C.addClass(h.empty)},loading:function(){C.addClass(h.loading)},placeholderText:function(e){e=e||F.get.placeholderText(),F.debug("Setting placeholder text",e),F.set.text(e),y.addClass(h.placeholder)},tabbable:function(){F.is.searchSelection()?(F.debug("Added tabindex to searchable dropdown"),A.val("").attr("tabindex",0),D.attr("tabindex",-1)):(F.debug("Added tabindex to dropdown"),C.attr("tabindex")===J&&(C.attr("tabindex",0),D.attr("tabindex",-1)))},initialLoad:function(){F.verbose("Setting initial load"),e=!0},activeItem:function(e){m.allowAdditions&&0<e.filter(b.addition).length?e.addClass(h.filtered):e.addClass(h.active)},partialSearch:function(e){var t=F.get.query().length;A.val(e.substr(0,t))},scrollPosition:function(e,t){var n,i,a,o,s=(e=e||F.get.selectedItem()).closest(b.menu),r=e&&0<e.length;t=t!==J&&t,e&&0<s.length&&r&&(e.position().top,s.addClass(h.loading),n=(i=s.scrollTop())-s.offset().top+e.offset().top,t||(o=i+s.height()<n+5,a=n-5<i),F.debug("Scrolling to active item",n),(t||a||o)&&s.scrollTop(n),s.removeClass(h.loading))},text:function(e){"select"!==m.action&&("combo"==m.action?(F.debug("Changing combo button text",e,I),m.preserveHTML?I.html(e):I.text(e)):(e!==F.get.placeholderText()&&y.removeClass(h.placeholder),F.debug("Changing text",e,y),y.removeClass(h.filtered),m.preserveHTML?y.html(e):y.text(e)))},selectedItem:function(e){var t=F.get.choiceValue(e),n=F.get.choiceText(e,!1),i=F.get.choiceText(e,!0);F.debug("Setting user selection to item",e),F.remove.activeItem(),F.set.partialSearch(n),F.set.activeItem(e),F.set.selected(t,e),F.set.text(i)},selectedLetter:function(e){var t,n=q.filter("."+h.selected),i=0<n.length&&F.has.firstLetter(n,e),a=!1;i&&(t=n.nextAll(q).eq(0),F.has.firstLetter(t,e)&&(a=t)),a||q.each(function(){if(F.has.firstLetter(X(this),e))return a=X(this),!1}),a&&(F.verbose("Scrolling to next value with letter",e),F.set.scrollPosition(a),n.removeClass(h.selected),a.addClass(h.selected),m.selectOnKeydown&&F.is.single()&&F.set.selectedItem(a))},direction:function(e){"auto"==m.direction?(F.remove.upward(),F.can.openDownward(e)?F.remove.upward(e):F.set.upward(e),F.is.leftward(e)||F.can.openRightward(e)||F.set.leftward(e)):"upward"==m.direction&&F.set.upward(e)},upward:function(e){(e||C).addClass(h.upward)},leftward:function(e){(e||D).addClass(h.leftward)},value:function(e,t,n){var i=F.escape.value(e),a=0<k.length,o=F.get.values(),s=e!==J?String(e):e;if(a){if(!m.allowReselection&&s==o&&(F.verbose("Skipping value update already same value",e,o),!F.is.initialLoad()))return;F.is.single()&&F.has.selectInput()&&F.can.extendSelect()&&(F.debug("Adding user option",e),F.add.optionValue(e)),F.debug("Updating input value",i,o),V=!0,k.val(i),!1===m.fireOnInit&&F.is.initialLoad()?F.debug("Input native change event ignored on initial load"):F.trigger.change(),V=!1}else F.verbose("Storing value in metadata",i,k),i!==o&&C.data(p.value,s);F.is.single()&&m.clearable&&(i?F.set.clearable():F.remove.clearable()),!1===m.fireOnInit&&F.is.initialLoad()?F.verbose("No callback on initial load",m.onChange):m.onChange.call(E,e,t,n)},active:function(){C.addClass(h.active)},multiple:function(){C.addClass(h.multiple)},visible:function(){C.addClass(h.visible)},exactly:function(e,t){F.debug("Setting selected to exact values"),F.clear(),F.set.selected(e,t)},selected:function(e,r){var l=F.is.multiple();(r=m.allowAdditions?r||F.get.itemWithAdditions(e):r||F.get.item(e))&&(F.debug("Setting selected menu item to",r),F.is.multiple()&&F.remove.searchWidth(),F.is.single()?(F.remove.activeItem(),F.remove.selectedItem()):m.useLabels&&F.remove.selectedItem(),r.each(function(){var e=X(this),t=F.get.choiceText(e),n=F.get.choiceValue(e,t),i=e.hasClass(h.filtered),a=e.hasClass(h.active),o=e.hasClass(h.addition),s=l&&1==r.length;l?!a||o?(m.apiSettings&&m.saveRemoteData&&F.save.remoteData(t,n),m.useLabels?(F.add.label(n,t,s),F.add.value(n,t,e),F.set.activeItem(e),F.filterActive(),F.select.nextAvailable(r)):(F.add.value(n,t,e),F.set.text(F.add.variables(c.count)),F.set.activeItem(e))):i||(F.debug("Selected active value, removing label"),F.remove.selected(n)):(m.apiSettings&&m.saveRemoteData&&F.save.remoteData(t,n),F.set.text(t),F.set.value(n,t,e),e.addClass(h.active).addClass(h.selected))}))},clearable:function(){L.addClass(h.clear)}},add:{label:function(e,t,n){var i,a=F.is.searchSelection()?A:y,o=F.escape.value(e);m.ignoreCase&&(o=o.toLowerCase()),i=X("<a />").addClass(h.label).attr("data-"+p.value,o).html(f.label(o,t)),i=m.onLabelCreate.call(i,o,t),F.has.label(e)?F.debug("User selection already exists, skipping",o):(m.label.variation&&i.addClass(m.label.variation),!0===n?(F.debug("Animating in label",i),i.addClass(h.hidden).insertBefore(a).transition(m.label.transition,m.label.duration)):(F.debug("Adding selection label",i),i.insertBefore(a)))},message:function(e){var t=D.children(b.message),n=m.templates.message(F.add.variables(e));0<t.length?t.html(n):t=X("<div/>").html(n).addClass(h.message).appendTo(D)},optionValue:function(e){var t=F.escape.value(e);0<k.find('option[value="'+F.escape.string(t)+'"]').length||(F.disconnect.selectObserver(),F.is.single()&&(F.verbose("Removing previous user addition"),k.find("option."+h.addition).remove()),X("<option/>").prop("value",t).addClass(h.addition).html(e).appendTo(k),F.verbose("Adding user addition as an <option>",e),F.observe.select())},userSuggestion:function(e){var t,n=D.children(b.addition),i=F.get.item(e),a=i&&i.not(b.addition).length,o=0<n.length;m.useLabels&&F.has.maxSelections()||(""===e||a?n.remove():(o?(n.data(p.value,e).data(p.text,e).attr("data-"+p.value,e).attr("data-"+p.text,e).removeClass(h.filtered),m.hideAdditions||(t=m.templates.addition(F.add.variables(c.addResult,e)),n.html(t)),F.verbose("Replacing user suggestion with new value",n)):((n=F.create.userChoice(e)).prependTo(D),F.verbose("Adding item choice to menu corresponding with user choice addition",n)),m.hideAdditions&&!F.is.allFiltered()||n.addClass(h.selected).siblings().removeClass(h.selected),F.refreshItems()))},variables:function(e,t){var n,i,a=-1!==e.search("{count}"),o=-1!==e.search("{maxCount}"),s=-1!==e.search("{term}");return F.verbose("Adding templated variables to message",e),a&&(n=F.get.selectionCount(),e=e.replace("{count}",n)),o&&(n=F.get.selectionCount(),e=e.replace("{maxCount}",m.maxSelections)),s&&(i=t||F.get.query(),e=e.replace("{term}",i)),e},value:function(e,t,n){var i,a=F.get.values();F.has.value(e)?F.debug("Value already selected"):""!==e?(i=X.isArray(a)?(i=a.concat([e]),F.get.uniqueArray(i)):[e],F.has.selectInput()?F.can.extendSelect()&&(F.debug("Adding value to select",e,i,k),F.add.optionValue(e)):(i=i.join(m.delimiter),F.debug("Setting hidden input to delimited value",i,k)),!1===m.fireOnInit&&F.is.initialLoad()?F.verbose("Skipping onadd callback on initial load",m.onAdd):m.onAdd.call(E,e,t,n),F.set.value(i,e,t,n),F.check.maxSelections()):F.debug("Cannot select blank values from multiselect")}},remove:{active:function(){C.removeClass(h.active)},activeLabel:function(){C.find(b.label).removeClass(h.active)},empty:function(){C.removeClass(h.empty)},loading:function(){C.removeClass(h.loading)},initialLoad:function(){e=!1},upward:function(e){(e||C).removeClass(h.upward)},leftward:function(e){(e||D).removeClass(h.leftward)},visible:function(){C.removeClass(h.visible)},activeItem:function(){q.removeClass(h.active)},filteredItem:function(){m.useLabels&&F.has.maxSelections()||(m.useLabels&&F.is.multiple()?q.not("."+h.active).removeClass(h.filtered):q.removeClass(h.filtered),F.remove.empty())},optionValue:function(e){var t=F.escape.value(e),n=k.find('option[value="'+F.escape.string(t)+'"]');0<n.length&&n.hasClass(h.addition)&&(s&&(s.disconnect(),F.verbose("Temporarily disconnecting mutation observer")),n.remove(),F.verbose("Removing user addition as an <option>",t),s&&s.observe(k[0],{childList:!0,subtree:!0}))},message:function(){D.children(b.message).remove()},searchWidth:function(){A.css("width","")},searchTerm:function(){F.verbose("Cleared search term"),A.val(""),F.set.filtered()},userAddition:function(){q.filter(b.addition).remove()},selected:function(e,t){if(!(t=m.allowAdditions?t||F.get.itemWithAdditions(e):t||F.get.item(e)))return!1;t.each(function(){var e=X(this),t=F.get.choiceText(e),n=F.get.choiceValue(e,t);F.is.multiple()?m.useLabels?(F.remove.value(n,t,e),F.remove.label(n)):(F.remove.value(n,t,e),0===F.get.selectionCount()?F.set.placeholderText():F.set.text(F.add.variables(c.count))):F.remove.value(n,t,e),e.removeClass(h.filtered).removeClass(h.active),m.useLabels&&e.removeClass(h.selected)})},selectedItem:function(){q.removeClass(h.selected)},value:function(e,t,n){var i,a=F.get.values();F.has.selectInput()?(F.verbose("Input is <select> removing selected option",e),i=F.remove.arrayValue(e,a),F.remove.optionValue(e)):(F.verbose("Removing from delimited values",e),i=(i=F.remove.arrayValue(e,a)).join(m.delimiter)),!1===m.fireOnInit&&F.is.initialLoad()?F.verbose("No callback on initial load",m.onRemove):m.onRemove.call(E,e,t,n),F.set.value(i,t,n),F.check.maxSelections()},arrayValue:function(t,e){return X.isArray(e)||(e=[e]),e=X.grep(e,function(e){return t!=e}),F.verbose("Removed value from delimited string",t,e),e},label:function(e,t){var n=C.find(b.label).filter("[data-"+p.value+'="'+F.escape.string(e)+'"]');F.verbose("Removing label",n),n.remove()},activeLabels:function(e){e=e||C.find(b.label).filter("."+h.active),F.verbose("Removing active label selections",e),F.remove.labels(e)},labels:function(e){e=e||C.find(b.label),F.verbose("Removing labels",e),e.each(function(){var e=X(this),t=e.data(p.value),n=t!==J?String(t):t,i=F.is.userValue(n);!1!==m.onLabelRemove.call(e,t)?(F.remove.message(),i?(F.remove.value(n),F.remove.label(n)):F.remove.selected(n)):F.debug("Label remove callback cancelled removal")})},tabbable:function(){F.is.searchSelection()?(F.debug("Searchable dropdown initialized"),A.removeAttr("tabindex")):(F.debug("Simple selection dropdown initialized"),C.removeAttr("tabindex")),D.removeAttr("tabindex")},clearable:function(){L.removeClass(h.clear)}},has:{menuSearch:function(){return F.has.search()&&0<A.closest(D).length},search:function(){return 0<A.length},sizer:function(){return 0<T.length},selectInput:function(){return k.is("select")},minCharacters:function(e){return!m.minCharacters||(e=e!==J?String(e):String(F.get.query())).length>=m.minCharacters},firstLetter:function(e,t){var n;return!(!e||0===e.length||"string"!=typeof t)&&(n=F.get.choiceText(e,!1),(t=t.toLowerCase())==String(n).charAt(0).toLowerCase())},input:function(){return 0<k.length},items:function(){return 0<q.length},menu:function(){return 0<D.length},message:function(){return 0!==D.children(b.message).length},label:function(e){var t=F.escape.value(e),n=C.find(b.label);return m.ignoreCase&&(t=t.toLowerCase()),0<n.filter("[data-"+p.value+'="'+F.escape.string(t)+'"]').length},maxSelections:function(){return m.maxSelections&&F.get.selectionCount()>=m.maxSelections},allResultsFiltered:function(){var e=q.not(b.addition);return e.filter(b.unselectable).length===e.length},userSuggestion:function(){return 0<D.children(b.addition).length},query:function(){return""!==F.get.query()},value:function(e){return m.ignoreCase?F.has.valueIgnoringCase(e):F.has.valueMatchingCase(e)},valueMatchingCase:function(e){var t=F.get.values();return!!(X.isArray(t)?t&&-1!==X.inArray(e,t):t==e)},valueIgnoringCase:function(n){var e=F.get.values(),i=!1;return X.isArray(e)||(e=[e]),X.each(e,function(e,t){if(String(n).toLowerCase()==String(t).toLowerCase())return!(i=!0)}),i}},is:{active:function(){return C.hasClass(h.active)},animatingInward:function(){return D.transition("is inward")},animatingOutward:function(){return D.transition("is outward")},bubbledLabelClick:function(e){return X(e.target).is("select, input")&&0<C.closest("label").length},bubbledIconClick:function(e){return 0<X(e.target).closest(L).length},alreadySetup:function(){return C.is("select")&&C.parent(b.dropdown).data(x)!==J&&0===C.prev().length},animating:function(e){return e?e.transition&&e.transition("is animating"):D.transition&&D.transition("is animating")},leftward:function(e){return(e||D).hasClass(h.leftward)},disabled:function(){return C.hasClass(h.disabled)},focused:function(){return G.activeElement===C[0]},focusedOnSearch:function(){return G.activeElement===A[0]},allFiltered:function(){return(F.is.multiple()||F.has.search())&&!(0==m.hideAdditions&&F.has.userSuggestion())&&!F.has.message()&&F.has.allResultsFiltered()},hidden:function(e){return!F.is.visible(e)},initialLoad:function(){return e},inObject:function(n,e){var i=!1;return X.each(e,function(e,t){if(t==n)return i=!0}),i},multiple:function(){return C.hasClass(h.multiple)},remote:function(){return m.apiSettings&&F.can.useAPI()},single:function(){return!F.is.multiple()},selectMutation:function(e){var n=!1;return X.each(e,function(e,t){if(t.target&&X(t.target).is("select"))return n=!0}),n},search:function(){return C.hasClass(h.search)},searchSelection:function(){return F.has.search()&&1===A.parent(b.dropdown).length},selection:function(){return C.hasClass(h.selection)},userValue:function(e){return-1!==X.inArray(e,F.get.userValues())},upward:function(e){return(e||C).hasClass(h.upward)},visible:function(e){return e?e.hasClass(h.visible):D.hasClass(h.visible)},verticallyScrollableContext:function(){var e=S.get(0)!==Y&&S.css("overflow-y");return"auto"==e||"scroll"==e},horizontallyScrollableContext:function(){var e=S.get(0)!==Y&&S.css("overflow-X");return"auto"==e||"scroll"==e}},can:{activate:function(e){return!!m.useLabels||(!F.has.maxSelections()||!(!F.has.maxSelections()||!e.hasClass(h.active)))},openDownward:function(e){var t,n,i=e||D,a=!0;return i.addClass(h.loading),n={context:{offset:S.get(0)===Y?{top:0,left:0}:S.offset(),scrollTop:S.scrollTop(),height:S.outerHeight()},menu:{offset:i.offset(),height:i.outerHeight()}},F.is.verticallyScrollableContext()&&(n.menu.offset.top+=n.context.scrollTop),a=(t={above:n.context.scrollTop<=n.menu.offset.top-n.context.offset.top-n.menu.height,below:n.context.scrollTop+n.context.height>=n.menu.offset.top-n.context.offset.top+n.menu.height}).below?(F.verbose("Dropdown can fit in context downward",t),!0):t.below||t.above?(F.verbose("Dropdown cannot fit below, opening upward",t),!1):(F.verbose("Dropdown cannot fit in either direction, favoring downward",t),!0),i.removeClass(h.loading),a},openRightward:function(e){var t,n,i=e||D,a=!0;return i.addClass(h.loading),n={context:{offset:S.get(0)===Y?{top:0,left:0}:S.offset(),scrollLeft:S.scrollLeft(),width:S.outerWidth()},menu:{offset:i.offset(),width:i.outerWidth()}},F.is.horizontallyScrollableContext()&&(n.menu.offset.left+=n.context.scrollLeft),(t=n.menu.offset.left-n.context.offset.left+n.menu.width>=n.context.scrollLeft+n.context.width)&&(F.verbose("Dropdown cannot fit in context rightward",t),a=!1),i.removeClass(h.loading),a},click:function(){return U||"click"==m.on},extendSelect:function(){return m.allowAdditions||m.apiSettings},show:function(){return!F.is.disabled()&&(F.has.items()||F.has.message())},useAPI:function(){return X.fn.api!==J}},animate:{show:function(e,t){var n,i=t||D,a=t?function(){}:function(){F.hideSubMenus(),F.hideOthers(),F.set.active()};e=X.isFunction(e)?e:function(){},F.verbose("Doing menu show animation",i),F.set.direction(t),n=F.get.transition(t),F.is.selection()&&F.set.scrollPosition(F.get.selectedItem(),!0),(F.is.hidden(i)||F.is.animating(i))&&("none"==n?(a(),i.transition("show"),e.call(E)):X.fn.transition!==J&&C.transition("is supported")?i.transition({animation:n+" in",debug:m.debug,verbose:m.verbose,duration:m.duration,queue:!0,onStart:a,onComplete:function(){e.call(E)}}):F.error(v.noTransition,n))},hide:function(e,t){var n=t||D,i=(t?m.duration:m.duration,t?function(){}:function(){F.can.click()&&F.unbind.intent(),F.remove.active()}),a=F.get.transition(t);e=X.isFunction(e)?e:function(){},(F.is.visible(n)||F.is.animating(n))&&(F.verbose("Doing menu hide animation",n),"none"==a?(i(),n.transition("hide"),e.call(E)):X.fn.transition!==J&&C.transition("is supported")?n.transition({animation:a+" out",duration:m.duration,debug:m.debug,verbose:m.verbose,queue:!1,onStart:i,onComplete:function(){e.call(E)}}):F.error(v.transition))}},hideAndClear:function(){F.remove.searchTerm(),F.has.maxSelections()||(F.has.search()?F.hide(function(){F.remove.filteredItem()}):F.hide())},delay:{show:function(){F.verbose("Delaying show event to ensure user intent"),clearTimeout(F.timer),F.timer=setTimeout(F.show,m.delay.show)},hide:function(){F.verbose("Delaying hide event to ensure user intent"),clearTimeout(F.timer),F.timer=setTimeout(F.hide,m.delay.hide)}},escape:{value:function(e){var t=X.isArray(e),n="string"==typeof e,i=!n&&!t,a=n&&-1!==e.search(d.quote),o=[];return i||!a?e:(F.debug("Encoding quote values for use in select",e),t?(X.each(e,function(e,t){o.push(t.replace(d.quote,"&quot;"))}),o):e.replace(d.quote,"&quot;"))},string:function(e){return(e=String(e)).replace(d.escape,"\\$&")}},setting:function(e,t){if(F.debug("Changing setting",e,t),X.isPlainObject(e))X.extend(!0,m,e);else{if(t===J)return m[e];X.isPlainObject(m[e])?X.extend(!0,m[e],t):m[e]=t}},internal:function(e,t){if(X.isPlainObject(e))X.extend(!0,F,e);else{if(t===J)return F[e];F[e]=t}},debug:function(){!m.silent&&m.debug&&(m.performance?F.performance.log(arguments):(F.debug=Function.prototype.bind.call(console.info,console,m.name+":"),F.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?F.performance.log(arguments):(F.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),F.verbose.apply(console,arguments)))},error:function(){m.silent||(F.error=Function.prototype.bind.call(console.error,console,m.name+":"),F.error.apply(console,arguments))},performance:{log:function(e){var t,n;m.performance&&(n=(t=(new Date).getTime())-(K||t),K=t,W.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:E,"Execution Time":n})),clearTimeout(F.performance.timer),F.performance.timer=setTimeout(F.performance.display,500)},display:function(){var e=m.name+":",n=0;K=!1,clearTimeout(F.performance.timer),X.each(W,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",N&&(e+=" '"+N+"'"),(console.group!==J||console.table!==J)&&0<W.length&&(console.groupCollapsed(e),console.table?console.table(W):X.each(W,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),W=[]}},invoke:function(i,e,t){var a,o,n,s=M;return e=e||Q,t=E||t,"string"==typeof i&&s!==J&&(i=i.split(/[\. ]/),a=i.length-1,X.each(i,function(e,t){var n=e!=a?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(X.isPlainObject(s[n])&&e!=a)s=s[n];else{if(s[n]!==J)return o=s[n],!1;if(!X.isPlainObject(s[t])||e==a)return s[t]!==J?o=s[t]:F.error(v.method,i),!1;s=s[t]}})),X.isFunction(o)?n=o.apply(t,e):o!==J&&(n=o),X.isArray(P)?P.push(n):P!==J?P=[P,n]:n!==J&&(P=n),o}};$?(M===J&&F.initialize(),F.invoke(B)):(M!==J&&M.invoke("destroy"),F.initialize())}),P!==J?P:H},X.fn.dropdown.settings={silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",action:"activate",values:!1,clearable:!1,apiSettings:!1,selectOnKeydown:!0,minCharacters:0,filterRemoteData:!1,saveRemoteData:!0,throttle:200,context:Y,direction:"auto",keepOnScreen:!0,match:"both",fullTextSearch:!1,placeholder:"auto",preserveHTML:!0,sortSelect:!1,forceSelection:!0,allowAdditions:!1,ignoreCase:!1,hideAdditions:!0,maxSelections:!1,useLabels:!0,delimiter:",",showOnFocus:!0,allowReselection:!1,allowTab:!0,allowCategorySelection:!1,fireOnInit:!1,transition:"auto",duration:200,glyphWidth:1.037,label:{transition:"scale",duration:200,variation:!1},delay:{hide:300,show:200,search:20,touch:50},onChange:function(e,t,n){},onAdd:function(e,t,n){},onRemove:function(e,t,n){},onLabelSelect:function(e){},onLabelCreate:function(e,t){return X(this)},onLabelRemove:function(e){return!0},onNoResults:function(e){return!0},onShow:function(){},onHide:function(){},name:"Dropdown",namespace:"dropdown",message:{addResult:"Add <b>{term}</b>",count:"{count} selected",maxSelections:"Max {maxCount} selections",noResults:"No results found.",serverError:"There was an error contacting the server"},error:{action:"You called a dropdown action that was not defined",alreadySetup:"Once a select has been initialized behaviors must be called on the created ui dropdown",labels:"Allowing user additions currently requires the use of labels.",missingMultiple:"<select> requires multiple property to be set to correctly preserve multiple values",method:"The method you called is not defined.",noAPI:"The API module is required to load resources remotely",noStorage:"Saving remote data requires session storage",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s]/g,quote:/"/g},metadata:{defaultText:"defaultText",defaultValue:"defaultValue",placeholderText:"placeholder",text:"text",value:"value"},fields:{remoteValues:"results",values:"values",disabled:"disabled",name:"name",value:"value",text:"text"},keys:{backspace:8,delimiter:188,deleteKey:46,enter:13,escape:27,pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},selector:{addition:".addition",dropdown:".ui.dropdown",hidden:".hidden",icon:"> .dropdown.icon",input:'> input[type="hidden"], > select',item:".item",label:"> .label",remove:"> .label > .delete.icon",siblingLabel:".label",menu:".menu",message:".message",menuIcon:".dropdown.icon",search:"input.search, .menu > .search > input, .menu input.search",sizer:"> input.sizer",text:"> .text:not(.icon)",unselectable:".disabled, .filtered"},className:{active:"active",addition:"addition",animating:"animating",clear:"clear",disabled:"disabled",empty:"empty",dropdown:"ui dropdown",filtered:"filtered",hidden:"hidden transition",item:"item",label:"ui label",loading:"loading",menu:"menu",message:"message",multiple:"multiple",placeholder:"default",sizer:"sizer",search:"search",selected:"selected",selection:"selection",upward:"upward",leftward:"left",visible:"visible"}},X.fn.dropdown.settings.templates={dropdown:function(e){var t=e.placeholder||!1,n=(e.values,"");return n+='<i class="dropdown icon"></i>',e.placeholder?n+='<div class="default text">'+t+"</div>":n+='<div class="text"></div>',n+='<div class="menu">',X.each(e.values,function(e,t){n+=t.disabled?'<div class="disabled item" data-value="'+t.value+'">'+t.name+"</div>":'<div class="item" data-value="'+t.value+'">'+t.name+"</div>"}),n+="</div>"},menu:function(e,a){var t=e[a.values]||{},o="";return X.each(t,function(e,t){var n=t[a.text]?'data-text="'+t[a.text]+'"':"",i=t[a.disabled]?"disabled ":"";o+='<div class="'+i+'item" data-value="'+t[a.value]+'"'+n+">",o+=t[a.name],o+="</div>"}),o},label:function(e,t){return t+'<i class="delete icon"></i>'},message:function(e){return e},addition:function(e){return e}}}(jQuery,window,document);
