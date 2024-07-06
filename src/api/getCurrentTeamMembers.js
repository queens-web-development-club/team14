import contentfulClient from "../lib/contentful";

async function getAmbassadors() {
    let ambassadorsContentEntry = await contentfulClient.getEntry("4I9oKdc64XCPvhmN7MA3vj")
                                            .catch((err) => console.log(err));
    let ambassadorsImageMedia = ambassadorsContentEntry.fields.ambassadorsImage;
    let ambassadorsImage = ambassadorsImageMedia.fields.file;
    return ambassadorsImage;
}
export const ambassadorsImage = await getAmbassadors();

let ambassadors = (await contentfulClient.getEntry("4I9oKdc64XCPvhmN7MA3vj")
                            .catch((err) => console.log(err)))
                        .fields.ambassadorsImage;
