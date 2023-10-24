import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-picker';

const PostScreen = () => {
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]); // Manage selected values separately
  const [items, setItems] = useState([
    { label: 'Dermatology', value: 'dermatology' },
    { label: 'Dentistry', value: 'dentistry' },
    { label: 'Surgery', value: 'surgery' },
  ]);

//   const [subCategoriesOpen, setSubCategoriesOpen] = useState(false);
//   const [subCategoriesValue, setSubCategoriesValue] = useState([]);
//   const [subCategoriesItems, setSubCategoriesItems] = useState([]);
  
  const handleImageSelect = () => {
    const options = {
        title: 'Select Image',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
    
      ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
          // User cancelled image picker
        } else if (response.error) {
          // Handle error
        } else {
          // You can use `response.uri` as the selected image
          setSelectedImage(response.uri);
        }
      });
  };

  const handlePost = () => {
    // Implement logic for posting the caption, selected image, and selected category
  };

//   const handleSubCategory = (category) => {
//     setValue(category);
//     if (category === 'dermatology') {
//         setSubCategoriesItems([
//             {label: 'Acne', value: 'acne'},
//             {label: 'Psoriasis', value: 'psoriasis'},
//             {label: 'Eczema', value: 'eczema'},
//             {label: 'Melanoma', value: 'melanoma'},
//             {label: 'Unknown', value: 'Unkown'}
//         ]);
//     } else {
//         setSubCategoriesItems([]);
//     };
//   };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -150}
    >
      <View style={styles.categoryDropdown}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select a category"
          multiple={false}
          onChangeItem={(item) => handleSubCategory(item.value)}
          mode="BADGE"
          badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
        />
      </View>

      {/* {subCategoriesItems.length > 0 && (
        <View style={styles.subCategoryDropdown}>
          <DropDownPicker
            open={subCategoriesOpen}
            value={subCategoriesValue}
            items={subCategoriesItems}
            setOpen={setSubCategoriesOpen}
            setValue={setSubCategoriesValue}
            setItems={setSubCategoriesItems}
            placeholder="Select a sub-category"
          />
        </View>
      )} */}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Tell us about your symptoms..."
          value={caption}
          onChangeText={(text) => setCaption(text)}
        />
      </View>

      {/* Custom navigation bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={handleImageSelect}>
          <Icon name="camera" size={24} />
        </TouchableOpacity>
        <Text style={styles.navText}>Add a picture</Text>
        <TouchableOpacity onPress={handleImageSelect}>
          <Icon name="paperclip" size={24} />
        </TouchableOpacity>
      </View>

      {/* Post button */}
      <View style={styles.postButtonContainer}>
        <Button title="Post" onPress={handlePost} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
    // elevation: 100
  },
  categoryDropdown: {
    marginLeft: 10,
    marginTop: 100,
    marginRight: 10,
    zIndex: 100
    // width: 350,
  },
//   subCategoryDropdown: {
//     marginLeft: 10,
//     marginTop: 20,
//   },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textInput: {
    fontSize: 20,
    width: '100%',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'lightgray',
  },
  navText: {
    fontSize: 16,
  },
  postButtonContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
});

export default PostScreen;
