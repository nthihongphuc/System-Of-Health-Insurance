import { ConfigProvider } from "antd";
import Router from "./routes/Router";

function App() {
  return (
    <ConfigProvider
      theme={{ token: { fontSize: 18, fontFamily: "Noto Sans" } }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;
