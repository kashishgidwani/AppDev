import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#915F6D" />
      <Image
        source={require('assets/aloy.jpeg')}
        style={styles.image}
      />
      <Text style={styles.text}>Kashish Gidwani</Text>
      <Text style={styles.text}>22MIA1117</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>ALOY</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#915F6D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 5,
    borderColor: '#673147',
  },
  text: {
    fontFamily: 'Apple Chancery',
    fontSize: 30,
    marginBottom: 20,
    color: 'white',
    animationName: 'slideIn',
    animationDuration: '10s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
  },
  buttonContainer: {
    backgroundColor: '#673147',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#FFE5B4',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'AkayaTelivigala',
  },
});
