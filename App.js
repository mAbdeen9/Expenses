import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./store/store";
import { Provider } from "react-redux";
import BottomTab from "./navigation/BottomTab";
import ManageExpense from "./screens/ManageExpense";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
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
                contentStyle: { backgroundColor: "white" },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
