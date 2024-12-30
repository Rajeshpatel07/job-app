import { View, Image, Text, TouchableOpacity } from "react-native";

export default function FeaturedJobCard() {
  return (
    <View className="my-2">
      <View className="flex flex-row items-center justify-between">
        <Text className="text-white font-semibold text-2xl">Featured Jobs</Text>
        <Text className="text-white">Last updated: 2 hours ago</Text>
      </View>
      <View className=" border-white bg-[#7C3AED] rounded-3xl px-3 py-5 mt-4">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row gap-2">
            <Image
              source={{
                uri: "https://i.pinimg.com/236x/f7/f5/9d/f7f59dd63786868b18de3e5ba7048d9c.jpg",
              }}
              className="w-16 h-16 rounded-full"
            />
            <View className=" py-2 gap-1 ">
              <Text className="text-xl font-semibold text-white ">
                Lead Actor
              </Text>
              <Text className="text-white">FilmCity, Hyderabad</Text>
            </View>
          </View>
          <View className="flex flex-row gap-1 items-center border rounded-full px-4 py-2">
            <Image
              className="w-5 h-5"
              source={{
                uri: "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2015/png/iconmonstr-crown-2.png&r=255&g=255&b=255",
              }}
            />
            <Text className="text-white font-semibold text-md gap-2">
              Featured
            </Text>
          </View>
        </View>
        <View className="my-5">
          <Text className="text-2xl font-semibold text-white">
            RS: 3,000/day
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-2">
            <Image
              source={{
                uri: "https://i.pinimg.com/236x/f7/f5/9d/f7f59dd63786868b18de3e5ba7048d9c.jpg",
              }}
              className="w-12 h-12 rounded-full"
            />
            <Image
              source={{
                uri: "https://i.pinimg.com/236x/f7/f5/9d/f7f59dd63786868b18de3e5ba7048d9c.jpg",
              }}
              className="w-12 h-12 rounded-full"
            />
          </View>
          <TouchableOpacity className="bg-white px-10 py-3 rounded-full">
            <Text className="text-[#7C3AED] text-xl">Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
