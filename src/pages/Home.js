import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

//Será uma aplicação de cadastrar skills semelhante a parte do linkedin
export function Home() {
  const [newSkill, setNewSkill] = useState('');
  //o primeiro é meu estado e o segundo é a função que atualiza o meu estado.
  //Dentro do use state podemos passar um estado inicial
  //Não podemos setar diretamente no new Skill pois estariamos ferindo o principio da imutabilidaed.- se tentar até gera erro
  // Assim usamos  nosa funcção  no onchangeText
  const [myskills, setMySkills] = useState([]);
  // Nesse caso o setMySkill vai armazenar todas as nossas skills e seu valor inicial será um vetor vazio

  // o Handle deve ser usado quando a funcção é disparada com alguma interação do usuário , lidar com a interação do usuário.
  function handleNewAddSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
    // Crio um novo array com base no meu antigo de old state. Dessa forma usamos
    //o spread operator para despejar o que tinhamos no antigo no novo array. Sem o spread
    //iria ficar salvo na forma de array dentro array. -> algo nada convencional
    //setMySkills( [...myskills, newSkill]); poderíamos fazer assim também
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome Kevin</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleNewAddSkill} />
      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>
      {
        // QUando queremos usa Javascript dentro da tag JSX precisamos envolver elas em {}
        myskills.map(skill => (
          <SkillCard />
        ))
        //Nesse caso o map percorre cada skill dentro da nossa coleção e pega a skill nova que está entre chaves.
        // a Key em skill elimina o warning do react native. Pois ele pede para elemento ali ele pede para ter uma identificação
        // única
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
// sem colocar o default function podemos uasr o autoimport  , e quando for importado ficara entre {}
// Podemos passar um vetor de estilos como visto na linha 23. Ou seja reaproveitamos o estilo do title
//e colocamos um margin top no texto de my skills pela estilização padrão
