import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121013',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },  
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'monospace'
  },
  circleButtonContainer: {
    width: 85,
    height: 85,
    marginHorizontal: 60,
    borderWidth: 3,
    borderColor: '#ff8ab1',
    borderRadius: 100,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#ffffff',
  },
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listImage: {
    height: 100,
    marginRight: 20,
  },
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#121013',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '15%',
    backgroundColor: '#2d2830',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#ffffff',
    fontFamily: 'monospace',
    fontSize: 15,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#ffffff',
    marginTop: 10,
  },
  image: {
    width: 320,
    height: 440,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "#f19cbb",
  },
})
