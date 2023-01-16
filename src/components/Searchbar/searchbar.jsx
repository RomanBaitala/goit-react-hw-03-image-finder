import { toast } from 'react-toastify';
import { PureComponent } from 'react';
import { ButtonSearch } from 'components/Button/buttonSearch';
import { SearchBar, SearchForm } from './searchbar.styled';
import { InputValue } from 'components/InputValue/inputValue';

export class Searchbar extends PureComponent {
  state = {
    query: '',
  };
  handleQueryChange = evt => {
    this.setState({ query: evt.currentTarget.value.toLowerCase() });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.query.trim() === '') {
      toast.error('Nothing to search😉🐷', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <>
        <SearchBar>
          <SearchForm onSubmit={this.handleSubmit}>
            <ButtonSearch />
            <InputValue
              onChange={this.handleQueryChange}
              value={this.state.query}
            />
          </SearchForm>
        </SearchBar>
      </>
    );
  }
}
