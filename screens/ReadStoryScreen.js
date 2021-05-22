import React from 'react';
import { Text, View, Header, StyleSheet } from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {styles.header}> Read A Story </Text>
                <Text style = {styles.text}> Long ago, there lived a woodcutter in a small village.  He was sincere in his work and very honest.  Every day, he set out into the nearby forest to cut trees.  He brought the woods back into the village and sold them out to a merchant and earn his money.  He earned just about enough to make a living, but he was satisfied with his simple living.

One day, while cutting a tree near a river, his axe slipped out of his hand and fell into the river.  The river was so deep, he could not even think to retrieve it on his own. He only had one axe which was gone into the river. He became a very worried thinking how he will be able to earn his living now!  He was very sad and prayed to the Goddess. He prayed sincerely so the Goddess appeared in front of him and asked, “What is the problem, my son?” The woodcutter explained the problem and requested the Goddess to get his axe back.

The Goddess put her hand deep into the river and took out a silver axe and asked, “Is this your axe?”  The Woodcutter looked at the axe and said “No”.   So the Goddess put her hand back deep into the water again and showed a golden axe and asked, “Is this your axe?”  The woodcutter looked at the axe and said “No”.  The Goddess said, “Take a look again Son, this is a very valuable golden axe, are you sure this is not yours?”  The woodcutter said, “No, It’s not mine.  I can’t cut the trees with a golden axe.  It’s not useful for me”.

The Goddess smiled and finally put her hand into the water again and took out his iron axe and asked, “Is this your axe?”  To this, the woodcutter said, “Yes!  This is mine!  Thank you!”  The Goddess was very impressed with his honesty so she gave him his iron axe and also other two axes as a reward for his honesty. 
</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        backgroundColor: 'coral',
        fontSize: 30,
    }
})