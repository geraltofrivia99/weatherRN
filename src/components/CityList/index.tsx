import React from "react";
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";

import { styles } from "./styled";

interface Props {
  onPressCity: any;
  cities: Array<object>;
}

export default class CitiesList extends React.PureComponent<Props> {
  renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => this.goToCity(item.name)}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  goToCity = (city: string) => {
    const { onPressCity } = this.props;
    onPressCity(city);
  };

  render() {
    const { cities } = this.props;
    return (
      <FlatList
        data={cities}
        renderItem={this.renderItem}
        keyExtractor={(item: any) => item.name}
        contentContainerStyle={styles.flatlist}
      />
    );
  }
}
