import { TouchableOpacity, Image, Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

export default function Profile() {
  const cities = [
    { name: "Mumbai", state: "Maharashtra" },
    { name: "Delhi", state: "Delhi" },
    { name: "Bangalore", state: "Karnataka" },
    { name: "Chennai", state: "Tamil Nadu" },
    { name: "Kolkata", state: "West Bengal" },
    { name: "Hyderabad", state: "Telangana" },
    { name: "Ahmedabad", state: "Gujarat" },
    { name: "Pune", state: "Maharashtra" },
    { name: "Surat", state: "Gujarat" },
    { name: "Jaipur", state: "Rajasthan" },
  ]

  return (
    <View className="flex flex-row items-center justify-between ">
      <Image
        source={{
          uri: "https://i.pinimg.com/236x/f7/f5/9d/f7f59dd63786868b18de3e5ba7048d9c.jpg",
        }}
        className="w-14 h-14 rounded-full"
      />

      <SelectDropdown
        data={cities}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View className="flex flex-row items-center gap-1 border-grey-200 bg-gray-900 rounded-full py-3 px-8">
              <Text className=" font-semibold text-white">
                {(selectedItem && selectedItem.name) || "Select City "}
              </Text>
              <Image
                source={{ uri: "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2017/png/iconmonstr-arrow-65.png&r=255&g=255&b=255" }}
                className="h-3 w-3 mt-1"
              />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View className=" py-2 bg-black">
              <Text className="text-white font-semibold text-lg text-center ">{item.name}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity className="border border-gray-500 p-2 rounded-full">
        <Image
          source={{
            uri: "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2013/png/iconmonstr-bell-2.png&r=255&g=255&b=255",
          }}
          className="w-6 h-6 "
        />
      </TouchableOpacity>
    </View>
  );
}
