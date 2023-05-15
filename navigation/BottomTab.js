import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RecentScreen from "../screens/RecentScreen";
import AllExpensesScreen from "../screens/AllExpensesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IconButton } from "../components/UI/IconButton";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, Platform } from "react-native";
const windowHeight = Dimensions.get("window").height;
const Tab = createBottomTabNavigator();

const MyTab = () => {
  const navigation = useNavigation();
  const ExpensesPressHandler = () => navigation.navigate("ManageExpense");

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
          backgroundColor: "#202125",
          borderTopWidth: 0,
          padding: 5,
          paddingBottom: windowHeight > 800 ? 30 : 5,
          height: windowHeight > 800 ? 80 : 52,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarActiveTintColor: "#34B7F1",
        headerRight: ({ tintColor }) => (
          <IconButton
            color={"#34A0FF"}
            fontSize={35}
            name="add"
            onPress={ExpensesPressHandler}
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
