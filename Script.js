
let projectCons = document.getElementById("projectcontainer");







const projectData = [
  {
    title: "Google",
    snapshot: "",
    description:
      " A Document Management System aimed to improved document efficiency designed for Pamantasan ng Lungsod ng Pasig with document and signature authentication using Convolutional Neural Network.",
    techstack: ["HTML", "CSS", "JavaScript", "React"],
  },

   {
    title: "Google",
    snapshot: "",
    description:
      " A Document Management System aimed to improved document efficiency designed for Pamantasan ng Lungsod ng Pasig with document and signature authentication using Convolutional Neural Network.",
    techstack: ["HTML", "CSS", "JavaScript", "React"],
  },
];


function createProjectCard(project) {
  const techSpans = project.techstack.map((tech) => `<span>${tech}</span>`).join("");

  return `
    <div class="project">
            <div class="projectSnapshot" style="background-image: url('${project.snapshot}')">

            </div>

            <div class="projectDescription">
                <div class="projecttitle">
                    ${project.title}
                 </div>

                  <div class="projectDesc">
                        <article>
                            ${project.description}
                        </article>
                     </div>

                     <div class="projectTeckstack">
                        ${techSpans}
                    </div>
                 </div>            
        </div>`;
}

projectData.forEach(project =>{
    projectCons.innerHTML += createProjectCard(project);
})