import { createBrowserRouter } from "react-router";
import { PhoneFrame } from "./components/PhoneFrame";
import { SplashScreen } from "./screens/SplashScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { SearchScreen } from "./screens/SearchScreen";
import { ResultsScreen } from "./screens/ResultsScreen";
import { HeatmapScreen } from "./screens/HeatmapScreen";
import { NavigationScreen } from "./screens/NavigationScreen";
import { CafeScreen } from "./screens/CafeScreen";
import { NotificationsScreen } from "./screens/NotificationsScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { SuccessScreen } from "./screens/SuccessScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SplashScreen,
  },
  {
    path: "/app",
    Component: PhoneFrame,
    children: [
      { index: true, Component: HomeScreen },
      { path: "search", Component: SearchScreen },
      { path: "results", Component: ResultsScreen },
      { path: "heatmap", Component: HeatmapScreen },
      { path: "navigation", Component: NavigationScreen },
      { path: "cafe", Component: CafeScreen },
      { path: "notifications", Component: NotificationsScreen },
      { path: "profile", Component: ProfileScreen },
      { path: "success", Component: SuccessScreen },
    ],
  },
]);
