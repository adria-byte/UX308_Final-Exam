import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import InputBar from "./InputBar";

export default function ({ sendMessage, setInputBarText, inputBarText }) {

  const options = ["Classic Manicure", "Gel Manicure"];

  return (
    <View style={styles.container}>

      <View style={styles.hero}>
        <Image 
        source={require('../assets/nails.svg')}
        style={{ width: '100%', height: 500 }}
        resizeMode="cover"
        
        />
        <Text style={styles.title}>💅 Polished Nail Studio</Text>
        <Text style={styles.subtitle}>Book your manicure instantly</Text>
      </View>

      <View>
        {options.map((option, i) => (
          <TouchableOpacity
            key={i}
            style={styles.button}
            onPress={() => {
              setInputBarText(option);
              sendMessage();
            }}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <InputBar
        text={inputBarText}
        onChangeText={setInputBarText}
        onSendPressed={sendMessage}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between', padding: 16 },
  hero: { alignItems: 'center' },
  image: { width: '100%', height: 200, borderRadius: 12 },
  title: { fontSize: 22, fontWeight: 'bold', marginTop: 10 },
  subtitle: { color: '#666' },
  button: {
    backgroundColor: '#f8c8dc',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center'
  }
});