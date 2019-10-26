import React from "react";
import {Linking} from 'react-native';

import {
  View,
  TouchableHighlight,
  Text,
  Alert,
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
  return (
	  <View style={styles.actionsContainer}>
	      <TouchableHighlight
        	style={[styles.actionButton, styles.actionButtonDestructive]}
	        onPress={() => {
 	
	       }
        }
      >
          <Text style={styles.actionButtonText}>call</Text>

     		 </TouchableHighlight>
</View>

  );
};

export default UserActions;
