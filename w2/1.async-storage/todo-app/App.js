import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert,
  FlatList,
  Switch,
  Modal,
  ScrollView,
} from 'react-native';
import storeData from './component/storeData';
import getData from './component/getData';
import removeData from './component/removeData';
import clearAll from './component/clearAll';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState({
    id: null,
    text: '',
    status: false,
  });

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getData('todos').then((todos) => {
      console.log(todos);
      if (todos) {
        setTodos(todos);
      }
    });
  }, []);

  // useEffect(() => {
  //    if(todos.length!==0)
  //    {
  //      storeData('todos',todos);
  //    }

  //   console.log(todos);
  // }, [todos]);

  const findMaxId = () => {
    if (todos.length === 0) {
      return 0;
    } else {
      let max = +todos[0].id;
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id > max) {
          max = todos[i].id;
        }
      }

      return max;
    }
  };

  const addTodo = () => {
    const max = findMaxId();
    if (text !== '') {
      const todo = {
        id: max + 1,
        text: text,
        status: false,
      };

      const data = [...todos, todo];
      storeData('todos', data).then(()=>{

        Alert.alert("TODO Added")
      });
      setTodos(data);
    } else {
      Platform.OS === 'android' || Platform.OS === 'ios'
        ? Alert.alert('blank todo not allowed')
        : alert('blank todo not allowed');
    }
  };

  // const deleteData = () => {
  //   removeData('todos').then(() => {
  //     setTodos([]);
  //   });
  // };

  const deleteTodo = (index) => {
    todos.splice(index, 1);
    console.log(todos);
    storeData('todos', todos).then(()=>{

      Alert.alert("TODO Deleted")
    });
    setTodos([...todos]);
  };

  const UpdateTodo = (id) => {
    const data = todos.map((element, index) => {
      return id === element.id
        ? {
            ...element,
            id: selectedTodo.id,
            text: selectedTodo.text,
            status: selectedTodo.status,
          }
        : element;
    });

    storeData('todos', data).then(() => {
      setSelectedTodo({ id: null, text: '' });
      Alert.alert("TODO Updated")
    });
    setTodos([...data]);
  };

  const toggleSwitch = (id) => {
    console.log(id);

    const data = todos.map((element, index) => {
      return element.id === id
        ? { ...element, status: !element.status }
        : element;
    });
    storeData('todos', data).then(()=>{

      Alert.alert("Completion Status Changed")
    });
    setTodos(data);
  };

  const renderItems = ({ item, index }) => {
    return (
      <View style={styles.renderItems}>
        <TouchableOpacity
          style={{ width: 100, textAlign: 'center' }}
          onLongPress={() => {
            {
              Platform.OS === 'android' || Platform.OS === 'ios'
                ? Alert.alert('press enter to appply modification')
                : alert('press enter to apply modification');
            }
            setModalVisible(true);
            setSelectedTodo({
              id: item.id,
              text: item.text,
              status: item.status,
            });
          }}
          onPressOut={() => {
            setModalVisible(false);
          }}
        >
          {selectedTodo.id ? (
            <Modal
              style={styles.modal}
              animationType="fade"
              transparent={true}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}
            >
              <TextInput
                value={selectedTodo.text}
                onChangeText={(text) =>
                  setSelectedTodo({ ...selectedTodo, text })
                }
                onSubmitEditing={() => {
                  // Call a function to update the todo item in your data store
                  UpdateTodo(selectedTodo.id);
                  // console.log(item.id);
                  // setSelectedTodo({ id: null, text: '' });
                }}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                style={styles.modalView}
              />
            </Modal>
          ) : (
            <Text>{item.text}</Text>
          )}
        </TouchableOpacity>
        <View>
          <Switch
            trackColor={{ false: '#6a656e', true: '#81b0ff' }}
            thumbColor={item.status ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            value={item.status}
            onValueChange={() => {
              toggleSwitch(item.id);
            }}
          />
        </View>
        <AntDesign
          name="delete"
          size={24}
          color="red"
          onPress={() => {
            deleteTodo(index);
          }}
        />
      </View>
    );
  };

  const EmptyComponent = () => {
    return (
      <View>
        <Text>No TODOS...⏲</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.addTodoBox}>
        <TextInput
          placeholder="Enter todo..."
          value={text}
          onChangeText={setText}
          style={styles.addTodoTextInput}
        />

        <TouchableOpacity onPress={addTodo} style={styles.addTodobtn}>
          <Text>Add TODO</Text>
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity onPress={deleteData}>
        <Text>Remove TODO</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={clearAll}>
        <Text>clear All</Text>
      </TouchableOpacity> */}

      <ScrollView style={{ height: 500 }}>
        <FlatList
          style={styles.flatList}
          data={todos}
          renderItem={renderItems}
          ListEmptyComponent={EmptyComponent}
          keyExtractor={(element, index) => {
            return element + index;
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  addTodoBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  addTodoTextInput: {
    borderWidth: 1,
    borderColor: 'grey',
    marginHorizontal: 10,
    padding: 5,
  },
  addTodobtn: {
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 5,
    color: 'white',
  },
  flatList: {
    marginTop: 20,
    height: 500,
  },
  renderItems: {
    flexDirection: 'row',

    borderWidth: 2,
    justifyContent: 'space-around',
    width: 300,
    marginVertical: 10,
    padding: 5,
  },
  modal: {},
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
