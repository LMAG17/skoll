const fs = require('fs');
const path = require('path');
const { argv } = require('yargs');

const { folder } = argv;

const acceptedFolders = ['src', 'release'];

function writeFile(file, string) {
    if (fs.existsSync(file)) {
        fs.writeFileSync(file, string);
        return true;
    }

    console.log(`File "${file}" not found.`);
    process.exit(1);
}


function validateParams() {
    console.log(`Validating params...`);
    if (!folder) {
        console.log(
            `Error.  Please inform a valid environment: ${acceptedFolders.join(', ')}.`,
        );
        process.exit(1);
    }

    if (!acceptedFolders.includes(folder)) {
        console.log(
            `Error. Wrong folder, choose one of those: ${acceptedFolders.join(
                ', ',
            )}.`,
        );
        process.exit(1);
    }
}

function changeAllFile() {
    console.log(`Setting path to release`);

    const importerString = `import { AppRegistry, LogBox } from 'react-native';
import App from './${folder}/App';
import { name as appName } from './app.json';
import React from 'react';
import messaging from '@react-native-firebase/messaging';
import { localNotificationService } from './src/utils/PushNotifications/LocalNotificationService'

messaging().setBackgroundMessageHandler(async () => null);

localNotificationService.createChannel()

function HeadlessCheck({ isHeadless }) {
    LogBox.ignoreAllLogs(true)
    if (isHeadless) return null;
    return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);`;

    const envIndexFileLocation = path.resolve(
        __dirname,
        '..',
        'index.js',
    );

    writeFile(envIndexFileLocation, importerString);
    console.log(`Path successfully setted to /${folder}/App.js`);
    console.log(`NO OLVIDAR EL VERSION CODE`);
    process.exit(0);
}


validateParams()
changeAllFile();