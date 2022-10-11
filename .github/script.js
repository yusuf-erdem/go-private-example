const {Octokit} = require("@octokit/action");


const getJobsPublic = async () => {
    process.env['GITHUB_WORKFLOW'] = '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'
    process.env['GITHUB_ACTION'] = '__run'
    const osman = process.env.GITHUB_TOKEN;
    let result = undefined;
    try {
        result = await new Octokit().rest.actions.listJobsForWorkflowRun({
            owner: "yusuf-erdem",
            repo: "go-private-example",
            run_id: 3225359112,
            per_page: 100,
            page: 1
        });
    } catch (error) {
        result = undefined
        if (error.status == "403") {
            console.log("error equal to************:" + error.code);

        }
        console.log("status************:" + error.status);
        console.log("Osman************:" + error);

    }


    console.log(result)
    return result;
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

