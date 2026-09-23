import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  label: string;
  onPress: () => void;
  testID?: string;
  variant?: 'primary' | 'secondary';
}

export const FAB = ({
  label,
  onPress,
  testID,
  variant = 'primary',
}: Props) => {
  return (
    <Pressable
      testID={testID}
      onPress={onPress}
      style={[
        styles.button,
        variant === 'secondary' && styles.secondaryButton,
      ]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 100,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#0891b2',
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#7c3aed',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});