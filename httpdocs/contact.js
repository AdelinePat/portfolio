
const constraints = {
    name: {
        presence: {allowEmpty: false}
    },
    firstname: {
        presence: {allowEmpty: false}
    },
    email: {
        presence: {allowEmpty: false},
        email: true
    },
    subject: {
        presence: {allowEmpty: false}
    },
    message: {
        presence: {allowEmpty: false}
    }
};

const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
    const formValues = {
        name: form.elements.nom.value,
        firstname : form.elements.prenom.value,
        email: form.elements.email.value,
        subject : form.elements.objet.value,
        message: form.elements.message_content.value
    };

    const errors = validate(formValues, constraints);

    if (errors) {
        event.preventDefault();
        const errorMessage = Object
            .values(errors)
            .map(function (fieldValues) {
                return fieldValues.join(', ')
            })
            .join("\n");

        alert(errorMessage);
    }
}, false);

function onRecaptchaSuccess () {
    document.getElementById('contact-form').submit()
}
