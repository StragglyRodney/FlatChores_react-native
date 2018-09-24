<View style={styles.container}>
<View style={styles.title}>
  <Text style={styles.titleText}>My Flatmates</Text>
</View>

<View style={styles.iconView}>
  <Icon
    raised
    name="add-circle"
    size={50}
    type="font-awesome"
    color="#ffa18a"
    onPress={() => this.props.navigation.navigate("AddFlatMate")}
  />
</View>
<View style={styles.break}>
  
</View>
<ScrollView>
  {flatmates.map((l, i) => (
    <ListItem
      key={i}
      leftAvatar={{ source: { uri: l.avatar_url } }}
      rightIcon={<Icon
        raised
        name="arrow-forward"
        size={30}
      />}
      title={l.name}
      subtitle={l.subtitle}
      onPress={() => this.props.navigation.navigate("ViewProfile")}
    />
  ))}
</ScrollView>

<View style={styles.stepper}>
  <Stepper
    validation={false}
    activeDotStyle={styles.activeDot}
    inactiveDotStyle={styles.inactiveDot}
    showTopStepper={false}
    showBottomStepper={true}
    backButtonTitle="BACK"
    onPressNext={this.nextPage.bind(this)}
    nextButtonTitle="NEXT"
    activeStepStyle={styles.activeStep}
    inactiveStepStyle={styles.inactiveStep}
    activeStepTitleStyle={styles.activeStepTitle}
    inactiveStepTitleStyle={styles.inactiveStepTitle}
    activeStepNumberStyle={styles.activeStepNumber}
    inactiveStepNumberStyle={styles.inactiveStepNumber}
  >
    <View />
    <View />
  </Stepper>
</View>
</View>