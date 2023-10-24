import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Choose your desired icon library

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Your home screen content */}
      {/* Add posts here */}
      
      {/* Add the Post button */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: 'blue',
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('PostScreen')}
      >
        <Icon name="plus" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
