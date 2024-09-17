import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    paddingTop: 0,
    backgroundColor: '#FDFBF6',
    // fontFamily:'nunito-medium',
  },
  containerContent: {
    flex: 1,
    padding: 16,
    paddingTop: 10,
    backgroundColor: '#FDFBF6',
    // marginHorizontal:20,
    fontFamily:'nunito-medium',

  },
  titleText: {
    fontFamily:'nunito-bold',
    fontSize: 28,
    color: '#4EA0B7',
    textAlign: 'center',
    marginBottom: 50,
    fontWeight: "500",
  },
  flagButton: {
    position: 'absolute',
    right: 20,
    top: 60,
  },
  flagIcon: {
    width: 40,
    height: 40,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    
  },
  subButton: {
    textAlign: 'center',
    color: '#222',
    marginBottom: 20,
  },
  mainButtonContainer:{
    alignItems:'center',
    textAlign:'center'
  },
  buttonContainer:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    gap:50
  },
  mainButton: {
    backgroundColor: '#4EA0B7',
    borderRadius: 50,
    height: 45,
    padding:10,
    fontSize:14,
    width:'60%',
    textAlign: 'center',
    marginBottom:10,
  },
  textMainButton:{
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    fontFamily: 'nunito-bold',
  },
  orText: {
    textAlign: 'center',
    color: '#ccc',
    marginVertical: 20,
  },
  googleButton: {
    // backgroundColor: '#F4E0BB',
    borderRadius: 8,
    height: 50,
  },
  facebookButton: {
    // backgroundColor: '#4681C9',
    borderRadius: 8,
    height: 50,
  },
  socialButtonText: {
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    borderRadius: 25,
    margin: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  searchIcon: {
    color: 'gray',
    fontSize: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: '#000',
  },
});
