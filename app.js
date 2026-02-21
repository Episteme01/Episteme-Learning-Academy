function getParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

if (document.getElementById("subjectsContainer")) {
    
    const container = document.getElementById("subjectsContainer");
    
    let progress = JSON.parse(localStorage.getItem("progress")) || {};
    
    subjects.forEach(subject => {
        
        let completed = progress[subject.id] ?
            progress[subject.id].length :
            0;
        
        let total = subject.lessons.length;
        
        let percent = total > 0 ?
            Math.round((completed / total) * 100) :
            0;
        
        container.innerHTML += `
            <div class="subject-card">
                <div class="subject-icon">${getIcon(subject.id)}</div>
                <h3>${subject.title}</h3>
                <p>${subject.description}</p>
                <p class="lesson-count">
                    ${completed}/${total} Lessons Completed (${percent}%)
                </p>
                <a href="subject.html?id=${subject.id}">
                    Start Learning
                </a>
            </div>
        `;
    });
}

function getIcon(id) {
    switch(id) {
        case "math": return "📐";
        case "english": return "📖";
        case "science": return "🔬";
        case "ict": return "💻";
        case "general": return "🌍";
        default: return "📘";
    }
}
