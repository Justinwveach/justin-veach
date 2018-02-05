export default class ExperienceOverview {

    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.skills = [];
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }

    addProjects(projects) {
        projects.forEach(function(v) {this.projects.push(v)}, this);
    }

    addSkill(skill) {
        this.skills.push(skill);
    }

    addSkills(skills) {
        skills.forEach(function(v) {this.skills.push(v)}, this);
    }
}
