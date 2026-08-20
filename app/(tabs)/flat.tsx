import {View, StyleSheet, FlatList, Text, Image, TouchableOpacity} from 'react-native';

const categorias = [
  {
    id: "1",
    titulo: "Em Alta",
    filmes: [
      { id: "1a", titulo: "Oppenheimer", cor: "#1a1a2e", Imagem: 'https://assets-prd.ignimgs.com/2022/07/21/oppenheimer-poster-1658411601593.jpeg'},
      { id: "1b", titulo: "Duna 2", cor: "#16213e", Imagem:'https://images.hdqwalls.com/download/dune-part-2-5k-7s-1080x1920.jpg' },
      { id: "1c", titulo: "Barbie", cor: "#0f3460", Imagem:'https://i.pinimg.com/originals/3c/d2/f0/3cd2f0cb0b5a783830278db005384a43.jpg' },
      { id: "1d", titulo: "Poor Things", cor: "#533483", Imagem:'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Poor_Things_poster.jpg/250px-Poor_Things_poster.jpg' },
      { id: "1e", titulo: "Saltburn", cor: "#2b2d42", Imagem:'https://media.fstatic.com/sphdb8HEfvAmMGcVZUBdjJAblN8=/600x889/smart/filters:format(webp)/media/movies/covers/2023/12/cats_FFI3gwm.jpg' },
    ],
  },
  {
    id: "2",
    titulo: "Ação",
    filmes: [
      { id: "2a", titulo: "John Wick 4", cor: "#1b1b2f", Imagem:'https://tse2.mm.bing.net/th/id/OIP.ftkxEjd_RfAU2OJJmYJ-ugHaKl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
      { id: "2b", titulo: "Missão Impossível", cor: "#162447", Imagem:'https://image.tmdb.org/t/p/original/hBKxN5Z8gRo2am0whMeQlPv19K4.jpg' },
      { id: "2c", titulo: "Top Gun", cor: "#1f4068", Imagem:'https://tse3.mm.bing.net/th/id/OIP.vsvHozkSuuS9qZ0keKhE6QHaKr?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
      { id: "2d", titulo: "Mad Max", cor: "#1b262c",Imagem:'https://images.moviesanywhere.com/c4e8a43058613acc41106533d8111928/a994fcb5-c2a4-44a4-b3f2-32b94ad66a01.jpg' },
    ],
  },
  {
    id: "3",
    titulo: "Comédia",
    filmes: [
      { id: "3a", titulo: "Superbad", cor: "#2d132c", Imagem:'https://image.tmdb.org/t/p/original/fCcR32nOa2NPPMXzkTnWPCFko0K.jpg' },
      { id: "3b", titulo: "The Grand Budapest", cor: "#1c3334", Imagem:'https://media.fstatic.com/1IxR-GEjsOq8l2FooJSgQpaUMYQ=/290x478/smart/media/movies/covers/2020/05/The_Grand_Budapest_Hotel_2014_ZpWoXmq.jpeg' },
      { id: "3c", titulo: "Knives Out", cor: "#2c003e", Imagem: 'https://de.web.img3.acsta.net/pictures/19/10/24/12/14/4734841.jpg' },
    ],
  },
  {
    id: "4",
    titulo: "Documentários",
    filmes: [
      { id: "4a", titulo: "Free Solo", cor: "#0d0d0d", Imagem:'https://tse4.mm.bing.net/th/id/OIP.QDYtGoEgLeSJIzZVfaigaAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
      { id: "4b", titulo: "The Social Dilemma", cor: "#001011", Imagem: 'https://tse3.mm.bing.net/th/id/OIP.VmjKwliav9zGOQvY4URQrwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
      { id: "4c", titulo: "My Octopus Teacher", cor: "#002b36", Imagem: 'https://m.media-amazon.com/images/M/MV5BMjU2ODY5YTctNTU0ZS00MTRiLTljOTQtYmU1YzVlN2M4MDBiXkEyXkFqcGc@._V1_.jpg' },
    ],
  },
  {
    id: "5",
    titulo: "Terror",
    filmes: [
      { id: "5a", titulo: "Hereditary", cor: "#200122", Imagem:'https://image.tmdb.org/t/p/original/f0RdurRZa5GeovywRENEGgPJf1l.jpg' },
      { id: "5b", titulo: "Midsommar", cor: "#190a05", Imagem:'https://tse1.mm.bing.net/th/id/OIP.jpVHE6ASsgCJjX0cCSZJdwHaK4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
      { id: "5c", titulo: "Get Out", cor: "#0a0a0a", Imagem:'https://images.moviesanywhere.com/1eac8b1747c905f18fbc228725204309/1406b595-0ac4-4bd7-90c4-65113b6b157a.jpg' },
    ],
  },
];


export default function App() {
    return (

      <View style={styles.backcolor}>
        <FlatList
          data={categorias}
          keyExtractor={i => i.id}
          renderItem={renderCategoria }
        />
      </View>

    );
}

function renderCategoria({ item } : {item:any}) {
  return (
    <View style={styles.categoria}>
      {item.titulo}
      <FlatList
      data={item.filmes}
      keyExtractor={filme => filme.id}
      horizontal={true}
      // showsHorizontalScrollIndicator = {false}
      // contentContainerStyle={{ paddingBottom: 40 }}
      renderItem={({ item }) => (
       <TouchableOpacity style={styles.bott}>     
          <View>
            <Image  
            source = {{uri: item.Imagem}}
            style={styles.filmage}
            />
              <Text style={styles.filmeTitulo}>{item.titulo}</Text>
           </View>
           </TouchableOpacity>
      )}
      />
    
    </View>
    )
}

const styles = StyleSheet.create({

    backcolor:{
    backgroundColor: '#000000',
    flex: 1,
  },

  cont1:{
    fontSize: 30,
    color:'#ffff',
    margin: 20,
  },

  bott:{
    height: '100%',
    padding: 5,
    marginRight: 25,
    borderRadius: 20, 
    marginTop: 4
  },

  categoria:{
    color:'#ffff',
    fontSize: 24,
    fontFamily:'Arial',
    height: 315,
    padding: 15,
    margin: 10,
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: '#47221e',
    
  },
  
  filmage:{
    width: 150, 
    height: 210,
    backgroundColor: '#000',
    borderRadius: 15,
    justifyContent: 'flex-end',
  },

  filmeTitulo:{
    color: '#fff',
    fontSize: 20,
    marginLeft: 5
  }
       
});
