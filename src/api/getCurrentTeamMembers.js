import contentfulClient from "../lib/contentful";

async function getAmbassadors() {
    const ambassadorsContentEntry = await contentfulClient.getEntry("4I9oKdc64XCPvhmN7MA3vj")
                                            .catch((err) => console.log(err));
    const ambassadorsImageMedia = ambassadorsContentEntry.fields.ambassadorsImage;
    const ambassadorsImage = ambassadorsImageMedia.fields.file;
    return ambassadorsImage;
}
export const ambassadorsImage = await getAmbassadors();
