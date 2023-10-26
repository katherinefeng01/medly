import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Choose your desired icon library

const HomeScreen = ({ navigation , route }) => {
    // Fetch user post data, i.e., category, caption, image
    const postData = route?.params?.postData;
    const category = postData?.selectedCategory;
    const caption = postData?.caption;
    const image = postData?.image;

    return (
        // Display user post data 
        // Display post button 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{category}</Text>
            <Text>{caption}</Text>
            {image && (
                <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
            )}

            <TouchableOpacity
                style={{ position: 'absolute', bottom: 20, right: 20, backgroundColor: 'blue', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => navigation.navigate('PostScreen')} >
                    <Icon name="plus" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
