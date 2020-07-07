const loadGruntTasks = require('load-grunt-tasks');
const sass = require('sass');
module.exports = grunt =>{
    grunt.initConfig({
        sass:{
            options:{
                implementation:sass
            },
            main:{
                files:{
                    'dist/css/main.css':'src/assets/styles/main.scss'
                }
            }
        },
        babel:{
            options:{
                presets:['@babel/preset-env']
            },
            main:{
                files:{
                    'dist/js/main.js':'src/assets/scripts/main.js'
                }
            }
        },
        watch:{
            css:{
                files:['src/assets/styles/*.scss'],
                tasks:['sass']
            },
            js:{
                files:['src/assets/scripts/*.js'],
                tasks:['babel']
            }
        }
    })
    loadGruntTasks(grunt);
    grunt.registerTask('default',['sass','babel','watch']);
}