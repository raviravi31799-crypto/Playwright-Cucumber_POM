module.exports={
    default: {
        formatOptions: {
            "snippetInterface":"async-await"
        },

        
        requireModule: [
            "ts-node/register"
        ],
        require: [
            "src/hooks/*.ts",
            "src/stepdefinitions/*.ts",
            "src/support/**/*.ts"
        ],
         paths: [
             "src/features/**/*.feature"
         ],
    

    publishQuiet: true,
    dryRun: false,

    format: [
        "progress-bar",
        "html:reports/cucumber-report.html",
        "json:reports/cucumber-report.json",
        "rerun:./rerun/rerun.txt"
        
    ]
    }
}