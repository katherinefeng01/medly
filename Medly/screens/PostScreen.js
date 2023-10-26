import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, KeyboardAvoidingView, Platform, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRoute } from '@react-navigation/native';

const PostScreen = () => {
    // Initiating state variables 
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]); 
    const [items, setItems] = useState([
        // List of healthcare categories
        { label: 'Dermatology', value: 'dermatology' },
        { label: 'Dentistry', value: 'dentistry' },
        { label: 'Surgery', value: 'surgery' },
        { label: 'Physical Therapy', value: 'physical therapy' },
        { label: 'Orthopedics', value: 'orthopedics' },
        { label: 'Gynaecology', value: 'gynaecology' }
    ]);
    
    // Function that allows user to choose image from camera roll
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
        console.log(result);
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        };
    };

    // Function that allows user to post and view on homepage
    const navigation = useNavigation();
    const handlePost = () => {
        const postData = {
            caption,
            image,
            selectedCategory: value
        };
        navigation.navigate('Medly', { postData: postData });
    };

    // Function that allows user to cancel post and directed back to homepage
    const handleCancel = () => {
        navigation.navigate('Medly');
    }

    return (
        // Display categories dropdown
        // Display option to add caption 
        // Display option to add image
        // Display post and cancel button 
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -150} >
                <View style={styles.categoryDropdown} >
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder="Select a category"
                        multiple={false}
                        mode="BADGE"
                        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]} />
                </View>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                    {image && <Image source={{ uri: image }} style={{ width: 250, height: 250}} />}
                </View>

                <View style={styles.inputContainer} >
                    <TextInput
                        style={styles.textInput}
                        placeholder="Tell us about your symptoms..."
                        value={caption}
                        onChangeText={(text) => setCaption(text)}
                    />
                </View>

                <View style={styles.navBar}>
                    <TouchableOpacity onPress={pickImage}>
                    <Icon name="camera" size={24} />
                    </TouchableOpacity>
                </View>

                <View style={styles.postButtonContainer}>
                    <Button title="Cancel" onPress={handleCancel} />
                    <Button title="Post" onPress={handlePost} />
                </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 0
    },
    categoryDropdown: {
        marginLeft: 10,
        marginTop: 100,
        marginRight: 10,
        zIndex: 100
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    textInput: {
        fontSize: 20,
        width: '100%'
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'lightgray'
    },
    navText: {
        fontSize: 16,
    },
    postButtonContainer: {
        position: 'absolute',
        top: 50,
        right: 20,
        flexDirection: 'row'
    },
});

export default PostScreen;
