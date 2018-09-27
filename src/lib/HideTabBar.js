/* Sets the tabBarVisibilty depending on where we are in the navigation stack */
export default (hideTabBar = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) tabBarVisible = false
  return { tabBarVisible }
})
