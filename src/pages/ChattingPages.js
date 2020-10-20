import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Content,
  Text,
  Badge,
  Container,
  Fab,
  Icon,
} from 'native-base';
import appStyles from '../appStyles';

export default class ChatScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ListItem avatar>
            <Left>
            <Thumbnail
                source={
                  require('../assets/dhanang.jpg')
                }
              />
            </Left>
            <Body>
              <Text>Mas Dhanang</Text>
              <Text note>Mas dhanang gimana tugasnya, uda selesai belum?</Text>
            </Body>
            <Right>
              <Text note style={{color: '#25D366'}}>
                02:30 pm
              </Text>
              <Badge style={appStyles.badgeChats}>
                <Text style={appStyles.badgeTextChats}>2</Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
            <Thumbnail
                source={
                  require('../assets/aldi.jpg')
                }
              />
            </Left>
            <Body>
              <Text>Mas Aldi</Text>
              <Text note>Di ngerjain tugasnya kita kerja bareng ya?</Text>
            </Body>
            <Right>
              <Text note style={{color: '#25D366'}}>
                08:00 pm
              </Text>
              <Badge style={appStyles.badgeChats}>
                <Text style={appStyles.badgeTextChats}>1</Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={
                  require('../assets/didi.jpg')
                }
              />
            </Left>
            <Body>
              <Text>Didi</Text>
              <Text note>From here on out, we should be meeting every single week.</Text>
            </Body>
            <Right>
              <Text note>4:45 pm</Text>
            </Right>
          </ListItem>
          
        </Content>
        <Fab style={appStyles.fabColor} position="bottomRight">
          <Icon type="MaterialIcons" name="chat" />
        </Fab>
      </Container>
    );
  }
}