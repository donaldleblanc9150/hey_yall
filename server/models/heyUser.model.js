const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const heyUserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minlength: [
            2,
            'please enter a first name of 2 or more characters.'
        ]
    },
    lasttName: {
        type: String,
        minlength: [
            2,
            'please enter a last name of 2 or more characters.'
        ]
    },
    email: {
        type: String,
        unique: true,
        validate: [
            val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            'Please enter a Valid email address'
        ]
    },
    password: {
        type: String,
        minlength: [
            8,
            'Please enter a password of at least 7 characters'
        ]
    }
}, {
    timestamps: true
});

heyUserSchema.virtual('passwordConfirmation', {
    get: () => this._passwordConfirmation,
    set: val => this._passwordConfirmation = val
})

heyUserSchema.pre('validate', function(next) {
    if(this.password !== this.passwordConfirmation){
        this.invalidate('passwordConfirmation', 'Please ensure that your passwords match!');
    }
    next();
});

heyUserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
    .then(hashedPw => {
        this.password = hashedPw;
        next();
    });
    
});

module.exports = mongoose.model('heyUser', heyUserSchema);
