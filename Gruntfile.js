module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-scss-lint');

  // Project configuration.
  grunt.initConfig({
    autoprefixer: {
      build: {
        src: 'dist/*.css'
      }
    },

    jasmine: {
      all: {
        src: ['js/*.js'],
        options: {
          specs: 'spec/*Spec.js',
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'spec/**/*.js', 'js/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    sass: {
      dist: {
        options: {
          sourcemap: 'none',
          style: 'compressed'
        },
        files: {
          'dist/main.min.css': 'scss/main.scss',
        }
      }
    },

    scsslint: {
      allFiles: [
        'scss/*.scss'
      ],
      options: {
        config: '.scss-lint.yml',
        reporterOutput: 'logs/scss-lint-report.xml',
        colorizeOutput: true,
        maxBuffer: 1000 * 1024
      }
    },

  });

  grunt.registerTask('default', 'Test files then build Sass', ['test', 'sass', 'autoprefixer']);
  grunt.registerTask('test', 'Validate JS and Scss then run unit tests', ['jshint', 'scsslint', 'jasmine']);

};
