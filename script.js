const username = "ISRAT510";

async function fetchProjects() {

    const res = await fetch(
        `https://api.github.com/users/${username}/repos`
    );

    const repos = await res.json();

    const container =
        document.getElementById("project-container");

    container.innerHTML = "";

    repos.forEach(repo => {

        if(repo.fork) return;

        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
            <h2>${repo.name}</h2>

            <p>
                ${repo.description || "No description"}
            </p>

            <div class="tags">
                <span>${repo.language || "Code"}</span>
            </div>

            <div class="buttons">
                <a href="${repo.html_url}" target="_blank">
                    GitHub
                </a>

                ${
                    repo.homepage ?
                    `<a href="${repo.homepage}" target="_blank">Live</a>`
                    : ""
                }
            </div>
        `;

        container.appendChild(card);

    });

}

fetchProjects();