import { TouchableOpacity, Image, Text, View } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'

export default function Profile() {

	const emojisWithIcons = [
		{ title: 'happy', icon: 'emoticon-happy-outline' },
		{ title: 'cool', icon: 'emoticon-cool-outline' },
		{ title: 'lol', icon: 'emoticon-lol-outline' },
		{ title: 'sad', icon: 'emoticon-sad-outline' },
		{ title: 'cry', icon: 'emoticon-cry-outline' },
		{ title: 'angry', icon: 'emoticon-angry-outline' },
		{ title: 'confused', icon: 'emoticon-confused-outline' },
		{ title: 'excited', icon: 'emoticon-excited-outline' },
		{ title: 'kiss', icon: 'emoticon-kiss-outline' },
		{ title: 'devil', icon: 'emoticon-devil-outline' },
		{ title: 'dead', icon: 'emoticon-dead-outline' },
		{ title: 'wink', icon: 'emoticon-wink-outline' },
		{ title: 'sick', icon: 'emoticon-sick-outline' },
		{ title: 'frown', icon: 'emoticon-frown-outline' },
	];



	return (
		<View className="flex flex-row items-center justify-between ">
			<Image source={{ uri: "https://i.pinimg.com/236x/f7/f5/9d/f7f59dd63786868b18de3e5ba7048d9c.jpg" }} className="w-14 h-14 rounded-full" />

			<SelectDropdown
				data={emojisWithIcons}
				onSelect={(selectedItem, index) => {
					console.log(selectedItem, index);
				}}
				renderButton={(selectedItem, isOpened) => {
					return (
						<View className="border border-grey-200 bg-gray-900 rounded-2xl">
							<Text className="py-2 px-6 font-semibold text-white" >
								{(selectedItem && selectedItem.title) || 'Select City '}
							</Text>
						</View>
					);
				}}

				renderItem={(item, index, isSelected) => {
					return (
						<View className="bg-gray-800 py-2">
							<Text className="text-white text-center ">{item.title}</Text>
						</View>
					);
				}}
				showsVerticalScrollIndicator={false}
			/>

			<TouchableOpacity className="border border-gray-500 p-2 rounded-full">
				<Image
					source={{ uri: "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2018/png/iconmonstr-bell-thin.png&r=255&g=255&b=255" }}
					className="w-7 h-7 "
				/>
			</TouchableOpacity>
		</View>
	)
}


