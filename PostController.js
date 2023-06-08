import Post from './Post.js'
import PostService from './PostService.js'

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.files.picture)

      res.json(post)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getAll (req, res) {
    try {
      const posts = await PostService.getAll()

      return res.json(posts)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getOne (req, res) {
    try {
      const post = await PostService.getOne(req.params.id)

      return res.json(post)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async update (req, res) {
    try {
      const post = req.body

      if (!post._id) {
        res.status(400).json({ message: "Id didn't find"  })
      }

      const updatedPost = await PostService.update(post)

      return res.json(updatedPost)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async delete (req, res) {
    try {
      const { id } = req.params

      if (!id) {
        res.status(400).json({ message: "Id didn't find"  })
      }

      const deletedPost = await PostService.delete(id)

      return res.json(deletedPost)

    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new PostController();
