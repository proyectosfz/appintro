import {useState} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import {styles, estilo2} from './assets/styles/Mystyles';
import Footer from './components/Footer';
import Banner from './components/Banner';
//const App = () => {
export default function App(){
  // definición de los estados del componente, con sus respectivos metodos para cambiar info
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState(0);
  // Métodos
  let mostrarNombre = ()=>{
    alert(nombre);
  }
  // Metodo para calcular
  let calcular = (oper)=>{
    let mresultado = 0;
    switch(oper){
      case "+":
        mresultado = parseFloat(valor1) + parseFloat(valor2)
        break;
      case "-":
        mresultado = parseFloat(valor1) - parseFloat(valor2)
        break;
      case "*":
        mresultado = parseFloat(valor1) * parseFloat(valor2)
        break;
      case "/":
          mresultado = parseFloat(valor1) / parseFloat(valor2)
          break;
    }
    setResultado(mresultado)
  }
  return (
    <View style={styles.container}>
      <Banner src="calc1.jpg"></Banner>
      <View style={[estilo2.viewChild,{flex:5, backgroundColor:'gray'}]}>
          <Text>Valor 1</Text>
          <TextInput
            placeholder='Ingrese valor 1'
            onChangeText={valor1 => setValor1(valor1)}
            style={{color:'yellow', borderWidth:2, borderColor:'blue', padding:5,textAlign:'center'}}
            value={valor1}
          />
          <Text>Valor 2</Text>
          <TextInput
            placeholder='Ingrese valor 2'
            onChangeText={valor2 => setValor2(valor2)}
            style={{color:'yellow', borderWidth:2, borderColor:'blue', padding:5,textAlign:'center',marginBottom:20}}
            value={valor2}
          />
           <Text>Resultado</Text>
           <Text style={{marginBottom:30}}>{resultado}</Text>
          <Button
            title="Sumar"
            onPress={()=>calcular('+')}
          />
          <TouchableOpacity 
              style={{backgroundColor:'red',borderRadius:5,marginTop:10}}
              onPress={()=>calcular("-")}
              >
            <Text style={{color:'white', fontSize:20, fontWeight:'bold', padding:10}}>Restar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={{backgroundColor:'green',borderRadius:5,marginTop:5}}
              onPress={()=>calcular("*")}
              >
            <Text style={{color:'white', fontSize:20, fontWeight:'bold', padding:10}}>Multiplicar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={{backgroundColor:'powderblue',borderRadius:5,marginTop:5}}
              onPress={()=>calcular("/")}
              >
            <Text style={{color:'white', fontSize:20, fontWeight:'bold', padding:10}}>Dividir</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={{backgroundColor:'black',borderRadius:5,marginTop:5}}
              onPress={()=>{
                setValor1('');
                setValor2('');
                setResultado(0)
              }}
              >
            <Text style={{color:'white', fontSize:20, fontWeight:'bold', padding:10}}>Limpiar</Text>
          </TouchableOpacity>


          
          
      </View>
      <Footer titulo="Info" subtitulo="Redes sociales"></Footer>
    </View>
  );
}



//export default App;
