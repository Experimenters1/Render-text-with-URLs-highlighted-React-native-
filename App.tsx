/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// In App.tsx in a new project

// In App.tsx in a new project

import React from 'react';
import { Text ,StyleSheet} from 'react-native';

const App: React.FC = () => {
  const text = "This is a sample text with a URL: https://example.com and another URL: https://example.org";
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  console.log("🚀 ~  parts:",  parts)
   
  return (
    <>
      {parts.map((part, index) => {
        
        if (part.match(/https?:\/\/[^\s]+/)) {
          // Nếu phần này là một URL
          return <Text key={index} style={styles.text}>{part}</Text>;
        } else {
          // Nếu không, là một phần văn bản khác
          return <Text key={index} style={styles.text1}>{part}</Text>;
        }
      })}
    </>
  );
};

const styles = StyleSheet.create({
   text: {
    color: 'blue',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 30,
    marginTop: 60
   },

   text1: {
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 30,
    marginTop: 60
   } 
})

export default App;