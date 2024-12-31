import { View, Image, Text, TouchableOpacity } from "react-native";
import bookmark from '../../assets/images/bookmark1.png';

interface props {
  id: string;
  title: string;
  salary: string;
  company: string;
  location: string;
  featured: boolean;
  handleApply: (id: string) => void;
}


export default function Card({ job, handleApply }: props) {


  return (
    <View
      className="border-white bg-[#7C3AED] rounded-3xl px-4 py-5 mx-1 w-96 h-56  "
    >
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
              {job.title}
            </Text>
            <Text className="text-white">{job.location}</Text>
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
          {job.salary}
        </Text>
      </View>
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-2">
          <View className="border p-3 rounded-full">
            <Image
              source={bookmark}
              className="w-6 h-6 "
            />
          </View>
          <View className="border p-3 bg-[rgba(233, 238, 243, 0.8)]  rounded-full">
            <Image
              source={{
                uri: "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-share-6.png&r=255&g=255&b=255",
              }}
              className="w-6 h-6 rotate-1 "
            />
          </View>

        </View>
        <TouchableOpacity className="bg-white px-10 py-3 rounded-full"
          onPress={() => handleApply(job.id)}
        >
          <Text className="text-[#7C3AED] text-xl">Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
