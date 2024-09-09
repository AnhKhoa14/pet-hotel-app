import { View, Text, Image, Pressable } from 'react-native'
import React, { useCallback } from 'react'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import * as WebBrowser from 'expo-web-browser'
import { router } from 'expo-router'

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      })

      if (createdSessionId) {
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])

  return (
    <View style={{
      backgroundColor: '#FFF',
      height: '100%',
    }}>
      <Text style={{
        fontSize: 25,
        textAlign: 'center',
        marginTop: 60,
        color: '#4EA0B7',
        fontFamily: 'nunito-bold',
      }}>Welcome to APEHOME</Text>
      <Image source={require('./../../assets/images/logo.png')} 
        style={{ width: 300, height: 400, alignSelf: 'center'}}
      />

      <View style={{
        padding: 20,
        display: 'flex',
        alignItems: 'center',
      }}>
        <Text style={{
          fontSize: 16,
          marginBottom: 10,
          fontFamily: 'nunito',
          color: '#4EA0B7',
        }}>Where all of your pets’ needs are right here!</Text>

        <Pressable style={{
          padding: 20,
          marginTop: 40,
          backgroundColor: '#BEF0FF',
          borderRadius: 50,
          width: 300, 
        }}>
          <Text style={{
            textAlign: 'center',
            fontSize: 16,
            color: '#4EA0B7',
            fontFamily: 'nunito-bold',
          }}>Create Account</Text>
        </Pressable>
        <Pressable onPress={() => router.push('/(tabs)/home')} style={{
          padding: 20,
          marginTop: 20,
          backgroundColor: '#BEF0FF',
          borderRadius: 50,
          width: 300, 
        }}>
          <Text style={{
            textAlign: 'center',
            fontSize: 16,
            color: '#4EA0B7',
            fontFamily: 'nunito-bold',
          }}>Login</Text>
        </Pressable>
      </View>

    </View>
  )
}