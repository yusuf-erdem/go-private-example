const { Octokit } = require("@octokit/action");



const getJobsPublic = async () => {
    process.env['GITHUB_WORKFLOW'] = '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'
    process.env['GITHUB_ACTION'] = '__run'
    const osman = process.env.GITHUB_TOKEN;
    console.log("Osman:" + osman);
    let result = undefined;
    try {
                result = await new Octokit().rest.actions.listJobsForWorkflowRun({
        owner: "yusuf-erdem",
        repo: "go-private-example",
        run_id: 3225359112,
        per_page: 100,
        page:1
    })
            } catch (error) {
                result = undefined
                    console.log("Error:" + error);

            }
    
    
    


    console.log(result.data)
    return promise.data;
};


(async () => {
    //getWorkflow()
    //getWorkflowRunJob()
    //createCheck()
    //await findChangedLinesCoverage();
    //createApp()
    //listChangedFiles()
    getJobsPublic()
   // addCommitComment()
    //listComment()
    //addReviewComment()

    //addIssueComment()
    //getCreatedApp()
    //getIssueComment()
    //listIssueComment()
    //listRepos()
})().catch(error => console.error(error))


// transparently creates an installation access token the first time it is needed
// and refreshes it when it expires

/*
##### Update gradle-build.yml
Test Count Max: 25.0
Test Average Duration: Infinity
Execution Time : 00:00:00.000
Date : February 17, 2022 20:37:12 +0000

Tests : &nbsp;&nbsp; :white_check_mark: 23 Successful &nbsp;&nbsp; :x: 1 Failed &nbsp;&nbsp; :no_entry_sign: 1 Ignored &nbsp;&nbsp; :a: 0 Aborted
*/
