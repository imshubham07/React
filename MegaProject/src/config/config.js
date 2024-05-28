const  config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.BUCKET_ID),
}



export default config