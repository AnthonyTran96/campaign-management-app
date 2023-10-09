import { Layout } from './layouts';
import GlobalStateProvider from './components/GlobalStateProvider';

function App() {
    return (
        <GlobalStateProvider>
            <Layout />
        </GlobalStateProvider>
    );
}

export default App;
