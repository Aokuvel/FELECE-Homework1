module.exports = function(grunt)
{

    grunt.initConfig({
        
        less: {
            development: {
                options: {
                    paths: ['resources/css']
                  },
                files: {
                    "resources/css/styles.less" : "resources/css/styles.css" 
                }
            }
        },
        
        watch: {
            scripts: {
              files: ['**/*.js','**/*.css','index.html'],
              tasks: ['less'],
              options: {
                spawn: false,
              },
            },
        },
        
        concat: {
            js: {
                src:['resources/javascript/script.js'],
                dest:'build/newscript.js'
            },
            css: {
                src:['resources/css/styles.css'],
                dest:'build/newstyles.css'
            }
        }, 
        
        clean: {
            folder: ['build']
        },
        copy: {
            main: {
              files: [
                {expand: true, src: ['resources/*'], dest: 'dest/', filter: 'isFile'},
              ],
            },
        },
        
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'chrome']
            },
          },
        
          processhtml: {
            build: {
                files: {
                    'index.html' : ['index.html']
                }
            }
        },
        
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'resources/css/*.css',
                        'index.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy'); 
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync', 'watch']);
}
