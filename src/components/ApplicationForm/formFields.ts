import { FormField } from './types';

export const formFields: FormField[] = [
  // About Section
  { id: 'first_last_name', label: 'First and last name', section: 'about', required: true },
  { id: 'bio', label: 'Bio', section: 'about' },
  { id: 'gender', label: 'Gender', section: 'about' },
  { id: 'tshirt_size', label: 'T-Shirt Size', section: 'about' },
  { id: 'ethereum_wallet', label: 'Ethereum Wallet', section: 'about' },

  // Education Section
  { id: 'education_details', label: 'All Education details', section: 'education' },

  // Experience Section
  { id: 'domain_expertise', label: 'Domain Expertise', section: 'experience' },
  { id: 'skills', label: 'Skills', section: 'experience' },
  { id: 'resume', label: 'Resume', section: 'experience' },
  { id: 'work_experience', label: 'Work Experience', section: 'experience' },

  // Online Profiles Section
  { id: 'github', label: 'GitHub', section: 'online_profiles' },
  { id: 'dribbble', label: 'Dribbble', section: 'online_profiles' },
  { id: 'behance', label: 'Behance', section: 'online_profiles' },
  { id: 'stackoverflow', label: 'Stack Overflow', section: 'online_profiles' },
  { id: 'linkedin', label: 'LinkedIn', section: 'online_profiles' },
  { id: 'kaggle', label: 'Kaggle', section: 'online_profiles' },
  { id: 'facebook', label: 'Facebook', section: 'online_profiles' },
  { id: 'twitter', label: 'Twitter', section: 'online_profiles' },
  { id: 'topcoder', label: 'Topcoder', section: 'online_profiles' },

  // Contact Section
  { id: 'phone_number', label: 'Phone Number', section: 'contact' },
  { id: 'email', label: 'Email', section: 'contact', required: true },
  { id: 'city', label: 'City', section: 'contact' },
  { id: 'emergency_contact', label: 'Emergency Contact Details', section: 'contact' },
];