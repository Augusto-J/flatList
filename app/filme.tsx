import { Link } from 'expo-router';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';


export default function App() {
    return (

    <View style={styles.boxfilm}>

         <View style={styles.bigwach}>

            <View style={styles.boximgFilm}>
                <Image
                    source={{ uri: 'https://www.movietele.it/wp-content/uploads/2022/12/Oppenheimer-di-Christopher-Nolan-Poster-VOD.jpeg' }}
                    style={styles.imgFilm}
                >
                </Image>
            </View>
        

            <View style={styles.watchfilm}>
                <Text style={styles.titolofilm}>Oppenheimer</Text>
                <Text style={styles.textfilm}>Lançamento: 2023    Duração de <Text style={styles.duration}>3h     </Text><Text style={styles.age}> 16 </Text></Text>

        <View style={styles.bots}>
            <Link href={'/flat'}>
                <TouchableOpacity style={styles.startFilm}> Assistir </TouchableOpacity>

                <TouchableOpacity style={styles.backsee}> +Lista de filmes </TouchableOpacity>
            </Link>
        </View>

                <Text style={styles.descFilm}> <Text style={styles.sino}>Sinopse: </Text>
                      O longa-metragem de 2023, dirigido por Christopher Nolan,
                    é uma adaptação da biografia "American Prometheus", 
                    escrita por Kai Bird e Martin J. Sherwin. 
                    O filme foca na vida de J. Robert Oppenheimer,
                    um físico teórico americano que é amplamente reconhecido como o
                    "pai da bomba atômica".   
                </Text>

             </View>

        </View>

    </View>
    )
}

const styles = StyleSheet.create({

    boxfilm: {
        backgroundColor: '#2f3e3a',
        flex: 1,
    },

    bigwach:{
        flex: 2,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },

    watchfilm:{
        width: 500,
    },

    sino:{
        fontSize: 20,
        color: '#ffff', 
    },

    boximgFilm: {
        width: '50%',
        height: 700,
        marginTop: 25,
    },

    imgFilm: {
        width: 700,
        height: 900,
        borderRadius: 20,
    },

    textfilm: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
        alignSelf: 'center',
    },

    age:{
        width: 30,
        height: 25,
        backgroundColor: 'red',
        borderBottomLeftRadius: 10
    },

    duration: {
        color: 'yellow',
        fontWeight: 'bold',
    },

    titolofilm: {
        color: 'white',
        textDecorationLine: 'underline',
        textDecorationColor: 'red',
        marginLeft: 50,
        fontSize: 50,
        fontWeight: 'bold',
        width: 500,
        marginTop: 50,
    },

    descFilm: {
        color: 'white',
        textAlign: 'justify',
        fontSize: 15,
        margin: 17,
    },

    bots:{
        
    },

    startFilm: {
        color: 'black',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        width: 150,
        height: 40,
        backgroundColor: '#dbdbe2',
        textAlign: 'center',
        paddingTop: 9,
        marginTop: 40,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#5f0000',
        marginLeft: 60,
        fontSize: 18
    },

    backsee:{
        color: 'black',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        width: 150,
        height: 40,
        backgroundColor: '#dbdbe2',
        textAlign: 'center',
        paddingTop: 9,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#5f0000',
        marginLeft: 50,
        fontSize: 18,

    },

});