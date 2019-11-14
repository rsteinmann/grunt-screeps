const Account = require('./account')

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: Account.email,
                password: Account.password,
                branch: 'default',
                ptr: false
            },
            dist: {
                src: [`../screeps/*.js`]
            }
        }
    });
}