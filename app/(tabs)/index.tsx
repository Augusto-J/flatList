import {View, StyleSheet, FlatList, Text} from 'react-native';
 
const categorias = [
  {
    id: "1",
    titulo: "Em Alta",
    filmes: [
      { id: "1a", titulo: "Oppenheimer", cor: "#1a1a2e" },
      { id: "1b", titulo: "Duna 2", cor: "#16213e" },
      { id: "1c", titulo: "Barbie", cor: "#0f3460" },
      { id: "1d", titulo: "Poor Things", cor: "#533483" },
      { id: "1e", titulo: "Saltburn", cor: "#2b2d42" },
    ],
  },
  {
    id: "2",
    titulo: "Ação",
    filmes: [
      { id: "2a", titulo: "John Wick 4", cor: "#1b1b2f" },
      { id: "2b", titulo: "Missão Impossível", cor: "#162447" },
      { id: "2c", titulo: "Top Gun", cor: "#1f4068" },
      { id: "2d", titulo: "Mad Max", cor: "#1b262c" },
    ],
  },
  {
    id: "3",
    titulo: "Comédia",
    filmes: [
      { id: "3a", titulo: "Superbad", cor: "#2d132c" },
      { id: "3b", titulo: "The Grand Budapest", cor: "#1c3334" },
      { id: "3c", titulo: "Knives Out", cor: "#2c003e" },
    ],
  },
  {
    id: "4",
    titulo: "Documentários",
    filmes: [
      { id: "4a", titulo: "Free Solo", cor: "#0d0d0d" },
      { id: "4b", titulo: "The Social Dilemma", cor: "#001011" },
      { id: "4c", titulo: "My Octopus Teacher", cor: "#002b36" },
    ],
  },
  {
    id: "5",
    titulo: "Terror",
    filmes: [
      { id: "5a", titulo: "Hereditary", cor: "#200122" },
      { id: "5b", titulo: "Midsommar", cor: "#190a05" },
      { id: "5c", titulo: "Get Out", cor: "#0a0a0a" },
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
        <View style={[styles.filme, { backgroundColor: item.cor }]}>
              <Text style={styles.filmeTitulo}>{item.titulo}</Text>
           </View>
      )}
           
      />
   
    </View>
       
    )
}
 
const styles = StyleSheet.create({
 
    backcolor:{
    backgroundColor: '#010101',
    flex: 1,
  },
 
  cont1:{
    fontSize: 30,
    color:'#ffff',
    margin: 20,
  },
 
  categoria:{
    color:'#ffff',
    fontSize: 24,
    fontFamily:'Arial',
    height: 300,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#392525',
   
  },

  filme:{
    width: 150,
    height: 200,
    backgroundColor: '#000',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'flex-end',
    padding: 5,
  },
  
  filmeTitulo:{
    color: '#fff',
    fontSize: 20,
  }
       
});
 