import { SUPPORTED_LANGUAGES } from '@/constants/constants';
import Form from 'react-bootstrap/Form';

function LanguageSelector({onChange}) {
  return (
    <Form.Select aria-label="Spanish" className='bg-transparent'>
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option className='bg-[#4D5562] text-white' key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  );
}

export default LanguageSelector;