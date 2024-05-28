import React, { FC, useEffect, useState } from 'react';
import { Text, StyleSheet, Alert, ScrollView, Animated, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { LinearGradient } from 'react-native-linear-gradient';
import { Easing } from 'react-native-reanimated';
import { AppStackParamList } from '../navigation/AppNavigator';
import { RouteProp } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import Toast from 'react-native-toast-message';
import { colors } from '../constants/colors';

type OfferDetailsRouteProp = { route: RouteProp<AppStackParamList, 'OfferDetails'> };

const OfferDetails: FC<OfferDetailsRouteProp> = ({ route }) => {
  const {
    params: { offer },
  } = route;

  const [loading, setLoading] = useState(false);
  let scale = new Animated.Value(0);

  const animate = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animate();
  }, []);

  const claimOffer = () => {
    Alert.alert(
      'Confirm Claim',
      'Are you sure you want to claim this offer?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Claim',
          onPress: () => {
            setLoading(true);
            setTimeout(() => {
              const success = Math.random() > 0.2; // 20% chance to fail
              
              if (success) {
                Toast.show({
                  type: 'success',
                  text1: 'Success',
                  text2: 'You have claimed the offer!'
                });
              } else {
                Toast.show({
                  type: 'error',
                  text1: 'Claiming Failed',
                  text2: 'Please try again.'
                });  
              }

              setLoading(false);
            }, Math.random() * 2500); // random api call delay (0-2500ms)
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Animated.View style={[styles.imageContainer, { transform: [{ scale }] }]}>
        <FastImage
          style={styles.image}
          source={{ uri: offer.retailerLogo, priority: FastImage.priority.high }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </Animated.View>

      <LinearGradient colors={['#ffffff', '#e9f0f0']} style={styles.detailsContainer}>
        <Text style={styles.title}>{offer.title}</Text>
        <Text style={styles.description}>{offer.description}</Text>

        <View style={styles.cashbackContainer}>
          <Text style={styles.cashback}>{`Cashback: ${offer.cashbackAmount}%`}</Text>
          <Text style={styles.expiration}>{`Expires: ${offer.expirationDate}`}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.terms}>{`Terms: ${offer.termsAndConditions}`}</Text>
          <CustomButton title='Claim Offer' onPress={claimOffer} loading={loading} loadingText='Claiming...' />
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  imageContainer: {
    height: 250,
    maxHeight: '50%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    rowGap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',

  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
  },
  cashbackContainer: { justifyContent: 'center', flex: 1, alignItems: 'center', rowGap: 4 },
  cashback: {
    fontSize: 18,
    color: colors.app,
    fontWeight: 'bold',
  },
  expiration: {
    fontSize: 16,
    color: '#555',
  },
  terms: {
    fontSize: 14,
    color: '#999',
    textAlign: 'justify',
  },
  buttonContainer: { justifyContent: 'flex-end', rowGap: 12 },
});

export default OfferDetails;
