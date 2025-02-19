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
    items: ['React.js', 'Angular', 'Node.js', 'Express.js']
  },
  {
    category: 'Datenanalyse',
    items: ['Pandas', 'NumPy', 'Power BI', 'SQL']
  },
  {
    category: 'Maschinelles Lernen & KI',
    items: ['Scikit-learn', 'TensorFlow', 'KI-Modellentwicklung']
  },
  {
    category: 'Datenbankverwaltung',
    items: ['MySQL', 'SQL Server']
  },
  {
    category: 'Werkzeuge',
    items: ['Git', 'Figma', 'Tableau', 'Excel']
  }
];

// Daten für Funktionen
const features = [
  {
    icon: 'wand2',
    title: 'Benutzer Daten APP',
    description: 'Entwickelte ein 3D-Spiel mit KI-gesteuerten Feinden, die sich mithilfe des NavMesh-Systems von Unity bewegen und die Spieler angreifen. Implementiertes intelligentes Spawn-System für dynamisches Gameplay.'
  },
  {
    icon: 'sparkles',
    title: 'Patientenbrief-Generierungs-Web-App',
    description: 'Erstellte eine Webanwendung, die personalisierte Patientenbriefe mithilfe dynamischer Vorlagen generiert. Implementierte Node.js, Express.js und easy-template-x für die Automatisierung.'
  },
  {
    icon: 'github',
    title: 'KI-gesteuerte Spieleentwicklung in Unity',
    description: 'Entwarf eine datenbankgesteuerte Anwendung mit Visual Studio und SQL Server zur Verwaltung von Benutzerdaten. Dieses Projekt ist relevant für ERP-Anwendungen.'
  }
];

// Galerie-Daten
const galleryItems = [
  {
    image: '404932437-39ddf96c-b0bf-4f87-903e-d46344d3326b.png',
    title: 'Benutzer Daten APP',
    description: 'Verwaltung von Benutzerdaten',
    tags: ['SQL', 'C#', '.NET', 'Visual Studio', 'ERP']
  },
  {
    image: 'Screenshot 2024-11-25 155042.png',
    title: 'Benutzer Daten APP',
    description: '',
    tags: ['Benutzer hinzufügen']
  },
  {
    image: 'Screenshot 2024-11-25 153924.png',
    title: 'Benutzer Daten APP',
    description: '',
    tags: ['Daten in SQL Speichern']
  },
  {
    image: '361817922-f62570a8-835d-4de2-95ef-79d42043fe17.png',
    title: 'Artz-Brief-Ersteller-Website',
    description: 'Word templates mit der gewünschten eingabe namen oder datum anfordern',
    tags: ['HTML', 'CSS', 'JavaScript', 'Microsoft', 'React']
  },
  {
    image: '361823334-cbeeff37-10fb-4092-bb8d-df54335a601d.png',
    title: 'Unity-NavMesh-Game',
    description: 'Unity-Spiel mit NavMesh-Agenten und KI-Gegnern',
    tags: ['Unity', 'C#','KI Enemy', 'Algorithms']
  },
  {
    image: 'SAP.webp',
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
