import {View, StyleSheet, FlatList, Text} from 'react-native';
import CategoriasFilme from '../components/CategoriasFilme';

const categorias=CategoriasFilme();


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
 