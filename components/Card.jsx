import { StyleSheet, View, Text, Pressable } from "react-native";

const Card = ({ title, color }) => {
  return (
    <View style={{ ...styles.cardBlock, backgroundColor: color }}>
      <Pressable style={styles.pressableContainer} android_ripple={{color: '#ccc'}}>
        <View style={styles.innerContainer}>
          <Text>{title}</Text>
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
});

export default Card;
