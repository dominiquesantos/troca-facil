import CreatePost from "@/app/screens/CreatePost";
import EditPost from "@/app/screens/EditPost";
import Home from "@/app/screens/Home";
import Login from "@/app/screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={Home} />
      <Screen name="CreatePost" component={CreatePost} />
      <Screen name="EditPost" component={EditPost} />
    </Navigator>
  );
}
