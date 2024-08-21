class Signup {
    clicksignupbutton() {
        cy.contains("Sign Up").should('be.visible').click();
    }
    checksignupbuttondisable() {
        cy.scrollTo('bottom')
        cy.get('.button-spinner-container').should('be.disabled');
    }
    checkAllFieldsVisibleAndActive() {
        cy.get('#firstName').should('be.visible').should('exist').click();
        cy.get('#lastName').should('be.visible').should('exist').click();
        cy.get('#company').should('be.visible').should('exist').click();
        cy.get('#position').should('be.visible').should('exist').click();
        cy.get('#type').should('be.visible').should('exist').select('Select Type');
        cy.get('#state').should('be.visible').should('exist').select('Select State');
        cy.get('#city').should('be.visible').should('exist').click();
        cy.get('#zip').should('be.visible').should('exist').click();
        cy.get('#address').should('be.visible').should('exist').click();
        cy.get('#couponCode').should('be.visible').should('exist').click();
        cy.get('#phone').should('be.visible').should('exist').click();
        cy.get('#email').should('be.visible').should('exist').click();
        cy.get('#password').should('be.visible').should('exist').click();
        cy.get('#confirmPassword').should('be.visible').should('exist').click();
    }

    checkAllFieldsTypeable() {
        cy.get('#firstName').should('be.visible').should('exist').type("John")
        cy.get('#lastName').should('be.visible').should('exist').type("Musk")
        cy.get('#company').should('be.visible').should('exist').type("InNeed")
        cy.get('#position').should('be.visible').should('exist').type("TestOps")
        cy.get('#type').should('be.visible').should('exist').select('Operator');
        cy.get('#state').should('be.visible').should('exist').select('Alabama');
        cy.get('#city').should('be.visible').should('exist').type("New");
        cy.get('#zip').should('be.visible').should('exist').type("89705");
        cy.get('#address').should('be.visible').should('exist').type("Sint quibusdam");
        cy.get('#couponCode').should('be.visible').should('exist').type("897053");
        cy.get('#phone').should('be.visible').should('exist').type("183.118.7897");
        cy.get('#email').should('be.visible').should('exist').type("Test@g.c");
        cy.get('#password').should('be.visible').should('exist').type("123456");
        cy.get('#confirmPassword').should('be.visible').should('exist').type("123456");
    }

    checkRequiredFieldErrorMessages() {
        cy.get('#firstName').should('be.visible').should('exist').click();
        cy.get('#lastName').should('be.visible').should('exist').click();
        cy.contains(" Please enter First Name. ").should('be.visible')
        cy.get('#firstName').click();
        cy.contains(" Please enter Last Name. ").should('be.visible')
        cy.get('#company').should('be.visible').should('exist').click();
        cy.get('#position').should('be.visible').should('exist').click();
        cy.get('#type').should('be.visible').should('exist').select('Select Type');
        cy.get('#state').should('be.visible').should('exist').select('Select State');
        cy.contains(" Please select Type. ").should('be.visible')
        cy.get('#city').should('be.visible').should('exist').click();
        cy.contains(" Please select State. ").should('be.visible')
        cy.get('#zip').should('be.visible').should('exist').click();
        cy.contains(" Exceed number of characters. ").should('be.visible')
        cy.get('#address').should('be.visible').should('exist').click();
        cy.contains(" Exceed number of characters. ").should('be.visible')
        cy.get('#couponCode').should('be.visible').should('exist').type("1")
        cy.get('#phone').should('be.visible').should('exist').click();
        cy.contains("Subscription code must be 6 characters. ").should('be.visible')
        cy.get('#email').should('be.visible').should('exist').click();
        cy.get('#password').should('be.visible').should('exist').click();
        cy.contains(" Please enter a valid email address. ").should('be.visible')
        cy.get('#confirmPassword').should('be.visible').should('exist').click();
        cy.contains(" Password should contain 8 characters with at least 1 uppercase letter and 1 special character. ").should('be.visible')
        cy.get('#password').click();
        cy.contains(" Passwords do not match. ").should('be.visible')
    }
    checkInvalidEmailFormatError() {
        cy.get('#email').should('be.visible').should('exist').type("test")
        cy.get('#password').click();
        cy.contains(" Please enter a valid email address. ").should('be.visible')
    }
    checkPasswordStrengthError() {
        cy.get('#phone').click();
        cy.get('#password').should('be.visible').should('exist').type("12345");
        cy.get('#confirmPassword').click();
        cy.contains(" Password should contain 8 characters with at least 1 uppercase letter and 1 special character. ").should('be.visible')
    }
    checkPasswordMismatchError() {
        cy.get('#phone').click();
        cy.get('#password').should('be.visible').should('exist').type("Test@1234");
        cy.get('#confirmPassword').should('be.visible').should('exist').type("Test@12345");
        cy.contains(" Passwords do not match. ").should('be.visible')
    }
    checkValidsubScriptionError() {
        cy.get('#firstName').should('be.visible').should('exist').type("John")
        cy.get('#lastName').should('be.visible').should('exist').type("Musk")
        cy.get('#company').should('be.visible').should('exist').type("InNeed")
        cy.get('#position').should('be.visible').should('exist').type("TestOps")
        cy.get('#type').should('be.visible').should('exist').select('Operator');
        cy.get('#state').should('be.visible').should('exist').select('Alabama');
        cy.get('#city').should('be.visible').should('exist').type("New");
        cy.get('#zip').should('be.visible').should('exist').type("89705");
        cy.get('#address').should('be.visible').should('exist').type("Sint quibusdam");
        cy.get('#couponCode').should('be.visible').should('exist').type("897053");
        cy.get('#phone').should('be.visible').should('exist').type("183.118.7897");
        cy.get('#email').should('be.visible').should('exist').type("Test1@g.com");
        cy.get('#password').should('be.visible').should('exist').type("Test@1234");
        cy.get('#confirmPassword').should('be.visible').should('exist').type("Test@1234");
        cy.get('.button-spinner-container').should('be.visible').click();
        cy.contains("Please enter a valid subscription code.").scrollIntoView().should('be.visible');
    }
    checkduplicateemail() {
        cy.get('#firstName').should('be.visible').should('exist').type("John")
        cy.get('#lastName').should('be.visible').should('exist').type("Musk")
        cy.get('#company').should('be.visible').should('exist').type("InNeed")
        cy.get('#position').should('be.visible').should('exist').type("TestOps")
        cy.get('#type').should('be.visible').should('exist').select('Operator');
        cy.get('#state').should('be.visible').should('exist').select('Alabama');
        cy.get('#city').should('be.visible').should('exist').type("New");
        cy.get('#zip').should('be.visible').should('exist').type("89705");
        cy.get('#address').should('be.visible').should('exist').type("Sint quibusdam");
        cy.get('#phone').should('be.visible').should('exist').type("183.118.7897");
        cy.get('#email').should('be.visible').should('exist').type("Test@g.com");
        cy.get('#password').should('be.visible').should('exist').type("Test@1234");
        cy.get('#confirmPassword').should('be.visible').should('exist').type("Test@1234");
        cy.get('.button-spinner-container').should('be.visible').click();
        cy.contains(" A user with this email address already exists. ").scrollIntoView().should('be.visible');
    }
    checkSuccessfulFormSubmission() {
        cy.get('#firstName').should('be.visible').should('exist').type("John")
        cy.get('#lastName').should('be.visible').should('exist').type("Musk")
        cy.get('#company').should('be.visible').should('exist').type("InNeed")
        cy.get('#position').should('be.visible').should('exist').type("TestOps")
        cy.get('#type').should('be.visible').should('exist').select('Operator');
        cy.get('#state').should('be.visible').should('exist').select('Alabama');
        cy.get('#city').should('be.visible').should('exist').type("New");
        cy.get('#zip').should('be.visible').should('exist').type("89705");
        cy.get('#address').should('be.visible').should('exist').type("Sint quibusdam");
        cy.get('#phone').should('be.visible').should('exist').type("183.118.7897");
        cy.get('#email').should('be.visible').should('exist').type("Test@g.com");
        cy.get('#password').should('be.visible').should('exist').type("Test@1234");
        cy.get('#confirmPassword').should('be.visible').should('exist').type("Test@1234");
        cy.get('.button-spinner-container').should('be.visible').click();
        cy.contains("thank you!").should('be.visible');
        cy.contains(" Thank you for completing your registration. Please log into the eCapIntel site via login link in your email. ").should('be.visible');
    }

}
export default Signup