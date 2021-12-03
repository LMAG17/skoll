import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

async function onFacebookButtonPress() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  console.log("result", result);
  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();
  console.log("data", data);
  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  console.log("facebookCredential", facebookCredential);
  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}
export default function FacebookSignIn() {
  const [displayName, setDisplayName] = useState()
  return (
    <View>
      {displayName && <Text>{displayName}</Text>}
      <Button
        title="Facebook Sign-In"
        onPress={() => onFacebookButtonPress().then((res) => {
          console.log('Signed in with Facebook!', res)
          setDisplayName(res.user.displayName)
        })}
      />
    </View>
  );
}