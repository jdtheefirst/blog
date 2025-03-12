import { Metadata } from "next";
import Container from "../_components/container";

export const metadata: Metadata = {
  title: "Samma Martial Arts",
  description:
    "Samma is a modern martial art that blends striking, grappling, and self-defense techniques into a structured system",
  openGraph: {
    type: "website",
    url: "https://samma.worldsamma.org",
    title: "Samma Martial Arts",
    description:
      "Samma is a modern martial art that blends striking, grappling, and self-defense techniques into a structured system",
    images: [{ url: "/og-image.png" }],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: "https://samma.worldsamma.org",
      name: "Samma Martial Arts",
      publisher: {
        "@type": "Organization",
        name: "Authorized personnel",
        logo: {
          "@type": "ImageObject",
          url: "/logo.png",
        },
      },
    }),
  },
};

export default function AboutPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <Container>
        <article className="bg-white shadow-lg rounded-lg p-8 md:p-12 lg:p-16 mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
            Samma Martial Arts
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Samma is a modern martial art that blends striking, grappling, and
              self-defense techniques into a structured system. Developed for
              both competition and practical application, Samma emphasizes
              efficiency, adaptability, and mental discipline. Unlike
              traditional martial arts that focus on rigid techniques, Samma
              evolves with combat trends, integrating elements from various
              fighting styles to create a comprehensive martial art.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              History of Samma
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Samma originated as a hybrid fighting system designed to address
              the limitations of singular martial arts styles. Drawing influence
              from striking arts like Muay Thai and Karate, grappling arts like
              Judo and Brazilian Jiu-Jitsu, and self-defense techniques from
              Krav Maga, Samma was formulated to be practical, adaptable, and
              effective for both sport and real-world scenarios.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              The system was formalized under the World Samma Federation (WSF),
              which established structured training programs, ranking criteria,
              and competitive formats. Today, Samma continues to evolve as
              practitioners refine techniques and test them in live competition.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Techniques & Fighting Styles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  1. Striking Techniques
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Punches – Jab, Cross, Hook, Uppercut</li>
                  <li>Elbow Strikes – Horizontal, Downward, Spinning</li>
                  <li>Kicks – Front Kick, Roundhouse, Side Kick, Axe Kick</li>
                  <li>Knee Strikes – Clinch Knees, Jumping Knees</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  2. Grappling & Throws
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Takedowns – Single-leg, Double-leg, Hip Toss</li>
                  <li>Sweeps – Leg Sweep, Foot Trap</li>
                  <li>Joint Locks – Armbar, Kimura, Guillotine Choke</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Ranking System & Belt Colors
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-100 rounded-lg">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Belt
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Level
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      White Belt
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Beginner (Basic Techniques, Stance, and Footwork)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Yellow Belt
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Intermediate (Introduction to Grappling and Counters)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Green Belt
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Advanced (Combination Techniques, Sparring)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Blue Belt
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Proficient (Advanced Grappling, Competitive Strategies)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Red Belt
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Expert (Coaching and Advanced Combat Tactics)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Black Belt
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Mastery Level (Full Combat Application and Instruction)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Philosophy & Principles
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Efficiency – Every movement should serve a purpose and maximize
                effectiveness.
              </li>
              <li>
                Adaptability – A fighter should be able to transition between
                striking, grappling, and defense fluidly.
              </li>
              <li>
                Mental Discipline – Training the mind is just as important as
                training the body.
              </li>
              <li>
                Respect & Honor – Practitioners must uphold the martial art’s
                integrity inside and outside of combat.
              </li>
              <li>
                Self-Improvement – Samma is not just about fighting; it’s about
                continuous growth in all aspects of life.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Samma vs. Other Martial Arts
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                      Martial Art
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                      Strengths
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                      Weaknesses
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                      Karate
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Strong striking, disciplined training
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Limited grappling
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                      Judo
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Excellent throws, control techniques
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Limited striking
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                      Muay Thai
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Devastating clinch, powerful kicks
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Weak ground game
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                      BJJ
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      High-level ground submissions
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      No striking
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                      Samma
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Well-rounded, adaptable, combines striking and grappling
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Still developing global recognition
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed mt-6">
              Samma offers a balanced approach, making it highly effective in
              modern combat sports and self-defense situations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Samma is an evolving martial art that integrates the best elements
              from multiple disciplines into a unified system. Whether practiced
              for self-defense, competition, or personal development, Samma
              offers a well-rounded approach to martial arts that continues to
              grow in popularity worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              For more information, visit{" "}
              <a
                href="https://worldsamma.org"
                className="text-blue-500 hover:underline"
              >
                WorldSamma.org
              </a>
              .
            </p>
          </section>
        </article>
      </Container>
    </main>
  );
}
