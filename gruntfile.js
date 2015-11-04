module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            normal: {
                files: {
                    './dist/css/smallgrid.css': [
                        './src/smallgrid.less',
                    ]
                }
            },
            min: {
	            options: {
		            compress: true,
	            },
                files: {
                    './dist/css/smallgrid.min.css': [
                        './src/smallgrid.less',
                    ]
                }
            }
        },

		browserify: {
			options: {
				transform: [
					['babelify', {
						loose: 'all'
					}]
				]
			},

			jsx: {
				files: {
					'./dist/js/smallgrid.js': [
						'./src/jsx/Smallgrid.jsx',
					]
				}
			},

			examples: {
				files: {
					'./examples/1_basic_minimal.js': './src/jsx/examples/BasicMinimal.jsx',
				}
			},
		},

        uglify: {
            options: {
                mangle: true,  // Use if you want the names of your functions and variables unchanged
            },
            jsx: {
                files: {
                    './dist/js/smallgrid.min.js': [
	                    './dist/js/smallgrid.js',
                    ],
                }
            }
        },

        watch: {
            options: {
                spawn: false,
                reload: true,
            },

            less: {
                files: [
                    './src/**/*.less'
                ],
                tasks: ['less:normal'],
                options: {
                    livereload: true,
                }
            },

            jsx: {
                files: [
                    './src/*.jsx'
                ],
                tasks: ['browserify:jsx'],
                options: {
                    livereload: true,
                }
            },

            examples: {
                files: [
                    './src/examples/*.jsx'
                ],
                tasks: ['browserify:examples'],
                options: {
                    livereload: true,
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['less', 'browserify', 'uglify', 'watch']);
};
