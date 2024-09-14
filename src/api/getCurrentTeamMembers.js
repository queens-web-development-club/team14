import contentfulClient from "../lib/contentful";

async function getAmbassadors() {
    const ambassadorsContentEntry = await contentfulClient.getEntry("4I9oKdc64XCPvhmN7MA3vj")
                                            .catch((err) => console.log(err));
    const ambassadorsImageMedia = ambassadorsContentEntry.fields.ambassadorsImage;
    const ambassadorsImage = ambassadorsImageMedia.fields.file;
    return ambassadorsImage;
}

async function getExecTeam() {
    const execTeamContentEntry = await contentfulClient.getEntry("4GCprAjDmvLXyCcxkezxYC")
                                            .catch((err) => console.log(err));
    const execTeamImageEntries = execTeamContentEntry.fields.images;
    console.log(execTeamImageEntries);
    return execTeamImageEntries; 
}

export const ambassadorsImage = await getAmbassadors();
export const execTeam = await getExecTeam();