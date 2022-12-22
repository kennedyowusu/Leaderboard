import {
  userName,
  userScore,
} from './module/variables.js';

// Reset form to empty
const resetForm = () => {
  userName.value = '';
  userScore.value = '';
};

// Export the function
export default resetForm;