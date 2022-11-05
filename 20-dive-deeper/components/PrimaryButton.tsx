import { PropsWithChildren } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type PrimaryButtonProps = {
  onPress?: () => void
}

export const PrimaryButton = ({
  onPress,
  children,
}: PropsWithChildren & PrimaryButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: '#640233' }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#72063c',
    borderRadius: 28,
    overflow: 'hidden',
    elevation: 2,
    margin: 4,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: 'white',
    textAlign: 'center',
  },
})
