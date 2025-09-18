// Form Validation Utility
export class FormValidator {
    constructor() {
        this.errorContainer = null;
    }

    validateCareerForm(formData) {
        const errors = {};
        let isValid = true;

        // Validate first name
        const firstName = formData.get('firstName')?.trim();
        if (!firstName) {
            errors.firstName = 'First name is required';
            isValid = false;
        } else if (firstName.length < 2) {
            errors.firstName = 'First name must be at least 2 characters';
            isValid = false;
        } else if (!/^[a-zA-Z\s'-]+$/.test(firstName)) {
            errors.firstName = 'First name can only contain letters, spaces, hyphens, and apostrophes';
            isValid = false;
        }

        // Validate last name
        const lastName = formData.get('lastName')?.trim();
        if (!lastName) {
            errors.lastName = 'Last name is required';
            isValid = false;
        } else if (lastName.length < 2) {
            errors.lastName = 'Last name must be at least 2 characters';
            isValid = false;
        } else if (!/^[a-zA-Z\s'-]+$/.test(lastName)) {
            errors.lastName = 'Last name can only contain letters, spaces, hyphens, and apostrophes';
            isValid = false;
        }

        // Validate email
        const email = formData.get('email')?.trim();
        if (!email) {
            errors.email = 'Email address is required';
            isValid = false;
        } else if (!this.isValidEmail(email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        // Validate phone
        const phone = formData.get('phone')?.trim();
        if (!phone) {
            errors.phone = 'Phone number is required';
            isValid = false;
        } else if (!this.isValidPhone(phone)) {
            errors.phone = 'Please enter a valid phone number';
            isValid = false;
        }

        // Validate resume file
        const resumeFile = formData.get('resume');
        if (!resumeFile || resumeFile === 'null' || (resumeFile instanceof File && resumeFile.size === 0)) {
            errors.resume = 'Please upload your resume';
            isValid = false;
        } else if (resumeFile instanceof File) {
            if (!this.isValidResumeFile(resumeFile)) {
                errors.resume = 'Please upload a valid resume file (PDF, DOC, or DOCX)';
                isValid = false;
            } else if (resumeFile.size > 5 * 1024 * 1024) { // 5MB limit
                errors.resume = 'Resume file size must be less than 5MB';
                isValid = false;
            }
        } else {
            // Handle case where resumeFile is not a proper File object
            errors.resume = 'Please upload your resume';
            isValid = false;
        }

        // Validate cover letter (optional, but if provided, check length)
        const coverLetter = formData.get('coverLetter')?.trim();
        if (coverLetter && coverLetter.length > 2000) {
            errors.coverLetter = 'Cover letter must be less than 2000 characters';
            isValid = false;
        }

        return { isValid, errors };
    }

    validateContactForm(formData) {
        const errors = {};
        let isValid = true;

        // Validate name
        const name = formData.get('name')?.trim();
        if (!name) {
            errors.name = 'Name is required';
            isValid = false;
        } else if (name.length < 2) {
            errors.name = 'Name must be at least 2 characters';
            isValid = false;
        } else if (!/^[a-zA-Z\s'-]+$/.test(name)) {
            errors.name = 'Name can only contain letters, spaces, hyphens, and apostrophes';
            isValid = false;
        }

        // Validate email
        const email = formData.get('email')?.trim();
        if (!email) {
            errors.email = 'Email address is required';
            isValid = false;
        } else if (!this.isValidEmail(email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        // Validate phone (optional, but if provided, check validity)
        const phone = formData.get('phone')?.trim();
        if (phone && !this.isValidPhone(phone)) {
            errors.phone = 'Please enter a valid phone number';
            isValid = false;
        }

        // Validate message
        const message = formData.get('message')?.trim();
        if (!message) {
            errors.message = 'Message is required';
            isValid = false;
        } else if (message.length < 10) {
            errors.message = 'Message must be at least 10 characters';
            isValid = false;
        } else if (message.length > 2000) {
            errors.message = 'Message must be less than 2000 characters';
            isValid = false;
        }

        return { isValid, errors };
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPhone(phone) {
        // Remove all non-digit characters for validation
        const cleanPhone = phone.replace(/\D/g, '');

        // Check if it's a valid length (10-15 digits)
        if (cleanPhone.length < 10 || cleanPhone.length > 15) {
            return false;
        }

        // Basic phone number pattern (supports various formats)
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(cleanPhone);
    }

    isValidResumeFile(file) {
        // Safety check - ensure file exists and has required properties
        if (!file || !file.name || typeof file.name !== 'string') {
            return false;
        }

        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        const allowedExtensions = ['.pdf', '.doc', '.docx'];

        // Check MIME type first
        if (allowedTypes.includes(file.type)) {
            return true;
        }

        // Fallback to extension check if MIME type is not reliable or empty
        const fileName = file.name.toLowerCase();
        return allowedExtensions.some(ext => fileName.endsWith(ext));

        return true;
    }

    displayErrors(errors, autoFocus = false) {
        // Display each error without clearing others during real-time validation
        Object.keys(errors).forEach(field => {
            const errorElement = document.getElementById(`${field}-error`);
            const inputElement = document.getElementById(field) || document.querySelector(`[name="${field}"]`);

            if (errorElement) {
                errorElement.textContent = errors[field];
                errorElement.style.display = 'block';
            }

            if (inputElement) {
                inputElement.classList.add('form-input--error');

                // Only focus and scroll on form submission, not during real-time validation
                if (autoFocus && Object.keys(errors)[0] === field) {
                    inputElement.focus();
                    inputElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }

    clearErrors() {
        // Clear all error messages
        const errorElements = document.querySelectorAll('.form-error');
        errorElements.forEach(element => {
            element.textContent = '';
            element.style.display = 'none';
        });

        // Remove error styling from inputs (handle both naming conventions)
        const inputElements = document.querySelectorAll('.form-input--error, .form-select--error, .form-file--error, .form-textarea--error, .error');
        inputElements.forEach(element => {
            element.classList.remove('form-input--error', 'form-select--error', 'form-file--error', 'form-textarea--error', 'error');
        });
    }

    // Real-time validation helper
    setupRealTimeValidation(formElement, formType = 'career') {
        if (!formElement) return;

        const inputs = formElement.querySelectorAll('input, select, textarea');

        inputs.forEach(input => {
            // Validate field on blur (when user leaves the field)
            input.addEventListener('blur', (e) => {
                // Only validate if the field has content or was previously in error state
                if (input.value.trim() || input.classList.contains('form-input--error')) {
                    this.validateField(input, formType);
                }
            });

            // Clear errors on input (when user starts typing)
            input.addEventListener('input', () => {
                // Check for both error class names
                const hasError = input.classList.contains('form-input--error') || 
                               input.classList.contains('error');
                
                if (hasError) {
                    const errorElement = document.getElementById(`${input.name}-error`);
                    if (errorElement) {
                        errorElement.style.display = 'none';
                    }
                    
                    // Remove both possible error classes
                    input.classList.remove('form-input--error', 'error');
                    
                    // Trigger a custom event to notify Vue component
                    input.dispatchEvent(new CustomEvent('error-cleared', {
                        detail: { fieldName: input.name }
                    }));
                }
            });
        });
    }

    validateField(field, formType = 'career') {
        const formData = new FormData();
        
        if (field.type === 'file') {
            // Handle file input - append the file or null if no file selected
            const file = field.files && field.files[0] ? field.files[0] : null;
            formData.append(field.name, file);
        } else {
            formData.append(field.name, field.value);
        }

        // Use appropriate validation method based on form type
        const result = formType === 'contact' 
            ? this.validateContactForm(formData)
            : this.validateCareerForm(formData);

        if (result.errors[field.name]) {
            this.displayErrors({ [field.name]: result.errors[field.name] });
        }
    }
}