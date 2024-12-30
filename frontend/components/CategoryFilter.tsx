import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import FilterItems from "./ui/filterItems";

export default function CategoryFilter() {
  const [role, setRole] = useState<string>("All");

  const items = [
    { title: "All" },
    { title: "Acting" },
    { title: "Photography" },
    { title: "Dance" },
    { title: "Engineer" },
  ];

  const handleRole = (role: string) => {
    setRole(role);
  };

  return (
    <View>
      <View className="flex flex-row items-center justify-between">
        <TextInput
          className="bg-gray-800 px-5 text-xl w-10/12 text-white placeholder:text-white rounded-lg"
          placeholder="Search by role, project or location"
        />
        <TouchableOpacity className="border p-2 bg-[#7C3AED] rounded-lg">
          <Image
            source={{
              uri: "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-filter-2.png&r=255&g=255&b=255",
            }}
            className="h-6 w-6"
          />
        </TouchableOpacity>
      </View>
      <View className="overflow-x-scroll my-5 flex flex-row gap-2 items-center">
        {items.map((item, idx) => (
          <View
            key={idx}
            className={`border rounded-full ${item.title === role ? "bg-[#7C3AED]" : "bg-gray-800"
              }`}
          >
            <Text
              className="text-white px-5 py-2 text-lg text-center"
              onPress={() => handleRole(item.title)}
            >
              {item.title}
            </Text>
          </View>
        ))}
      </View>
      {/*<FilterItems role={role} handleRole={handleRole} items={items} />*/}
    </View>
  );
}
