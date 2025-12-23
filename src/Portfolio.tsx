import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { sanityClient } from "./sanity/client";
import { FEATUREDWORK_QUERY } from "./sanity/queries";
import { FeaturedWork } from "./sanity/interfaces";
import FeatureWorkCard from "./components/FeaturedWorkCard";


const sections: Record<string, string> = {
  "Hi": `# 👋 Hi, I'm Shahab Uddin Irfan

🚀 **Full-Stack Engineer | AI Chatbot Integrator | Remote SaaS Specialist**

I'm a MERN-focused Full-Stack Developer with 8+ years of experience building scalable SaaS platforms, internal tools, and AI-integrated systems for clients across the globe.
`,
  "WhatIDo": `## 💼 What I Do

- ⚙️ Build end-to-end SaaS platforms...
- 🤖 Integrate AI using OpenAI...
- ☁️ Deploy and maintain cloud systems...
- 📈 Design dashboards...
- 🧩 Integrate 3rd-party APIs...
`,
  "Stack": `## 🧠 Technical Stack

**Languages:** TypeScript, JavaScript, Python, C#, SQL  
**Frontend:** ReactJS, React Native, TailwindCSS, MUI, ShadCN UI  
**Backend:** Node.js, NestJS, .NET Core, Flask, Langchain  
**Cloud:** Azure Functions, AWS SDKs, Firebase, Supabase, Docker  
**Databases:** MongoDB, PostgreSQL, Firebase, Elasticsearch  
**DevOps:** GitHub Actions, Vercel, Azure DevOps  
**AI/ML:** OpenAI API, Pinecone, Vector DBs, OCR tools`,
  "Projects": `## 🔧 Projects & Highlights

- 🧾 **Invozio** — Swedish payments platform...
- 📊 **SeekInvest** — US-based investment platform...
- 🦠 **Virusgeeks** — Real-time COVID SaaS backend...
- 🛍️ **E-commerce Tools** — Multi-tenant admin systems...
- 🧠 **RAG CLI Chatbot** — Personal knowledge assistant...
`,
  "Connect": `## 🌐 Connect With Me

- 💼 [Upwork](https://www.upwork.com/freelancers/~01b06ac3f661d2198b)
- 💻 [GitHub](https://github.com/shahab0105)
- 🔗 [LinkedIn](https://linkedin.com/in/shahab0694)
- 📧 shahabuddinirfan@gmail.com
`
};

// const FEATUREDWORK_QUERY = `*[_type == "featuredWork"]{ _id, title, description, tags }`

export default function Portfolio() {
  const [active, setActive] = useState<string>("Hi");
  const [posts, setPosts] = useState<FeaturedWork[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await sanityClient.fetch<FeaturedWork[]>(FEATUREDWORK_QUERY, {});
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="flex h-screen w-full bg-zinc-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-black p-6 space-y-4 border-r border-zinc-800">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`block w-full text-left p-2 rounded-xl transition hover:bg-zinc-800 ${
              active === key ? "bg-zinc-800" : ""
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 p-10 overflow-y-auto prose prose-invert max-w-3xl">
        <ReactMarkdown>{sections[active]}</ReactMarkdown>
        
        {active === "Projects" && (
          <div className="mt-8">
            <h2 className="text-4xl font-bold mb-8">Featured Work</h2>
            {loading ? (
              <p>Loading posts...</p>
            ) : posts.length > 0 ? (
              <ul className="flex flex-col gap-y-4">
                {posts.map((post) => (
                  <li className="hover:underline" key={post._id}>
                    <FeatureWorkCard {...post} />
                  </li>
                ))}
              </ul>
            ) : (
              <p>No posts found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

