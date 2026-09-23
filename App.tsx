import { StyleSheet, Text, View } from 'react-native';
import { useCounter } from './hooks/useCounter';
import { FAB } from './components/FAB';

export default function App() {
  const { counter, increase, decrease, resetCounter } = useCounter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador React Native</Text>

      <Text testID="counter-value" style={styles.counter}>
        {counter}
      </Text>

      <View style={styles.row}>
        <FAB
          label="-1"
          testID="decrease-button"
          onPress={decrease}
        />

        <FAB
          label="+1"
          testID="increase-button"
          onPress={increase}
        />
      </View>

      <FAB
        label="Reiniciar"
        testID="reset-button"
        variant="secondary"
        onPress={resetCounter}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#0f172a',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  counter: {
    color: '#22d3ee',
    fontSize: 120,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },

});