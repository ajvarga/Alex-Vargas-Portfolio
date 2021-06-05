// file used to talk to Sanity
import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "buoyug0l",
    dataset: "production"
})