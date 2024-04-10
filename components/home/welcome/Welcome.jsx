import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Activites = ["Find A Path", "Guided Meditation", "Social Feed"];

const Welcome = () => {
  const router = useRouter();
  const [activeActivity, setActiveActivity] = useState("Find A Path");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello User</Text>
        <Text style={styles.welcomeMessage}>Find your next activity</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking to do?"
          />
        </View>

        {/* Basic search button */}
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      {/* The Buttons below the search bar */}
      <View style={styles.tabsContainer}>
        <FlatList
          data={Activites}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeActivity, item)}
              onPress={() => {
                setActiveActivity(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeActivity, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
