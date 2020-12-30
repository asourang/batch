import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, ScrollView, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView>

    <Text style={{ fontSize: 96}}>Chicken Paprikash Ingredient</Text>
    <Text style={{ fontSize: 40 }}>1 (12 ounce) package egg noodles </Text>
    <Text style={{ fontSize: 40}}>2 tablespoons butter </Text>
    <Text style={{ fontSize: 40 }}>1 tablespoon minced parsley </Text>
    <Text style={{ fontSize: 40 }}>1 teaspoon ground black pepper, divided </Text>
    <Text style={{ fontSize: 40 }}>3 shallots, thinly sliced </Text>
    <Text style={{ fontSize: 40 }}>6 cloves garlic, coarsely chopped</Text>
    <Text style={{ fontSize: 40 }}>2 cups arrabbiata pasta sauce</Text>
    <Text style={{ fontSize: 40 }}>¼ cup chicken broth</Text>
    <Text style={{ fontSize: 40 }}>3 tablespoons red wine vinegar </Text>
    <Text style={{ fontSize: 40 }}>2 pounds boneless, skinless chicken thighs </Text>
    <Text style={{ fontSize: 40 }}>1 cup plain yogurt, divided </Text>
    <Text style={{ fontSize: 40 }}>3 tablespoons paprika</Text>
    <Text style={{ fontSize: 40 }}>1 tablespoon olive oil </Text>
    <Text style={{ fontSize: 40 }}></Text>
    
  </ScrollView> 
      
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
