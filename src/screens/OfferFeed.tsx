import React, { useCallback } from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import OfferCard from '../components/OfferCard';
import { QueryKeys } from '../services/api';
import { useQuery } from 'react-query';
import { fetchOffers } from '../services/offersApi';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppStackParamList } from '../navigation/AppNavigator';
import Loader from '../components/Loader';

const OfferFeed = () => {

  const { navigate } = useNavigation<NavigationProp<AppStackParamList>>();

  const { isLoading, error, data } = useQuery([QueryKeys.OFFERS], fetchOffers, {staleTime: 60 * 1000});
  const offers = data?.data ?? [];

  const renderItem = useCallback(({ item }) => (
    <OfferCard
      offer={item}
      onPress={() => navigate('OfferDetails', { offer: item })}
    />
  ), [navigate]);

  if (isLoading) {
    return (
      <View testID='loader' style={styles.emptyContainer}>
        <Loader />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.error}>
          {`${error}`}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={offers}
        keyExtractor={item => item.id?.toString()}
        contentContainerStyle={styles.content}
        renderItem={renderItem}
        ListEmptyComponent={(
          <View style={styles.emptyContainer}>
            <Text>
              {'No Offers Found'}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  error: {
    color: 'red',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default OfferFeed;
