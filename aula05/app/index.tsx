import { Text, View } from "react-native";
import { Button, Icon, Input, Card, ButtonGroup,ListItem,Avatar  } from '@rneui/themed';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Ola</Text>
   
  <Button title="login" color="error"  />
  <Button title="senha" type="outline" />
  <Button radius={"sm"} type="solid">
  Save
  <Icon name="save" color="white" />
</Button>
<Input
      placeholder='INPUT WITH ICON'
      leftIcon={{ type: 'font-awesome', name: 'comment' }}
    />
<Button title="Solid" type="solid" loading />
<Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='#f50'
        onPress={() => console.log('hello')} />
        <>
  <ListItem>
    <Icon name="inbox" type="material-community" color="grey" />
    <ListItem.Content>
      <ListItem.Title>Inbox</ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
  <ListItem>
    <Icon name="trash-can-outline" type="material-community" color="grey" />
    <ListItem.Content>
      <ListItem.Title>Trash</ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
</>
<>
  <ListItem bottomDivider>
    <Avatar
      rounded
      source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
    />
    <ListItem.Content>
      <ListItem.Title>John Doe</ListItem.Title>
      <ListItem.Subtitle>President</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
  <ListItem bottomDivider>
    <Avatar
      rounded
      icon={{
        name: "person-outline",
        type: "material",
        size: 26,
      }}
      containerStyle={{ backgroundColor: "#c2c2c2" }}
    />
    <ListItem.Content>
      <ListItem.Title>Alba King</ListItem.Title>
      <ListItem.Subtitle>Vice President</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
  <ListItem>
    <Avatar rounded title="A" containerStyle={{ backgroundColor: "grey" }} />
    <ListItem.Content>
      <ListItem.Title>Caique Kenji</ListItem.Title>
      <ListItem.Subtitle>Vice Chairman</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
</>
    </View>
  );
}
