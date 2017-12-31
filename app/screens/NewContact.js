import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import colors from '../config/colors';
import { TextInput } from '../components/TextInput';
import { PrimaryButton } from '../components/Buttons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const fields = [
  { placeholder: 'First Name', stateKey: 'firstName'},
  { placeholder: 'Last Name', stateKey: 'lastName'},
  { placeholder: 'Email', stateKey: 'email'},
  { placeholder: 'Mobile Phone', stateKey: 'mobilePhone'},
  { placeholder: 'Home PHone', stateKey: 'homePhone'},
  { placeholder: 'City', stateKey: 'city'},
  { placeholder: 'Birthday', stateKey: 'birthday'},
  { placeholder: 'Registered', stateKey: 'registered'},
  { placeholder: 'Username', stateKey: 'userName'},
]

class NewContact extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    onInputChange =(text, stateKey) => {
      const mod = {};
      mod[stateKey] = text;
      this.setState(mod);
    }

    handleSubmit = () => {
      alert('Submit');
    };

  render() {
    return (
      <KeyboardAwareScrollView style={{ backgroundColor: colors.background }}>
        {
          fields.map((field)=>(
              <TextInput
                key={field.stateKey}
                onChange={(text)=> this.onInputChange(text,field.stateKey)}
                {...field}
                />
            ))
        }
        <View style = {{ marginTop: 20 }}>
          <PrimaryButton
          label="Save"
          onPress={() => this.handleSubmit()}
          />
        </View>
      </KeyboardAwareScrollView>
      );
  }
}
export default NewContact;