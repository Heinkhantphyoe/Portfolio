import spring from "../assets/images/spring.jpg";
import spring_microservice from "../assets/images/spring-microservice.jpg";
import python_3 from "../assets/images/python-3-programming.jpg";
import { ExternalLink, ShieldCheck } from "lucide-react";

const CertificatesBook = () => {
  const certificates = [
    {
      id: 1,
      title: "Spring Framework Certificate",
      verifyUrl: "https://www.udemy.com/certificate/UC-b93b3ff1-d83e-45c8-9d54-7f36deb56c77/",
      path: spring
    },
    {
      id: 2,
      title: "Spring Microservices Certificate",
      verifyUrl: "https://www.udemy.com/certificate/UC-a37b617e-2314-4a70-9aa5-a4f22d2c4807/",
      path: spring_microservice
    },
    {
      id: 3,
      title: "Python Programming Certificate",
      verifyUrl: "https://coursera.org/share/2e8dba3f0dc20729a784057754ceb92f",
      path: python_3
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert) => (
          <article
            key={cert.id}
            className="bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-lg p-4 shadow-sm"
          >
            <div className="w-full h-44 rounded-md overflow-hidden border border-gray-200 dark:border-gray-800">
              <img
                src={cert.path}
                alt={cert.title}
                className="w-full h-full object-contain bg-gray-50 dark:bg-gray-950"
              />
            </div>
            <div className="mt-4 space-y-2">
              <h4 className="text-lg font-semibold">{cert.title}</h4>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-3 py-2 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition"
              >
                <ShieldCheck size={16} />
                <span>Verify</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CertificatesBook;
