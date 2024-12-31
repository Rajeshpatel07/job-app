import { ScrollView, View, Text } from "react-native";

interface category {
  id: number;
  name: string;

}

interface props {
  categories: Array<category>;
  role: string;
  handleRole: (role: string) => void;
}

export default function FilterItems({ categories, role, handleRole }: props) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((item, idx) => (
        <View
          key={idx}
          className={`mx-1 rounded-full ${item.name === role ? "bg-[#7C3AED]" : "bg-gray-900"
            }`}
        >
          <Text
            className="text-white px-5 py-2 text-lg text-center"
            onPress={() => handleRole(item.name)}
          >
            {item.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
