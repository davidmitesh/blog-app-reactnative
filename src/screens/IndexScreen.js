import React,{useContext} from 'react'
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements';

//TouchableOpacity will turn any element responsive to taps from the user and we can perform 
//actions on that.
// import Icon from 'react-native-vector-icons/FontAwesome'
import {Context} from '../context/BlogContext'
import { Entypo } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';


const IndexScreen = () => {
    const {state,addBlogPost,deleteBlogPost}=useContext(Context)
     //So if we come across a situation where in arrow function, we only need to call a 
            //function instead we can simply pass reference by omitting the parenthesis like in above.
            //This is done in onPress below!
    return (
        <View>
            
            
           
            <FlatList
            data={state}
            keyExtractor={(blogPost)=>blogPost.title}
            renderItem={(props)=>{
                // console.log(props)//This is to see what options are available rather than item only.
                return <View style={styles.row}>
                    <Text style={styles.title}>{props.item.title}</Text>
                    <TouchableOpacity onPress={()=>deleteBlogPost(props.item.id)}>
                        <Entypo name="trash"  color="black" style={styles.icon} /> 
                    </TouchableOpacity>

                </View> 
                
            }}
            />
            <View style={styles.button}>
                <Button 
                // icon={
                //     <Icon
                //         name="add-circle-outline"
                //         size={24}
                //         color="black"
                //         type="ionicon"
                //     />
                // }
                title="Add Post" 
                onPress={addBlogPost } 
                type='clear'
                />
            </View>
            
        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        paddingVertical:20,
        paddingLeft:10,
        paddingRight:10,
        borderWidth:3,
        borderColor:'gray',
        margin:10,
        borderRadius:20
        
    },
    title:{
        fontSize:18,
        
    },
    icon:{
        fontSize:24,
        
    },
    button:{
        alignSelf:'center'
    }
})
