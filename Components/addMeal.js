import React  ,{Component} from 'react';
import { Text, View,  TouchableOpacity,TextInput,StyleSheet,ImageBackground} from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/firestore';



class Add extends Component{
    state={
        uid:""
    }
    componentDidMount(){
        const db = firebase.firestore();

        db.collection("meals").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().first}`);
            });
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              // User logged in already or has just logged in.
              console.log(user.uid);
              this.setState({uid:user.uid})
            } else {
              // User not logged in or has just logged out.
            };
          });
        
    }

   
 
    handleChange = (e)=>{

        let key = e.target.name;

        this.setState({
            [key]:e.target.value
        })

    }

    AddMeal = ()=>{
        const db = firebase.firestore();

        const {name , contents , recipe , time ,type, image, uid} = this.state;
      

        console.log(this.state)
        db.collection("meals").add({
            mealName: name,
            mealContents: contents,
            recipe: recipe,
            timeNeed: time,
            type: type,
            image: image,           
            usid :uid,
        })
        .then( (docRef) =>{
            this.props.history.push('/myMeals')

        })


    }

    
render(){
    return(
        
             <ImageBackground
            style={{
                flex: 1,
            }}
            source={{uri:"https://images.pexels.com/photos/207253/pexels-photo-207253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
            >
                <View style={styles.container}>
            <Text style={styles.title}>Add Meal</Text>
            <Text  style={styles.text}>Hi Cheif, it's nice to see you again!</Text>
            <TextInput 
                        style={styles.input}  
                        name="name" 
                        placeholder =" meal name"
                        onChange={this.handleChange}
                    />
             <TextInput 
                                     style={styles.input}  

                        className="inputAdd" 
                        name='contents'
                        placeholder=" meal contents" 
                        onChange={this.handleChange}
                    />
            <TextInput 
                                    style={styles.input}  

                        className="textarea"  
                        name= 'recipe' 
                        placeholder=" recipe" 
                        onChange={this.handleChange}
                        />
                        <TextInput 
                         style={styles.input}  
                        className="inputAdd" 
                        name='time'
                        placeholder=" time needed" 
                        onChange={this.handleChange
                    }/>
                     <TextInput 
                                             style={styles.input}  

                        className="inputAdd" 
                        name='image'
                        placeholder=" image addres" 
                        onChange={this.handleChange}
                    />
                <TouchableOpacity 
                style={styles.yellowButton}
                onPress={()=>this.handleChange}><Text>add Meal</Text></TouchableOpacity>
                </View>
                </ImageBackground>   
      
    )
}}
const styles=StyleSheet.create({
    title: {
        fontSize:50,
        textAlign: 'center',
        right:90,
        color:'#f9d03a',
        marginTop: 50,
        left:10
    },

   
    container:{
        top:70,
        left:20,
        flex:1,
        maxWidth:370,
        maxHeight:575,
        alignItems: "center",
        textAlign:"center",
        position: "relative",
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius:10,
  
      },

    text:{
        fontSize: 20,
        color:'#fffde7',
        marginTop: 20,
        textAlign:"center",
  
      },
      input:{
        width:330,
        margin:10,
        backgroundColor:'white',
        height: 40,
        color:'black',
        borderRadius:5,
       
      },
      yellowButton:{
        backgroundColor: '#f9d03a',
        padding: 10,
        margin:10,
        width: 330,
        fontSize: 14,
        borderRadius:5,
        alignItems: 'center',
      },
  
})
export default Add;