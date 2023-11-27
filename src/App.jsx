import { ConfigProvider } from "antd";
import Router from "./routes/Router";

function App() {
  return (
    <ConfigProvider
      theme={{ token: { fontSize: 16 } }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;
