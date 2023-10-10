import { SearchStyles } from './SearchStyles';
import SearchInput from './search-input/SearchInput';

export default function Search() {

  const onChange = event => {
    setText(event.target.value);
  };

  return (
    <SearchStyles>
      <SearchInput />
    </SearchStyles>
  );
}
