import config from "../config/config";
import { Client, ID, Databases,  Storage,  Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.databases =  new  Databases(this.client)
        this.bucket =  new  Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteBucketId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                },
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error);
        }
    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await  this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )
            return  true;
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error", error);
            return  false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error", error);
        }
    }

    async getsPosts(queries = [Query.equal("status", "active")]){
        try {
            return await  this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite Service :: createAccount :: error", error);
            return false
        }
    }

    //file  upload  Service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error", error);
            return false
        }
    }

    async  deleteFile(fileId){
        try {
             await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return  true
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error", error);
            return false
        }
    }

    async previewFile(fileId){
        try {
            return await this.bucket.getFilePreview(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite Service :: previewFile :: error", error);
            return false
        }
    }
}

const service = new Service()
export default service;