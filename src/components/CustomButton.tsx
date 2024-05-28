import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import { colors } from '../constants/colors';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  loading?: boolean;
  loadingText?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title, loading = false, disabled = false, loadingText = 'Loading...' }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.button, disabled && styles.buttonDisabled, loading && styles.buttonLoading]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="small" color="#fff" />
          <Text style={styles.buttonText}>{loadingText}</Text>
        </View>
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.app,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonLoading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  spinnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
});

export default CustomButton;
