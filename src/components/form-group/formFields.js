import { required, minLength, email } from '../../utils/validatorsUtils';

export default {
    newsletter: [{ label: 'email', type: 'text', name: 'email', validators: [required, minLength(4), email] }]
}