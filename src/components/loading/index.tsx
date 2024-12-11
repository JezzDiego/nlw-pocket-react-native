import { colors } from "@/styles/colors";
import { ActivityIndicator, Text, View } from "react-native";

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator
        color={colors.green.base}
        size="large"
        style={{
          transform: [{ scale: 1.5 }],
        }}
      />
      <Text
        style={{
          marginTop: 20,
        }}
      >
        Os dados estão sendo carregados...
      </Text>
    </View>
  );
}
