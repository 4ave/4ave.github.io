var path = {
    pug: {
        src: [
            './src/pages/*.pug'
        ],
        dist: '.',
        watch: [
            './src/pages/*.pug',
            './src/sections/**/*.pug',
            './src/layouts/*.pug',
            './src/components/**/*.pug',
            './src/components/*.pug'
        ]
    },
    scss: {
        src: [
            './src/assets/scss/style.scss'
        ],
        dist: './build/css/',
        watch: [
            './src/sections/**/*.scss',
            './src/assets/scss/*.scss',
            './src/components/**/*.scss'
        ]
    },
    js: {
        src: [
            './src/assets/js/*.js',
            './src/components/**/*.js'
        ],
        dist: './build/js/',
        watch: [
            './src/assets/js/*.js',
            './src/components/**/*.js'
        ]
    },
    img: {
        src: './src/assets/img/**/*.*',
        dist: './build/img/',
        watch: './src/assets/img/**/*.*'
    },
    font: {
        src: './src/assets/fonts/**/*.*',
        dist: './build/fonts/',
        watch: './src/assets/fonts/**/*.*'
    },
    icon: {
        src: './src/assets/img/icon/*.svg',
        dist: './build/fonts/',
        targetPath: '../../src/assets/scss/icon.scss',
        fontPath: '../fonts/',
        watch: './src/assets/img/icon/*.svg'
    }
};

module.exports = {path: path};