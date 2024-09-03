import contentfulClient from "../lib/contentful";

async function getAmbassadors() {
    const archivedEventsContentEntry = await contentfulClient.getEntry("LJm08jKSnOBCvoPwZd4lF")
                                            .catch((err) => console.log(err));
    const yearsContentList = archivedEventsContentEntry.fields.years;
    return yearsContentList;
}
export const yearsContentList = await getAmbassadors();