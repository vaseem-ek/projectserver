const projects = require('../Models/projectModel')

exports.addProject = async (req, res) => {
    try {
        const { title, description, languages, github, demo } = req.body
        const image = req.file.filename
        const userId = req.payload
        // console.log(req.payload);

        if (!title || !description || !languages || !github || !demo || !image) {
            res.status(406).json("invalid data")
        } else {
            const existingProject = await projects.findOne({ github })
            if (existingProject) {
                res.status(406).json("project already exist..")
            } else {
                const newProject = new projects({
                    title, description, languages, github, demo, image, userId
                })
                await newProject.save()
                res.status(200).json(newProject)
            }
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
}

exports.getProject = async (req, res) => {
    try {
        const userId = req.payload
        const projectList = await projects.find({ userId })
        res.status(200).json(projectList)

    } catch (err) {
        console.log(err);
        res.status(406).json(err)
    }
}

exports.deleteProject = async (req, res) => {
    try {

        const { pid } = req.params
        const pro = await projects.findByIdAndDelete(pid)
        res.status(200).json(pro)
    }
    catch (err) {
        console.log(err);
        res.status(406).json(err)
    }
}

exports.updateProject = async (req, res) => {
    try {

        const { pid } = req.params
        const userId = req.payload
        if (req.file) {
            var image = req.file.filename
            var { title, description, languages, github, demo } = req.body
        } else {
            var { title, description, languages, github, demo, image } = req.body
        }
        const pro = await projects.findByIdAndUpdate(pid, {
            title, description, languages, github, demo, image
        })
        res.status(200).json(pro)
    }
    catch (err) {
        console.log(err);
        res.status(406).json(err)
    }


}
exports.getallproject = async (req, res) => {
    try {
        const result = await projects.find()
        res.status(200).json(result)

    } catch (error) {
        console.log(error)
        res.status(406).json(error)
    }
}

exports.searchProjects = async (req, res) => {
    try {
        const keyword = req.query.search
        const result = await projects.find({ languages: { $regex: keyword, $options: 'i' } })
        res.status(200).json(result)

    } catch (error) {
        console.log(error)
        res.status(406).json(error)
    }
}