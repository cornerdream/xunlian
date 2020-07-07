const Generator = require('yeoman-generator');
module.exports = class extends Generator {
    prompting(){
        return this.prompt([{
            type:'input',
            name:'name',
            message:'Your project name',
            default:this.appname
        }])
        .then(answers=>{
            this.answers = answers;
        })
    }
    writing(){
        let dirs = [
            'src/api/axios.js',
            'src/api/index.js',
            'src/assets/reset.min.css',
            'src/assets/utils.js',
            'src/router/router.js',
            '.env.development',
            '.env.production',
            '.eslintrc.js',
            '.gitignore',
            'babel.config.js',
            'package.json',
            'package-lock.json',
            'postcss.config.js',
            'README.md'
        ]
        dirs.forEach(item=>{
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })

    }
}