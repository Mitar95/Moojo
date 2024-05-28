import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Offer } from '../services/offersApi';

const OfferCard = ({offer, onPress}: {offer: Offer, onPress: () => void}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{offer.title}</Text>
      <Text>{offer.description}</Text>
      <View style={styles.details}>
        <Text>{`Cashback: ${offer.cashbackAmount}%`}</Text>
        <Text>{`Expires: ${offer.expirationDate}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    marginVertical: 8,
    rowGap: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    textAlign: 'justify', 
  }
});

export default OfferCard;
