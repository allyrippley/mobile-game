const colorPalette = {
  primary: '#a30000'
}


const global = {
  headerContainer: {
    height: 50,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colorPalette.primary,
    color: '#fff'
  },
  logoContainer: {
    paddingLeft: 10,
    flex: 0.4,
    color: '#fff',
    fontSize: 30,
    margin: 5,
  },
  headerLink: {
    color: '#fff',
    paddingRight: 10,
  },
  headerTitle: {
    flex: 0.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerActionBar: {
    flex: 0.4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    textAlign: 'right'
  },
  overlaySideFix: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,.7)'
  },
  sidebarContainer: {
    width: '200px',
    height: '100%',
    backgroundColor: colorPalette.primary,
    overflowY: 'scroll'
  },
  sidebarLink: {
    backgroundColor: '#a90000',
    borderBottom: '1px solid rgba(255,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
  }
}

export default global
