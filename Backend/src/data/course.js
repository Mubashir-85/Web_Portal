const courses = [
  {
    id: 1,
    title: "Web Development",
    category: "IT & Computer Courses",
    description: "HTML, CSS, JavaScript and React development",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    image: "https://via.placeholder.com/600x400.png?text=Web+Development",
    videoUrl: "https://youtube.com",
    platformUrl: "https://coursera.org",
  },

  {
    id: 2,
    title: "Python Programming",
    category: "IT & Computer Courses",
    description: "Python programming from basics to advanced",
    skills: ["Python"],
    image: "https://via.placeholder.com/600x400.png?text=Python+Programming",
    videoUrl: "https://youtube.com",
    platformUrl: "https://udemy.com",
  },

  {
    id: 3,
    title: "Java Programming",
    category: "IT & Computer Courses",
    description: "Core Java and OOP concepts",
    skills: ["Java", "OOP"],
    image: "https://via.placeholder.com/600x400.png?text=Java+Programming",
    videoUrl: "https://youtube.com",
    platformUrl: "https://coursera.org",
  },

  {
    id: 4,
    title: "C Programming",
    category: "IT & Computer Courses",
    description: "Programming fundamentals using C",
    skills: ["C"],
    image: "https://via.placeholder.com/600x400.png?text=C+Programming",
    videoUrl: "https://youtube.com",
    platformUrl: "https://udemy.com",
  },

  {
    id: 5,
    title: "C++ Programming",
    category: "IT & Computer Courses",
    description: "Object-Oriented Programming using C++",
    skills: ["C++"],
    image: "https://via.placeholder.com/600x400.png?text=C%2B%2B+Programming",
    videoUrl: "https://youtube.com",
    platformUrl: "https://udemy.com",
  },

  {
    id: 6,
    title: "Data Structures",
    category: "IT & Computer Courses",
    description: "Data Structures and Algorithms fundamentals",
    skills: ["DSA"],
    image: "https://via.placeholder.com/600x400.png?text=Data+Structures",
    videoUrl: "https://youtube.com",
    platformUrl: "https://coursera.org",
  },

  {
    id: 7,
    title: "Data Science",
    category: "IT & Computer Courses",
    description: "Data analysis and statistics",
    skills: ["Data", "Statistics"],
    image: "https://via.placeholder.com/600x400.png?text=Data+Science",
    videoUrl: "https://youtube.com",
    platformUrl: "https://edx.org",
  },

  {
    id: 8,
    title: "Machine Learning",
    category: "IT & Computer Courses",
    description: "Machine learning basics",
    skills: ["Machine Learning"],
    image: "https://via.placeholder.com/600x400.png?text=Machine+Learning",
    videoUrl: "https://youtube.com",
    platformUrl: "https://coursera.org",
  },

  {
    id: 9,
    title: "Artificial Intelligence",
    category: "IT & Computer Courses",
    description: "AI concepts and applications",
    skills: ["AI"],
    image:
      "https://via.placeholder.com/600x400.png?text=Artificial+Intelligence",
    videoUrl: "https://youtube.com",
    platformUrl: "https://edx.org",
  },

  {
    id: 10,
    title: "Cyber Security",
    category: "IT & Computer Courses",
    description: "Cyber threats and digital security",
    skills: ["Security"],
    image: "https://via.placeholder.com/600x400.png?text=Cyber+Security",
    videoUrl: "https://youtube.com",
    platformUrl: "https://swayam.gov.in",
  },

  {
    id: 11,
    title: "Cloud Computing",
    category: "IT & Computer Courses",
    description: "Cloud services and infrastructure",
    skills: ["Cloud"],
    image: "https://via.placeholder.com/600x400.png?text=Cloud+Computing",
    videoUrl: "https://youtube.com",
    platformUrl: "https://coursera.org",
  },

  {
    id: 12,
    title: "AWS Basics",
    category: "IT & Computer Courses",
    description: "Amazon Web Services fundamentals",
    skills: ["AWS"],
    image: "https://via.placeholder.com/600x400.png?text=AWS+Basics",
    videoUrl: "https://youtube.com",
    platformUrl: "https://aws.amazon.com",
  },

  {
    id: 13,
    title: "DevOps Basics",
    category: "IT & Computer Courses",
    description: "CI/CD and DevOps practices",
    skills: ["DevOps"],
    image: "https://via.placeholder.com/600x400.png?text=DevOps+Basics",
    videoUrl: "https://youtube.com",
    platformUrl: "https://udemy.com",
  },

  {
    id: 14,
    title: "Database Management System",
    category: "IT & Computer Courses",
    description: "Database design and management",
    skills: ["DBMS"],
    image:
      "https://via.placeholder.com/600x400.png?text=Database+Management+System",
    videoUrl: "https://youtube.com",
    platformUrl: "https://coursera.org",
  },

  {
    id: 15,
    title: "SQL & MySQL",
    category: "IT & Computer Courses",
    description: "Structured Query Language fundamentals",
    skills: ["SQL"],
    image: "https://via.placeholder.com/600x400.png?text=SQL+%26+MySQL",
    videoUrl: "https://youtube.com",
    platformUrl: "https://udemy.com",
  },

  {
    id: 16,
    title: "Digital Marketing",
    category: "Career-Oriented Courses",
    description: "SEO and digital marketing strategies",
    skills: ["SEO"],
    image: "https://via.placeholder.com/600x400.png?text=Digital+Marketing",
    videoUrl: "https://youtube.com",
    platformUrl: "https://udemy.com",
  },

  {
    id: 17,
    title: "Graphic Designing",
    category: "Career-Oriented Courses",
    description: "Creative graphic design tools",
    skills: ["Design"],
    image: "https://via.placeholder.com/600x400.png?text=Graphic+Designing",
    videoUrl: "https://youtube.com",
    platformUrl: "https://coursera.org",
  },

  {
    id: 18,
    title: "UI/UX Design",
    category: "Career-Oriented Courses",
    description: "User interface and experience design",
    skills: ["UI", "UX"],
    image: "https://via.placeholder.com/600x400.png?text=UI%2FUX+Design",
    videoUrl: "https://youtube.com",
    platformUrl: "https://coursera.org",
  },

  {
    id: 19,
    title: "Video Editing",
    category: "Career-Oriented Courses",
    description: "Video production and editing",
    skills: ["Editing"],
    image: "https://via.placeholder.com/600x400.png?text=Video+Editing",
    videoUrl: "https://youtube.com",
    platformUrl: "https://udemy.com",
  },

  {
    id: 20,
    title: "Content Writing",
    category: "Career-Oriented Courses",
    description: "Professional and creative writing",
    skills: ["Writing"],
    image: "https://via.placeholder.com/600x400.png?text=Content+Writing",
    videoUrl: "https://youtube.com",
    platformUrl: "https://udemy.com",
  },

  {
    id: 21,
    title: "Tally & Accounting",
    category: "Career-Oriented Courses",
    description: "Accounting and Tally basics",
    skills: ["Accounting"],
    image: "https://via.placeholder.com/600x400.png?text=Tally+%26+Accounting",
    videoUrl: "https://youtube.com",
    platformUrl: "https://swayam.gov.in",
  },

  {
    id: 22,
    title: "Advanced Excel",
    category: "Career-Oriented Courses",
    description: "Excel formulas and analytics",
    skills: ["Excel"],
    image: "https://via.placeholder.com/600x400.png?text=Advanced+Excel",
    videoUrl: "https://youtube.com",
    platformUrl: "https://udemy.com",
  },

  {
    id: 23,
    title: "Business Analytics",
    category: "Career-Oriented Courses",
    description: "Business data insights",
    skills: ["Analytics"],
    image: "https://via.placeholder.com/600x400.png?text=Business+Analytics",
    videoUrl: "https://youtube.com",
    platformUrl: "https://coursera.org",
  },

  {
    id: 24,
    title: "HR Management",
    category: "Career-Oriented Courses",
    description: "Human resource management basics",
    skills: ["HR"],
    image: "https://via.placeholder.com/600x400.png?text=HR+Management",
    videoUrl: "https://youtube.com",
    platformUrl: "https://udemy.com",
  },

  {
    id: 25,
    title: "Entrepreneurship",
    category: "Career-Oriented Courses",
    description: "Startup and business planning",
    skills: ["Business"],
    image: "https://via.placeholder.com/600x400.png?text=Entrepreneurship",
    videoUrl: "https://youtube.com",
    platformUrl: "https://swayam.gov.in",
  },

  {
    id: 26,
    title: "Communication Skills",
    category: "Soft Skills",
    description: "Improve speaking and communication",
    skills: ["Communication"],
    image: "https://via.placeholder.com/600x400.png?text=Communication+Skills",
    videoUrl: "https://youtube.com",
    platformUrl: "https://khanacademy.org",
  },

  {
    id: 27,
    title: "Personality Development",
    category: "Soft Skills",
    description: "Confidence and personality growth",
    skills: ["Confidence"],
    image:
      "https://via.placeholder.com/600x400.png?text=Personality+Development",
    videoUrl: "https://youtube.com",
    platformUrl: "https://udemy.com",
  },

  {
    id: 28,
    title: "Interview Preparation",
    category: "Soft Skills",
    description: "Technical and HR interview prep",
    skills: ["Interview"],
    image: "https://via.placeholder.com/600x400.png?text=Interview+Preparation",
    videoUrl: "https://youtube.com",
    platformUrl: "https://linkedin.com/learning",
  },

  {
    id: 29,
    title: "Resume Building",
    category: "Soft Skills",
    description: "Create professional resumes",
    skills: ["Resume"],
    image: "https://via.placeholder.com/600x400.png?text=Resume+Building",
    videoUrl: "https://youtube.com",
    platformUrl: "https://linkedin.com/learning",
  },

  {
    id: 30,
    title: "Time Management",
    category: "Soft Skills",
    description: "Productivity and focus skills",
    skills: ["Time"],
    image: "https://via.placeholder.com/600x400.png?text=Time+Management",
    videoUrl: "https://youtube.com",
    platformUrl: "https://udemy.com",
  },

  {
    id: 31,
    title: "Public Speaking",
    category: "Soft Skills",
    description: "Improve public speaking skills",
    skills: ["Speaking"],
    image: "https://via.placeholder.com/600x400.png?text=Public+Speaking",
    videoUrl: "https://youtube.com",
    platformUrl: "https://udemy.com",
  },

  {
    id: 32,
    title: "Leadership Skills",
    category: "Soft Skills",
    description: "Leadership and teamwork",
    skills: ["Leadership"],
    image: "https://via.placeholder.com/600x400.png?text=Leadership+Skills",
    videoUrl: "https://youtube.com",
    platformUrl: "https://coursera.org",
  },

  {
    id: 33,
    title: "Critical Thinking",
    category: "Soft Skills",
    description: "Problem solving and reasoning",
    skills: ["Thinking"],
    image: "https://via.placeholder.com/600x400.png?text=Critical+Thinking",
    videoUrl: "https://youtube.com",
    platformUrl: "https://edx.org",
  },

  {
    id: 34,
    title: "Emotional Intelligence",
    category: "Soft Skills",
    description: "Emotional awareness and EQ",
    skills: ["EQ"],
    image:
      "https://via.placeholder.com/600x400.png?text=Emotional+Intelligence",
    videoUrl: "https://youtube.com",
    platformUrl: "https://udemy.com",
  },

  {
    id: 35,
    title: "Teamwork Skills",
    category: "Soft Skills",
    description: "Collaboration and team growth",
    skills: ["Teamwork"],
    image: "https://via.placeholder.com/600x400.png?text=Teamwork+Skills",
    videoUrl: "https://youtube.com",
    platformUrl: "https://udemy.com",
  },

  {
    id: 36,
    title: "Financial Literacy",
    category: "General Awareness",
    description: "Money and financial planning basics",
    skills: ["Finance"],
    image: "https://via.placeholder.com/600x400.png?text=Financial+Literacy",
    videoUrl: "https://youtube.com",
    platformUrl: "https://swayam.gov.in",
  },

  {
    id: 37,
    title: "Environmental Studies",
    category: "General Awareness",
    description: "Environment and sustainability",
    skills: ["Environment"],
    image: "https://via.placeholder.com/600x400.png?text=Environmental+Studies",
    videoUrl: "https://youtube.com",
    platformUrl: "https://swayam.gov.in",
  },

  {
    id: 38,
    title: "Digital Literacy",
    category: "General Awareness",
    description: "Using digital tools effectively",
    skills: ["Digital"],
    image: "https://via.placeholder.com/600x400.png?text=Digital+Literacy",
    videoUrl: "https://youtube.com",
    platformUrl: "https://swayam.gov.in",
  },

  {
    id: 39,
    title: "Ethics & Values",
    category: "General Awareness",
    description: "Moral values and ethics education",
    skills: ["Ethics"],
    image: "https://via.placeholder.com/600x400.png?text=Ethics+%26+Values",
    videoUrl: "https://youtube.com",
    platformUrl: "https://edx.org",
  },

  {
    id: 40,
    title: "Career Planning",
    category: "General Awareness",
    description: "Career guidance and future planning",
    skills: ["Planning"],
    image: "https://via.placeholder.com/600x400.png?text=Career+Planning",
    videoUrl: "https://youtube.com",
    platformUrl: "https://swayam.gov.in",
  },
];

module.exports = courses;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


// ✅ Export Shuffled Courses
module.exports = shuffleArray(courses);