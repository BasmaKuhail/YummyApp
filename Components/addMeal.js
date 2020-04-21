import React  ,{Component} from 'react';
import { Text, View,  TouchableOpacity,TextInput} from 'react-native';
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
        <View>
            <Text className="headerAdd">Add Meal</Text>
            <Text className='text1Add'>Hi Cheif, it's nice to see you again!</Text>
            <TextInput 
                        className="inputAdd"  
                        name="name" 
                        placeholder =" meal name"
                        onChange={this.handleChange}
                    />
             <TextInput 
                        className="inputAdd" 
                        name='contents'
                        placeholder=" meal contents" 
                        onChange={this.handleChange}
                    />
            <TextInput 
                        className="textarea"  
                        name= 'recipe' 
                        placeholder=" recipe" 
                        onChange={this.handleChange}
                        />
                        <TextInput 
                        className="inputAdd" 
                        name='time'
                        placeholder=" time needed" 
                        onChange={this.handleChange
                    }/>
                     <TextInput 
                        className="inputAdd" 
                        name='image'
                        placeholder=" image addres" 
                        onChange={this.handleChange}
                    />
                <TouchableOpacity onPress={()=>this.handleChange}><Text>add Meal</Text></TouchableOpacity>

                   
        </View>
    )
}}
export default Add;