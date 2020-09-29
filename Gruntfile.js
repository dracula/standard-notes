const sass = require("node-sass");
module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      css: {
        files: ["src/**/*.scss"],
        tasks: ["sass"],
        options: {
          spawn: false,
        },
      },
    },

    sass: {
      dist: {
        options: {
          implementation: sass,
          style: "expanded",
        },
        files: {
          "dist/dist.css": "src/main.scss",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-newer");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-sass");

  grunt.registerTask("default", ["sass"]);
};
