const BlogService = require('../services/blog.service');

class BlogController {
    blogService = null;
    constructor() {
        this.blogService = new BlogService();
    }

    getAll = () => {
        return this.blogService
            .getAll()
            .then(blogs => blogs)
            .catch(error => error);
    }

    create = (newBlog) => {
        return this.blogService
            .create(newBlog)
            .then(result => result)
            .catch(error => error)
    }

    get = (id) => {
        return this.blogService
            .get(id)
            .then(blog => blog)
            .catch(error => error);
    }

    delete = (id) => {
        return this.blogService
            .delete(id)
            .then(result => result)
            .catch(error => error);
    }
}

module.exports = BlogController;