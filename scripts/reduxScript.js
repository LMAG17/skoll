/****
 * run example: script % node ./scripts/reduxScript.js --name="isNetwork" --typePayload="boolean" --interface=false
 * 
 * 
 */
const fs = require('fs');
const path = require('path');
const { argv } = require('yargs');

const { name, typePayload, interface } = argv;

const pathLocation = path.resolve(
    __dirname,
    '..',
    'src'
);

const pathBase = pathLocation + '/redux/';
const reducer = pathBase + 'reducers/';
const action = pathBase + 'actions/';
const middleware = pathLocation + '/middlewares/';

const strOne = name.substring(0, 1).toUpperCase();
const strComplete = name.substring(1, name.length);
const upperName = strOne + strComplete;
const upperNameComplete = name.toUpperCase();


/*******************Init creation reducer ********************/

//Creation directory reducer
const directoryReducer = reducer + name;
if (!fs.existsSync(directoryReducer)) {
    fs.mkdir(reducer + name, function (err) {
        if (err) {
            return console.error(err)
        }

        console.log("create reducer directory succesfully! ", reducer + name);
    });
}

//content reducer
const bodyReducer = `import produce from 'immer';
 import { AppState${interface ? ", " + typePayload : ""} } from '../../store/types';
 
 export function set${upperName}(state: AppState, payload: ${typePayload}): AppState {
   return produce(state, (draft) => {
     draft.${name} = payload;
   });
 }`;

//Creation index reducer
const pathReducer = `${reducer}${name}/index.tsx`;
setTimeout(() => {
    fs.writeFile(pathReducer, bodyReducer, function (err) {
        if (err) {
            return console.error(err)
        }

        console.log("creado ", pathReducer);
    });
}, 2000);

/****************Finish creation reducer ***************/


/****************Init creation actions *****************/

//Creation directory actions
const directoryActions = action + name;
if (!fs.existsSync(directoryActions)) {
    fs.mkdir(action + name, function (err) {
        if (err) {
            return console.error(err)
        }

        console.log("Create action directoy succesfully! ", action + name);
    });
}


//Content action
const bodyAction = `import { AppState${interface ? ", " + typePayload : ""} } from '../../store/types';
 import { ActionBuilder } from '../types';
 
 export enum ${upperName}ActionTypes {
   get${upperName}= 'GET_${upperNameComplete}',
 }
 
 export type Set${upperName}Action = ActionBuilder<
 ${upperName}ActionTypes.get${upperName},
 ${typePayload},
   AppState
 >;
 
 export type ${upperName}Actions = Set${upperName}Action;`;

//Creation actions
const pathActions = `${action}${name}/${upperName}Actions.tsx`;
setTimeout(() => {
    fs.writeFile(pathActions, bodyAction, function (err) {
        if (err) {
            return console.error(err)
        }

        console.log("action creado ", pathActions);
    });
}, 2000);

//Content actionCreators
const bodyActionCreators = `import { set${upperName} } from '../../reducers/${name}';
 import { ${upperName}ActionTypes, Set${upperName}Action } from './${upperName}Actions';
 ${interface ? "import { " + typePayload + " } from '../../store/types';" : ""}
 
 
 export const set${upperName}Creator = (payload: ${typePayload}): Set${upperName}Action => ({
   type: ${upperName}ActionTypes.get${upperName},
   payload,
   reducer: set${upperName},
 });`;

//Creation actions
const pathActionsCreator = `${action}${name}/${upperName}ActionsCreators.tsx`;
setTimeout(() => {
    fs.writeFile(pathActionsCreator, bodyActionCreators, function (err) {
        if (err) {
            return console.error(err)
        }

        console.log("createAction creado ", pathActionsCreator);
    });
}, 2000);

/************** Finish Actions ***********/

/*******************Init creation middleware ********************/

//Creation directory middleware
const directoryMiddleware = middleware + name;
if (!fs.existsSync(directoryMiddleware)) {
    fs.mkdir(middleware + name, function (err) {
        if (err) {
            return console.error(err)
        }

        console.log("Directorio creado succesfully! ", middleware + name);
    });
}
//content middleware
const bodyMiddleware = `import { Dispatch } from 'react';
 import { set${upperName}Creator } from '../../redux/actions/${name}/${upperName}ActionsCreators';
 ${interface ? "import { " + typePayload + " } from '../../redux/store/types';" : ""}

 export function set${upperName}(${name}: ${typePayload}) {
   
   return function (dispatch: Dispatch<any>) {
     dispatch(
         set${upperName}Creator(${name}),
     );
   };
 }`;

//Creation middleware
const pathMiddleware = `${middleware}${name}/${name}Middleware.tsx`;
setTimeout(() => {
    fs.writeFile(pathMiddleware, bodyMiddleware, function (err) {
        if (err) {
            return console.error(err)
        }

        console.log("create Middleware ", pathMiddleware);
    });
}, 2000);

/****************Finish creation reducer ***************/ 