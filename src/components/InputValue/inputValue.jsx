import { PureComponent } from 'react';
import { InputVal } from './inputValue.styled';

export class InputValue extends PureComponent {
  render() {
    return (
      <>
        <InputVal
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </>
    );
  }
}
