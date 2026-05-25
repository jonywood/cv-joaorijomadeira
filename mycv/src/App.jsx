import { useEffect, useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const [experiences, setExperiences] = useState([]);
 
  const languages = [
  "Portuguese (native)",
  "English",
  "Spanish"
];

const skills = [
"Web development",
"UX / UI",
"Video Production",
"Content Writing",
"Press officer",
"Events Management"
];

const programming = [
 "React (learning)",
"Tailwind (learning)",
"HTML + CSS + JS",
"PHP + CodeIgniter",
"C# + Unity"
];


useEffect(() => {
  fetch(`http://localhost:3002/experiences?ts=${Date.now()}`)
    .then((res) => res.json())
    .then((data) => setExperiences(data));
}, []);

  return (
    <>
 <div className="min-h-screen bg-zinc-50 text-zinc-900">

      {/* HEADER */}
      <header className="px-6 py-0 border-0 border-zinc-200 flex justify-between items-center bg-white">
        <h1 className="px-6 text-xl font-bold tracking-tight">João Rijo Madeira</h1>

        <nav className="space-x-6 text-sm text-zinc-600">
        
        </nav>
      </header>

      {/* SECTION 1 */}
      <section id="sobre" className="px-12 py-4 flex flex-col md:flex-row gap-10 items-center max-w-5xl mx-auto">

        <article className="flex-1">
          <h2 className="text-4xl font-bold mb-4 tracking-tight text-left">
            MULTIMEDIA & FRONTEND DEVELOPER
          </h2>

          <p className="text-zinc-600 leading-relaxed text-justify">
            Im a creative developer with a solid foundation in Multimedia, currently dedicated to creating web applications with React, JS, and Tailwind. My background in Multimedia enables me to approach Frontend Development with a strong focus on UX/UI, combining technical precision withvisual quality.
          </p>
        </article>

          <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-md border border-zinc-200">
        <img
          src="https://media.licdn.com/dms/image/v2/C5603AQF9fg6eJncGlA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516924988744?e=1781136000&v=beta&t=R1giS6Q_LRatct2Cu4SToHZS_NBgsbTARUZ3cnbla8w"
          alt="Fotografia de João Rijo Madeira"
          className="w-64 h-64 rounded-2xl object-cover shadow-md border border-zinc-200 hover:scale-120 duration-500 transition-transform"
        />
        </div>

      </section>

      {/* SECTION 2 - EXPERIÊNCIA */}
      <section id="info" className="px-6 py-6 bg-white border-0 border-zinc-200">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl font-bold mb-10 text-left pl-6">
            EXPERIENCE
          </h2>

          {/* EXPERIÊNCIA PRINCIPAL */}

{experiences.map((item) => (
  <article
    key={item.id}
    className="p-6 rounded-2xl border border-zinc-200 bg-white mb-8 text-left hover:shadow-sm transition"
  >
    <h3 className="text-lg font-semibold">
      {item.role}
    </h3>

    {/* SINGLE COMPANY */}
    {item.company && (
      <>
        <p className="text-zinc-600 mt-1">
          {item.company}
        </p>

        <p className="text-zinc-500 mt-1">
          {item.period}
        </p>
      </>
    )}

    {/* MULTI COMPANY  */}
    {item.companies && (
      <div className="mt-2 space-y-2">
        {item.companies.map((c, i) => (
          <div key={i} className="ml-0">
            <p className="text-zinc-600">
              {c.name}
            </p>
            <p className="text-zinc-500 mt-1">
              {c.period}
            </p>
          </div>
        ))}
      </div>
    )}

    {/* DESCRIPTION */}
    {item.description && (
      <p className="text-zinc-600 mt-3 leading-relaxed">
        {item.description}
      </p>
    )}
  </article>
))}

        </div>
      </section>

            {/* SECTION 4 */}
<section
  id="languages"
  className="px-12 py-4 flex flex-col md:flex-row gap-10 items-start max-w-5xl mx-auto"
>

  {/* LANGUAGES */}
  <article className="flex-1">
    <h2 className="text-2xl font-bold mb-6 text-left">
      LANGUAGES
    </h2>

    <ul className="list-disc pl-6 space-y-2 text-zinc-700 text-left">
      {languages.map((lang, index) => (
        <li key={index}>{lang}</li>
      ))}
    </ul>
  </article>

  {/* SKILLS */}
  <article className="flex-1">
    <h2 className="text-2xl font-bold mb-6 text-left">
      SKILLS
    </h2>

    <ul className="list-disc pl-6 space-y-2 text-zinc-700 text-left">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </article>

    {/* PROGRAMMING */}
  <article className="flex-1">
    <h2 className="text-2xl font-bold mb-6 text-left">
      PROGRAMMING
    </h2>

    <ul className="list-disc pl-6 space-y-2 text-zinc-700 text-left">
      {programming.map((programminglang, index) => (
        <li key={index}>{programminglang}</li>
      ))}
    </ul>
  </article>

 

</section>

    </div>
    </>
  )
}

export default App