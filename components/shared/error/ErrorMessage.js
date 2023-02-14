import { ErrorMessageStyles } from './ErrorMessageStyles';

export default function ErrorMessage({ errorMessage }) {
  return (
    <ErrorMessageStyles>
      <p>{ErrorMessage}</p>
    </ErrorMessageStyles>
  );
}
