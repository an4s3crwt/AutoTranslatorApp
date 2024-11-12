import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Clipboard from 'expo-clipboard';
import axios from 'axios';
import { DEEPL_API_KEY } from 'react-native-dotenv';


export default function App() {
  const [translation, setTranslation] = useState(''); // Para guardar el texto traducido
  const [loading, setLoading] = useState(false); // Para manejar el estado de carga

  // Función para traducir el texto copiado
  const translateText = async (text) => {
    if (!text.trim()) {
      console.log('El portapapeles está vacío');
      return; // Si el texto está vacío, no hacer nada
    }
    setLoading(true);
    try {
      const response = await axios.get('https://api-free.deepl.com/v2/translate', {
        params: {
          DEEPL_API_KEY, // Usamos la clave de API desde el archivo .env
          text: text,
          target_lang: 'EN', // Traducción al español
        },
      });

      const translatedText = response.data.translations[0].text;
      setTranslation(translatedText); // Guarda el texto traducido en el estado
      Clipboard.setStringAsync(translatedText); // Copia la traducción al portapapeles
    } catch (error) {
      console.error('Error en traducción', error);
      setLoading(false);
    }
  };

  // Función para revisar el portapapeles periódicamente
  const checkClipboard = async () => {
    try {
      const text = await Clipboard.getStringAsync();
      if (text) {
        translateText(text);
      } else {
        console.log('No se encontró texto en el portapapeles');
      }
    } catch (error) {
      console.error("NoPermissionException:", error);
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  };

  // Usa useEffect para iniciar el listener del portapapeles
  useEffect(() => {
    const interval = setInterval(checkClipboard, 2000); // Revisa cada 2 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <View style={styles.container}>
      <Text>Texto traducido:</Text>
      {loading ? (
        <Text>Traduciendo...</Text> // Muestra un mensaje de carga mientras traduce
      ) : (
        <Text>{translation}</Text> // Muestra el texto traducido
      )}
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
    padding: 20,
  },
});
