import config from '../config/env.js'

class APIController {
    getInfo(req, res) {
        res.json({
            email: config.email,
            current_datetime: new Date().toISOString(),
            github_url: config.githubUrl,
        });
    }
}

export default new APIController()

