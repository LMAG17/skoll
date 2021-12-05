import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { onFacebookButtonPress } from '../../firebase/auth';

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