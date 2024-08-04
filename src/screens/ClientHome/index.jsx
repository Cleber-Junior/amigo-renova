import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import {TicketContext} from '../../context/TicketProvider';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
import Loading from '../../components/Loading';

const ClientHome = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 p-4">
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default ClientHome;
