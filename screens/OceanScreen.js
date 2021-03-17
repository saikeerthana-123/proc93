import React,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    ImageBackground,
    Alert,
    ToastAndroid
} from 'react-native';

export default class AppScreen extends Component{
    componentDidMount(){
        console.log("AppScreen")
    }

    getButtonsUsingForLoop1 = (num) => { 
        const array = [] 
        const images = [
            require('../assets/1atlantic-salmon.png'),
            require('../assets/2manatee.png'),
            require('../assets/3striped-bass.png'),
            require('../assets/4clown-fish.png'),
            require('../assets/5blue-tang.png'),
            require('../assets/6mahi-mahi.png'),
            require('../assets/7beluga-whale.png'),
            require('../assets/8blue-fish.png'),
            require('../assets/9killer-whale.png'),
            require('../assets/10queen-snapper.png'),
            require('../assets/11pelagic-stingray.png'),
            require('../assets/12bull-shark.png'),
            require('../assets/13green-sea-turtle.png'),
            require('../assets/14atlantic-mackerel.png'),
            require('../assets/15dentex.png')
        ]
        const msg = [
            "The Atlantic salmon is a species of ray-finned fish in the family Salmonidae which is the largest salmon and can grow up to a meter in length.",
            "Manatees are large, fully aquatic, mostly herbivore marine animals sometimes known as sea cows. ",
            "The striped bass is the state fish of Maryland, Rhode Island, and South Carolina, and the state saltwater (marine) fish of New York, New Jersey, Virginia, and New Hampshire.",
            "In Disney/Pixar's 2003 film Finding Nemo and its 2016 sequel Finding Dory main characters Nemo and his dad Marlin are clownfish. The popularity of these for aquaria increased following the film's release.",
            "Blue tang is a species of Indo-Pacific surgeonfish.",
            "The mahi-mahi or common dolphinfish is a surface-dwelling ray-finned fish found in off-shore temperate, tropical, and subtropical waters worldwide. ",
            "Beluga whale is also known as the white whale, as it is the only cetacean to regularly occur with this colour; the sea canary, due to its high-pitched calls; and the melonhead, though that more commonly refers to the melon-headed whale, which is an oceanic dolphin.",
            "The bluefish is the only extant species of the family Pomatomidae. ",
            "The killer whale, also known as an orca (Orcinus orca), is a toothed whale belonging to the oceanic dolphin family, of which it is the largest member. ",
            "The queen snapper, is a species of snapper native to east of the Windward Islands and the Caribbean Sea.",
            "The pelagic stingray is a species of stingray in the family Dasyatidae, and the sole member of its genus.",
            "The bull shark, also known as the Zambezi shark (informally zambi) in Africa, and Lake Nicaragua shark in Nicaragua.",
            "The green sea turtle also known as the green turtle, black (sea) turtle or Pacific green turtle, is a species of large sea turtle of the family Cheloniidae.",
            "The Atlantic mackerel, also known as Boston mackerel, Norwegian mackerel, Scottish mackerel or just mackerel, is a species of mackerel found in the temperate waters of the Mediterranean Sea, the Black Sea, and the northern Atlantic Ocean.",
            "The common dentex is a species of fish in the family Sparidae."

        ]
        for(var i = 0; i < num; i++){ 
            //console.log(msg[i])
            array.push(<TouchableOpacity  style = {(styles.button)}
                onPress={()=>{
                            Alert.alert("Description:",msg[i])
                        }}>
                            <Image source={images[i]}/>
                </TouchableOpacity>) 
        } 
        return array }

        getButtonsUsingForLoop2 = () => { 
            const array = [] 
            var images2 = [
                require('../assets/t1chain-catshark.png'),
                require('../assets/t2olive-ridly-sea-turtle.png'),
                require('../assets/t3great-white-shark.png'),
                require('../assets/t4bottlenose-dolphin.png'),
                require('../assets/t5cockatoo-squid.png'),
                require('../assets/t6blue-shark.png'),
                require('../assets/t7firefly-squid.png'),
                require('../assets/t8sea-angel.png'),
                require('../assets/t9mako-shark.png'),
                require('../assets/t10sunfish.png'),
                require('../assets/t11coelacanth.png'),
                require('../assets/t12giant-oarfish.png'),
                require('../assets/t13monkfish.png'),
                require('../assets/t14bairds-beaked-whale.png')
            ]
            const msg2 = [
                "The chain catshark or chain dogfish is a small, reticulated catshark that is biofluorescent. ",
                "The olive ridley sea turtle, also known commonly as the Pacific ridley sea turtle, is a species of turtle in the family Cheloniidae. The species is the second smallest and most abundant of all sea turtles found in the world.", 
                "The great white shark, also known as the great white, white shark or white pointer, is a species of large mackerel shark which can be found in the coastal surface waters of all the major oceans.",
                "Bottlenose dolphins sometimes porpoise at the surface; they swim fast enough to break free of the water, flying up and out and then back under in one continuous movement, which they generally repeat. ",
                "This transparent cockatoo squid also known as a glass squid.",
                "The blue shark (Prionace glauca) is a species of requiem shark, in the family Carcharhinidae, that inhabits deep waters in the world's temperate and tropical oceans.",
                "The firefly squid, also commonly known as the sparkling enope squid or hotaru-ika in Japan.",
                "Sea angels are a large group of extremely small, swimming sea slugs.",
                "The shortfin mako shark, also known as the blue pointer or bonito shark, is a large mackerel shark.",
                "The ocean sunfish or common mola (Mola mola) is one of the heaviest known bony fishes in the world. Adults typically weigh between 247 and 1,000 kg.",
                "Coelacanths were thought to be extinct until found alive in 1938.",
                "Giant Oarfish can grow up to 11m long.",
                "Members of the genus Lophius, also sometimes called monkfish, fishing-frogs, frog-fish, and sea-devils, are various species of lophiid anglerfishes found in the Atlantic and Indian Oceans. ",
                "Giant beaked whales are beaked whales in the genus Berardius. They include Arnoux's beaked whale in cold Southern Hemisphere waters, and Baird's beaked whale in the cold temperate waters of the North Pacific. ",

            ]

            images2.map( (item,index) => {
                console.log(item);
                return (
                    <TouchableOpacity key={index} 
                        onPress = {event => { 
                            alert(`${index}: ${item}`); 
                        }} > 
                        <Image source={item}/> 
                    </TouchableOpacity> )} 
                
                )
        }

    render(){
        return(
        <ScrollView>
                <View style={(styles.view1)}>
                    {this.getButtonsUsingForLoop1(14)}
                    <Text>End of Sunshine Zone</Text>
                </View>

                <View style={(styles.view2)}> 
                    {this.getButtonsUsingForLoop2()}
                        <Text>End of Twilight Zone</Text>

                </View>

                <View style={(styles.view3)}> 
                        <Text style={{color:'white'}}>Midnight Zone</Text>

                </View>

                <View style={(styles.view4)}> 
                        <Text style={{color:'white'}}>Hadal Zone</Text>

                </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   button:{
       justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center',
       marginTop: 80,
   },
   background: {
    justifyContent: 'center',
    alignItems: 'center', 
    flex: 1, 
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    },
   view1: {
       backgroundColor: '#68CEFE',
       alignItems:'center',
   },
   view2: {
    backgroundColor: '#4383A1',
    alignItems:'center',
    },
    view3: {
        backgroundColor: '#2E5A97',
        alignItems:'center',
    },
    view4: {
        backgroundColor: '#162737',
        alignItems:'center',
    }
    });