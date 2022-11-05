import { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import { useAppContext } from '../AppContext'
import { PrimaryButton } from '../components/PrimaryButton'

export const StartGameScreen = () => {
  const [inputNumber, setInputNumber] = useState('')
  const { setUserNumber } = useAppContext()

  const handleChangeInput = (newNumber: string) => {
    setInputNumber(newNumber)
  }

  const handleReset = () => {
    setInputNumber('')
  }

  const handleConfirm = () => {
    const finalNumber = parseInt(inputNumber)
    if (isNaN(finalNumber) || finalNumber < 1 || finalNumber > 99) {
      Alert.alert('Invalid Number', 'The number should be between 1 - 99.', [
        { text: 'Okay' },
      ])
      return
    }
    setUserNumber(finalNumber)
  }

  return (
    <View style={styles.startGameScreen}>
      <Text style={styles.header}>Type a number!</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="numeric"
        autoComplete="off"
        value={inputNumber}
        onChangeText={handleChangeInput}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  startGameScreen: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#4e0329',
    alignItems: 'center',
    // android implementation of shadow
    elevation: 10,
    // iOS implementation of shadow; radius & opacity are REQUIRED
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 3,
    shadowOpacity: 0.2,
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  numberInput: {
    height: 50,
    width: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#ddb52f',
    marginBottom: 10,
    fontSize: 32,
    textAlign: 'center',
    color: '#ddb52f',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
})
