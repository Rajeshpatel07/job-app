import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import FilterItems from "./ui/filterItems";
import { REACT_APP_API_URI } from '@env';

interface category {
  id: number;
  name: string;
}

export default function CategoryFilter() {

  const [inputValue, setInputValue] = useState<string>("");
  const [role, setRole] = useState<string>("All");
  const [categories, setCategories] = useState<Array<category>>([{ id: 0, name: "All" }]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const request = await fetch(`${REACT_APP_API_URI}/api/categories`);
        const { categories } = await request.json();
        console.log(categories);
        setCategories(prev => [...prev, ...categories]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCategories();
  }, [])

  const handleRole = (role: string) => {
    setRole(role);
  };

  const handleInput = (text: string) => {
    setInputValue(text);
  }

  return (
    <View>
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row bg-gray-900 items-center w-10/12 rounded-lg">
          <Icon name="search" size={20} color="white" className="pl-4" />
          <TextInput
            className="bg-gray-900 px-5 text-xl h-12  text-white placeholder:text-white rounded-lg"
            placeholder="Search by role, project or location"
            value={inputValue}
            onChangeText={handleInput}
          />
        </View>
        <TouchableOpacity className="border p-2 bg-[#7C3AED] rounded-lg">
          <Image
            source={{
              uri: "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-filter-2.png&r=255&g=255&b=255",
            }}
            className="h-6 w-6"
          />
        </TouchableOpacity>
      </View>
      <View className="my-5 flex flex-row gap-2 items-center">
        {categories !== null &&
          <FilterItems role={role} handleRole={handleRole} categories={categories} />
        }
      </View>
    </View>
  );
}
