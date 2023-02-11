import { StatusBar, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#333399'}  />
      <WebView source={{ uri: 'https://improve-pwa.postcare.pages.dev/' }} />
    </>
  );
}
