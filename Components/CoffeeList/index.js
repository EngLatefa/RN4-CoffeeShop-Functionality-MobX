import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Button, Text, Icon } from "native-base";

// Store
import CoffeeStore from "../../store/coffeeStore";

// Component
import CoffeeItem from "./CoffeeItem";
import CartButton from "../Buttons/CartButton";

class CoffeeList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Coffee List",
    headerLeft: null,
    headerRight: <CartButton />
  });
  render() {
    const coffeeshops = CoffeeStore.coffeeshops;
    let ListItems;
    if (coffeeshops) {
      ListItems = coffeeshops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    return (
      <Content>
        <List>{ListItems}</List>
      </Content>
    );
  }
}

export default observer(CoffeeList);
