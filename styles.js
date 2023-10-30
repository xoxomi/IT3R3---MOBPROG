import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: 'white',
  },
  shapeContainer: {
    alignItems: 'center',
    marginBottom: 100,
  },
  circle: {
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    backgroundColor: 'lightblue', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 21,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 15,
    padding: 11,
    borderRadius: 50,
  },
  button: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  label: {
    fontWeight: 'bold',
    width: 150,
    marginRight: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelButtonContainer: {
    marginTop: 20,
    width: 100,
  },
  labelButton: {
    marginLeft: 200,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 80,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default styles;