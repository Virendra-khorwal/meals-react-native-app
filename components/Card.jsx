import { StyleSheet, View, Text, Pressable } from "react-native";

const Card = ({ title, color, onPress }) => {
  return (
    <View style={{ ...styles.cardBlock, backgroundColor: color }}>
      <Pressable style={styles.pressableContainer} android_ripple={{color: '#ccc'}} onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.textContainer}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBlock: {
    flex: 1,
    borderRadius: 4,
    margin: 16,
    height: 140,
    elevation: 4,
    overflow: 'hidden'
  },
  pressableContainer: {
    flex:1,
  },
  innerContainer: {
    flex: 1,
    padding: 20,
  },
  textContainer : {
    fontSize: 16,
  }
});

export default Card;
