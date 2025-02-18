// Add scroll behavior for navigation
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Initialize Lucide icons
lucide.createIcons();

// Skills data
const skills = [
  {
    category: 'Programming',
    items: ['Python', 'JavaScript', 'SQL', 'C#']
  },
  {
    category: 'Web Development',
    items: ['React.js', 'Angular', 'Node.js', 'Express.js']
  },
  {
    category: 'Data Analytics',
    items: ['Pandas', 'NumPy', 'Power BI', 'SQL']
  },
  {
    category: 'Machine Learning & AI',
    items: ['Scikit-learn', 'TensorFlow', 'AI model development']
  },
  {
    category: 'Database Management',
    items: ['MySQL', 'SQL Server']
  },
  {
    category: 'Tools',
    items: ['Git', 'Figma', 'Tableau', 'Excel']
  }
];

// Feature data
const features = [
  {
    icon: 'wand2',
    title: 'Benutzer Daten APP',
    description: 'Developed a 3D game with AI-controlled enemies that navigate and attack players using Unitys NavMesh system. Implemented an intelligent spawning system for dynamic gameplay.'
  },
  {
    icon: 'sparkles',
    title: 'Patient Letter Generation Web App',
    description: 'Created a web application that generates personalized patient letters using dynamic templates. Implemented Node.js, Express.js, and easy-template-x for automation.'
  },
  {
    icon: 'github',
    title: 'AI-Driven Game Development in Unity',
    description: 'Designed a database-driven application using Visual Studio and SQL Server for managing user information. This project is relevant to ERP applications.'
  }
];

// Gallery data
const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=1920',
    title: 'Unity Game Development',
    description: '3D game with AI-controlled enemies and dynamic gameplay',
    tags: ['Unity', 'C#', 'AI']
  },
  {
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920',
    title: 'Patient Letter Generator',
    description: 'Automated system for generating personalized medical documents',
    tags: ['Node.js', 'Express', 'Automation']
  },
  {
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1920',
    title: 'ERP System Development',
    description: 'Database-driven application for managing user information',
    tags: ['SQL', 'C#', '.NET']
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920',
    title: 'Machine Learning Projects',
    description: 'Various ML implementations for data analysis',
    tags: ['Python', 'TensorFlow', 'Data Science']
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920',
    title: 'Web Development Portfolio',
    description: 'Collection of responsive and modern web applications',
    tags: ['React', 'Node.js', 'TypeScript']
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920',
    title: 'Data Analysis Dashboard',
    description: 'Interactive visualization of complex datasets',
    tags: ['Python', 'Pandas', 'Visualization']
  }
];

// Populate skills
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

// Populate features
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

// Populate gallery
const galleryContainer = document.getElementById('gallery-container');

galleryItems.forEach(item => {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery-item';
  
  galleryItem.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <div class="gallery-overlay">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="gallery-tags">
        ${item.tags.map(tag => `<span class="gallery-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;
  
  galleryContainer.appendChild(galleryItem);
});

// JavaScript to scroll to the start (top) page
const button = document.querySelector('.button'); // Select your button

button.addEventListener('click', () => {
  window.scrollTo({
    top: 0, // Scroll to the top of the page
    behavior: 'smooth' // Smooth scrolling effect
  });
});
