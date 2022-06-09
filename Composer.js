import React from 'react';
import {TextInput, Button, View, StyleSheet, Text} from 'react-native';

class Composer extends React.Component {
  state = {
    comment: this.props.comment,
    selection: {
      start: this.props.comment.length,
      end: this.props.comment.length,
    },
  };

  onSelectionChange = e => {
    this.setState({selection: e.nativeEvent.selection});
    console.log('selection: ', e.nativeEvent.selection);
  };

  onChangeText = comment => this.setState({comment});

  addEmojiToTextBox = emoji => {
    const newComment =
      this.state.comment.slice(0, this.state.selection.start) +
      emoji +
      this.state.comment.slice(
        this.state.selection.end,
        this.state.comment.length,
      );

    this.setState(prevState => ({
      comment: newComment,
      selection: {
        start: prevState.selection.start + emoji.length,
        end: prevState.selection.start + emoji.length,
      },
    }));
  };

  render() {
    return (
      <View style={styles.box}>
        <TextInput
          autoComplete="off"
          textAlign="left"
          rejectResponderTermination={false}
          selection={this.state.selection}
          value={this.state.comment}
          onSelectionChange={this.onSelectionChange}
          onChangeText={this.onChangeText}
          style={styles.input}
          {...this.props}
        />
        <Button
          title="Add Emoji"
          onPress={() => this.addEmojiToTextBox('😃')}
        />
        <Text style={styles.log}>
          selection: {JSON.stringify(this.state.selection)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 2,
    width: '80%',
    margin: 8,
  },
  log: {
    width: '100%',
    margin: 8,
    textAlign: 'center',
  },
});

export default Composer;
