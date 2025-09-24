import React from 'react';

interface SkillCategory {
  name: string;
  color: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      color: "blue",
      skills: ["React", "Next.js", "Redux", "HTML5", "CSS3/SCSS", "Responsive Design", "Accessibility (WCAG)", "Bootstrap", "jQuery", "Vue.js"]
    },
    {
      name: "Backend",
      color: "green",
      skills: ["Node.js", "Express.js", ".NET Core", "C#", "Java", "Python", "REST API Design", "Authentication & Authorization"]
    },
    {
      name: "Databases",
      color: "purple",
      skills: ["PostgreSQL", "SQL Server", "MySQL", "SQLite", "MongoDB"]
    },
    {
      name: "Cloud & DevOps",
      color: "orange",
      skills: ["AWS (EC2, S3, ElasticSearch, Lambda)", "Azure (Data Factory, Functions, Logic Apps)", "Docker", "CI/CD Pipelines", "Git/GitHub", "Splunk", "Datadog"]
    },
    {
      name: "Practices",
      color: "pink",
      skills: ["Agile/Scrum", "SAFe™", "Cross-Functional Team Collaboration", "Technical Documentation", "Mentorship", "Stakeholder Communication"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30 hover:text-blue-300",
      green: "bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30 hover:text-green-300",
      purple: "bg-purple-500/20 text-purple-400 border-purple-500/30 hover:bg-purple-500/30 hover:text-purple-300",
      orange: "bg-orange-500/20 text-orange-400 border-orange-500/30 hover:bg-orange-500/30 hover:text-orange-300",
      indigo: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30 hover:bg-indigo-500/30 hover:text-indigo-300",
      pink: "bg-pink-500/20 text-pink-400 border-pink-500/30 hover:bg-pink-500/30 hover:text-pink-300",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>

      <div className="space-y-4">
        {skillCategories.map((category) => (
          <div key={category.name} className="space-y-2">
            {/* Category Pill */}
            <div className="flex items-center gap-3">
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium border ${getColorClasses(category.color)} transition-all duration-200 cursor-default`}
              >
                {category.name}
              </span>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2 ml-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50 hover:bg-gray-600/50 hover:text-white transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;