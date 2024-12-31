import React, { useState, useEffect, useRef } from "react";
import { View, Text, ScrollView, Dimensions, Animated } from "react-native";
import { REACT_APP_API_URI } from "@env";
import Card from "./ui/cards";

export interface Job {
  id: string;
  title: string;
  salary: string;
  company: string;
  location: string;
  featured: boolean;
}

const { width: screenWidth } = Dimensions.get('window');

export default function FeaturedJobCard() {
  const [jobs, setJobs] = useState<Job[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const request = await fetch(`${REACT_APP_API_URI}/api/jobs/featured?category=All`);
        const response = await request.json();
        setJobs(response.jobs);
      } catch (err) {
        console.log(err);
      }
    };

    fetchJobs();
  }, []);

  const handleApply = (id: number) => {
    console.log(id, "apply");
  };

  const handleScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <View className="my-2">
      <View className="flex flex-row items-center justify-between">
        <Text className="text-white font-semibold text-2xl">Featured Jobs</Text>
        <Text className="text-white">Last updated: 2 hours ago</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={handleScrollEnd}
        scrollEventThrottle={16}
        className=" p-1 my-4"
      >
        {jobs &&
          jobs.map((job, idx) => (
            <Card key={idx} job={job} handleApply={handleApply} />
          ))}
      </ScrollView>

      {/* Dots Indicator */}
      {jobs && (
        <View className="flex flex-row gap-2 items-center justify-center ">
          {jobs.map((_, index) => (
            <View
              key={index}
              className={`w-2 h-2 border-white rounded-xl space-x-4 ${currentIndex === index ? 'bg-white' : 'bg-gray-800'}`}

            />
          ))}
        </View>
      )}
    </View>
  );
}
