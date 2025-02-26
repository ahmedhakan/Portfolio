// Scroll-Verhalten für die Navigation hinzufügen
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Lucide-Icons initialisieren
lucide.createIcons();

// Daten für Fähigkeiten
const skills = [
  {
    category: 'Programmierung',
    items: ['Python', 'JavaScript', 'SQL', 'C#']
  },
  {
    category: 'Web-Entwicklung',
    items: ['HTML', 'CSS', 'Javascript', 'Node.js']
  },
  {
    category: 'Grundwissen',
    items: ['C', 'C++', 'Java','Assembly']
  },
  {
    category: 'Datenbankverwaltung',
    items: ['SQL', 'SQL Server']
  },
  {
    category: 'Software',
    items: ['Visual Studio Code','Visual Studio 2022', 'SQL Server', 'Unity', 'Excel']
  },
  {
    category: 'Ziele',
    items: ['SAP', 'Data-analyst', 'ERP']
  }
];

// Daten für Funktionen
const features = [
  {
    icon: 'wand2',
    title: 'Benutzer Daten APP',
    description: 'Entwickelte ein 3D-Spiel mit KI-gesteuerten Feinden, die sich mithilfe des NavMesh-Systems von Unity bewegen und die Spieler angreifen. IEntwarf eine datenbankgesteuerte Anwendung mit Visual Studio und SQL Server zur Verwaltung von Benutzerdaten. Dieses Projekt ist relevant für ERP-Anwendungen.'
  },
  {
    icon: 'sparkles',
    title: 'Patientenbrief-Generierungs-Web-App',
    description: 'Erstellte eine Webanwendung, die personalisierte Patientenbriefe mithilfe dynamischer Vorlagen generiert. Implementierte Node.js, Express.js und easy-template-x für die Automatisierung.'
  },
  {
    icon: 'github',
    title: 'KI-gesteuerte Spieleentwicklung in Unity',
    description: 'Entwickelte ein 3D-Spiel mit KI-gesteuerten Feinden, die sich mithilfe des NavMesh-Systems von Unity bewegen und die Spieler angreifen. Implementiertes intelligentes Spawn-System für dynamisches Gameplay.'
  }
];

// Galerie-Daten
const galleryItems = [
  {
    image: 'Images/404932437-39ddf96c-b0bf-4f87-903e-d46344d3326b.png',
    title: 'Benutzer Daten APP',
    description: 'Verwaltung von Benutzerdaten',
    tags: ['SQL', 'C#', '.NET', 'Visual Studio', 'ERP']
  },
  {
    image: 'Images/Screenshot 2024-11-25 155042.png',
    title: 'Benutzer Daten APP',
    description: '',
    tags: ['Benutzer hinzufügen']
  },
  {
    image: 'Images/Screenshot 2024-11-25 153924.png',
    title: 'Benutzer Daten APP',
    description: '',
    tags: ['Daten in SQL Speichern']
  },
  {
    image: 'Images/361817922-f62570a8-835d-4de2-95ef-79d42043fe17.png',
    title: 'Artz-Brief-Ersteller-Website',
    description: 'Word templates mit der gewünschten eingabe namen oder datum anfordern',
    tags: ['HTML', 'CSS', 'JavaScript', 'Microsoft', 'React']
  },
  {
    image: 'Images/kitchen 3.png',
    title: 'Python Modelling a Data',
    description: 'Unity-Spiel mit NavMesh-Agenten und KI-Gegnern',
    tags: ['Python', 'Simpy','Excel', 'VSCode']
  },
  {
    image: 'Images/SAP.webp',
    title: 'SAP ERP-Projekt',
    status: 'Wird entwickelt',
    description: 'Projekt zur Implementierung und Optimierung von Geschäftsprozessen mit SAP ERP.',
    tags: ['SAP', 'ERP', 'Implementierung', 'S/4HANA']
  }
];

// Fähigkeiten befüllen
const skillsContainer = document.getElementById('skills-container');

skills.forEach(skillCategory => {
  const skillCard = document.createElement('div');
  skillCard.className = 'skill-card';
  
  skillCard.innerHTML = `
    <h3>${skillCategory.category}</h3>
    <div class="skill-list">
      ${skillCategory.items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
    </div>
  `;
  
  skillsContainer.appendChild(skillCard);
});

// Funktionen befüllen
const featuresContainer = document.getElementById('features-container');

features.forEach(feature => {
  const featureCard = document.createElement('div');
  featureCard.className = 'feature-card';
  
  featureCard.innerHTML = `
    <div class="icon">
      <i data-lucide="${feature.icon}" class="purple-icon"></i>
    </div>
    <h3>${feature.title}</h3>
    <p>${feature.description}</p>
  `;
  
  featuresContainer.appendChild(featureCard);
});

// Galerie befüllen
const galleryContainer = document.getElementById('gallery-container');

galleryItems.forEach(item => {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery-item';
  
  galleryItem.innerHTML = `
  <img src="${item.image}" alt="${item.title}">
  <div class="gallery-overlay">
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    ${item.status ? `<div class="status">${item.status}</div>` : ''}
    <div class="gallery-tags">
      ${item.tags.map(tag => `<span class="gallery-tag">${tag}</span>`).join('')}
    </div>
  </div>
`;

  
  galleryContainer.appendChild(galleryItem);
});


// JavaScript zum Scrollen zum Start (oben) der Seite
const button = document.querySelector('.button'); // Button auswählen

button.addEventListener('click', () => {
  window.scrollTo({
    top: 0, // Zum oberen Rand der Seite scrollen
    behavior: 'smooth' // Sanfter Scroll-Effekt
  });
});
