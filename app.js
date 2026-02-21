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
// ====================
// PWA Install Button Setup
// ====================
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

// Only run if the button exists
if (installBtn) {
    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault(); // Prevent automatic prompt
        deferredPrompt = e; // Save the event for later
        installBtn.style.display = 'block'; // Show the install button
    });
    
    // Click handler for the install button
    installBtn.addEventListener('click', async () => {
        if (!deferredPrompt) return; // Safety check
        deferredPrompt.prompt(); // Show install prompt
        
        const { outcome } = await deferredPrompt.userChoice;
        console.log('User choice:', outcome); // accepted or dismissed
        
        deferredPrompt = null; // Clear the saved event
        installBtn.style.display = 'none'; // Hide the button after prompt
    });
}