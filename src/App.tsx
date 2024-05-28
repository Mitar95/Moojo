import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';

const queryClient = new QueryClient();

const App = () => {

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <QueryClientProvider client={queryClient}>
          <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'}/>
          <AppNavigator />
          <Toast position='bottom' bottomOffset={52}/>
        </QueryClientProvider>
      </View>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
