import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "@/components/ui/profile";
import CategoryFilter from "@/components/CategoryFilter";
import FeaturedJobCard from "@/components/FeaturedJobCard";

export default function Index() {

  return (
    <SafeAreaView className="bg-gray-900 h-full p-7">
      <ScrollView contentContainerClassName="h-full">
        <View>
          <Profile />
          <View className="my-4">
            <Text className="text-white text-md">Welcome Back</Text>
            <Text className="text-white font-semibold text-xl">Your Username</Text>
          </View>
          <CategoryFilter />
          <FeaturedJobCard />
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}
