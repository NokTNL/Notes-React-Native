import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import { useAppContext } from './AppContext'
import { GameScreen } from './screens/GameScreen'
import { StartGameScreen } from './screens/StartGameScreen'

export function CustomApp() {
  const { userNumber } = useAppContext()
  return (
    <LinearGradient style={styles.rootScreen} colors={['#4e0329', '#ddb52f']}>
      <ImageBackground
        style={styles.rootScreen}
        source={require('./assets/background.png')}
        resizeMode="cover"
        imageStyle={styles.bgImage}
      >
        {/* SafeAreaView adds paddings to the top of the screen to avoid the camera area etc. Works on iOS only */}
        <SafeAreaView>
          {userNumber === null ? <StartGameScreen /> : <GameScreen />}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.2,
  },
})
