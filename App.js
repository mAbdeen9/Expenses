import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./navigation/BottomTab";
import ManageExpense from "./screens/ManageExpense";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={BottomTab}
            options={{ headerShown: false, borderTopWidth: 0 }}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              title: "Manage",
              headerTintColor: "white",
              presentation: "modal",
              headerStyle: {
                backgroundColor: "black",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
