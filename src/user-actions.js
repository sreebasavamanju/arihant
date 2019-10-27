import React from "react";
import {Linking} from 'react-native';

import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  actionsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10
  },
  actionButton: {
    padding: 10,
    color: "white",
    borderRadius: 6,
    width: 80,
    backgroundColor: "#808080",
    marginRight: 5,
    marginLeft: 5
  },
  actionButtonDestructive: {
    backgroundColor: "#ff4b21"
  },
  actionButtonText: {
    textAlign: "center"
  }
});

const UserActions = (props) => {
  console.log(props);

if(props.item.service==="TNEB"){
 return (
         <View style={styles.actionsContainer}>
              <TouchableHighlight
                style={[styles.actionButton, styles.actionButtonText]}
                onPress={() => {
                         Linking.openURL(`${props.item.link}`);
               }
         }
        >
                  <Text style={styles.actionButtonText}>Open link </Text>
                 </TouchableHighlight>
        </View>
  );
}else {
return (
         <View style={styles.actionsContainer}>
              <TouchableHighlight
                style={[styles.actionButton, styles.actionButtonText]}
                onPress={() => {
                         Linking.openURL(`tel:${props.item.phone}`);
               }
         }
        >
                  <Text style={styles.actionButtonText}>Call </Text>
                 </TouchableHighlight>
        </View>
);	
  }
};

export default UserActions;
