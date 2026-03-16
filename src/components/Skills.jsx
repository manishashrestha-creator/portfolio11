import './Skills.css'

const skills = [
  { icon: '💻', name: 'Programming',            tags: ['Python', 'JavaScript', 'C', 'C++'] },
  { icon: '🌐', name: 'Web Development',         tags: ['React', 'Node.js', 'Express', 'HTML/CSS'] },
  { icon: '🤖', name: 'AI & Machine Learning',   tags: ['TensorFlow', 'NLP', 'OpenCV', 'Mediapipe'] },
  { icon: '🎨', name: 'Visual Art',              tags: ['Drawing', 'Painting', 'Digital Art', 'Illustration'] },
  { icon: '🛠️', name: 'Tools',                  tags: ['Figma', 'Git', 'Procreate', 'VS Code'] },
  { icon: '🧠', name: 'Creative Problem Solving', tags: ['UI/UX', 'Research', 'Prototyping'] },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-label">What I Know</span>
        <h2 className="section-title">Skills &amp; <em>Expertise</em></h2>
        <div className="divider" />

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="skill-card reveal"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="sk-icon">{s.icon}</div>
              <div className="sk-name">{s.name}</div>
              <div className="sk-tags">
                {s.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
