import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
function App() {
    return <SafeAreaProvider>...</SafeAreaProvider>;
}
const Layout=() =>{
    return <Stack />;

}

export default  Layout;
