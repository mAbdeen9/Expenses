import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RecentScreen from "../screens/RecentScreen";
import AllExpensesScreen from "../screens/AllExpensesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "#010101" }}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#010101",
        },
        headerTintColor: "white",
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: "#171717",
          borderTopWidth: 0,
          padding: 2,
        },
        tabBarActiveTintColor: "#34A0FF",
        headerRight: () => (
          <Ionicons
            name="add"
            style={{ marginHorizontal: 10, color: "white", fontSize: 30 }}
          />
        ),
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="timetable"
              size={size}
              color={color}
            />
          ),
          title: "Recent Expenses",
          tabBarLabel: "Recent",
        }}
        name="Recent"
        component={RecentScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
        name="All Expenses"
        component={AllExpensesScreen}
      />
    </Tab.Navigator>
  );
};

const BottomTab = () => {
  return <MyTab />;
};

export default BottomTab;
