function skillsMember() {
  var member = document.getElementById("member");
  var skills = document.getElementById("skills");
  var projects = document.getElementById("projects");
  var contact = document.getElementById("contact");
  var about = document.getElementById("about");
  var memberButton = document.getElementById("memberButton");
  var skillsButton = document.getElementById("skillsButton");
  var projectsButton = document.getElementById("projectsButton");
  var contactButton = document.getElementById("contactButton");
  var aboutButton = document.getElementById("aboutButton");
  member.style.display = "block";
  skills.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";
  about.style.display = "none";
  memberButton.style.backgroundColor = "#f1f1f1";
  skillsButton.style.backgroundColor = "#ffffff";
  projectsButton.style.backgroundColor = "#ffffff";
  contactButton.style.backgroundColor = "#ffffff";
  aboutButton.style.backgroundColor = "#ffffff";
}