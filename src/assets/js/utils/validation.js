// Form Validation Utility
export class FormValidator {
    constructor() {
        this.errorContainer = null;
    }

    validateCareerForm(formData) {
        const errors = {};
        let isValid = true;

        // Validate full name
        const fullName = formData.get('fullName')?.trim();
        if (!fullName) {
            errors.fullName = 'Full name is required';
            isValid = false;
        } else if (fullName.length < 2) {
            errors.fullName = 'Full name must be at least 2 characters';
            isValid = false;
        } else if (!/^[a-zA-Z\s'-]+$/.test(fullName)) {
            errors.fullName = 'Full name can only contain letters, spaces, hyphens, and apostrophes';
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

        // Validate position
        const position = formData.get('position');
        if (!position) {
            errors.position = 'Please select a position of interest';
            isValid = false;
        }

        // Validate resume file
        const resumeFile = formData.get('resume');
        if (!resumeFile || resumeFile.size === 0) {
            errors.resume = 'Please upload your resume';
            isValid = false;
        } else if (!this.isValidResumeFile(resumeFile)) {
            errors.resume = 'Please upload a valid resume file (PDF, DOC, or DOCX)';
            isValid = false;
        } else if (resumeFile.size > 5 * 1024 * 1024) { // 5MB limit
            errors.resume = 'Resume file size must be less than 5MB';
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
        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        const allowedExtensions = ['.pdf', '.doc', '.docx'];

        // Check MIME type
        if (!allowedTypes.includes(file.type)) {
            // Fallback to extension check if MIME type is not reliable
            const fileName = file.name.toLowerCase();
            return allowedExtensions.some(ext => fileName.endsWith(ext));
        }

        return true;
    }

    displayErrors(errors) {
        // Clear existing errors first
        this.clearErrors();

        // Display each error
        Object.keys(errors).forEach(field => {
            const errorElement = document.getElementById(`${field}-error`);
            const inputElement = document.getElementById(field) || document.querySelector(`[name="${field}"]`);

            if (errorElement) {
                errorElement.textContent = errors[field];
                errorElement.style.display = 'block';
            }

            if (inputElement) {
                inputElement.classList.add('form-input--error');

                // Focus on the first error field
                if (Object.keys(errors)[0] === field) {
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

        // Remove error styling from inputs
        const inputElements = document.querySelectorAll('.form-input--error, .form-select--error, .form-file--error, .form-textarea--error');
        inputElements.forEach(element => {
            element.classList.remove('form-input--error', 'form-select--error', 'form-file--error', 'form-textarea--error');
        });
    }

    // Real-time validation helper
    setupRealTimeValidation(formElement) {
        if (!formElement) return;

        const inputs = formElement.querySelectorAll('input, select, textarea');

        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });

            input.addEventListener('input', () => {
                // Clear error on input if there was one
                if (input.classList.contains('form-input--error')) {
                    const errorElement = document.getElementById(`${input.name}-error`);
                    if (errorElement) {
                        errorElement.style.display = 'none';
                        input.classList.remove('form-input--error');
                    }
                }
            });
        });
    }

    validateField(field) {
        const formData = new FormData();
        formData.append(field.name, field.type === 'file' ? field.files[0] : field.value);

        // This is a simplified single-field validation
        // In a real implementation, you might want more sophisticated field-by-field validation
        const result = this.validateCareerForm(formData);

        if (result.errors[field.name]) {
            this.displayErrors({ [field.name]: result.errors[field.name] });
        }
    }
}