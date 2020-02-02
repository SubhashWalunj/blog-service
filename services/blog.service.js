const BlogModel = require('../models/blog');

class BlogService {

    getAll = () => {
        return new Promise((resolve, reject) => {
            BlogModel.find((error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    }

    create = (blog) => {
        return new Promise((resolve, reject) => {
            const blogInstance = new BlogModel(blog);
            blogInstance.save((error, result) => {
                if(error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        });
    }

    get = (id) => {
        return new Promise((resolve, reject) => {
            BlogModel.findById(id, (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    }

    delete = (id) => {
        return new Promise((resolve, reject) => {
            BlogModel.deleteOne({"_id":id}, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        });
    }
}

module.exports = BlogService;