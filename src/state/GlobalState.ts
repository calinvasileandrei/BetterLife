import { createState, useState } from '@hookstate/core'
interface GlobalStateI {userDataPresent:boolean,user:any,listener:any}

const globalState = createState({currentUser:null,pending:true});


export default globalState;