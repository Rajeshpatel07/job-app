import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface props {
  items: Array<{ title: string }>;
  role: string;
  handleRole: (role: string) => void;
}

export default function FilterItems({ items, role, handleRole }: props) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      className="overflow-x-scroll my-5 flex flex-row gap-2 items-center"
    >
      <View>
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
    </ScrollView>
  );
}
