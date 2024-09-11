import GlobalStyles from 'global/styles/GlobalStyles';
import Reset from 'global/styles/Reset';
import AppRoutes from 'routes';

function App() {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <AppRoutes />
    </>
  );
}

export default App;
