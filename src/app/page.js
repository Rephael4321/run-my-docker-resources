export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-16 text-center">
        Run My Docker Junithon Project 💪
      </h1>
      <h2 className="text-2xl font-bold mb-4">Links</h2>
      <ul className="space-y-4 mb-8">
        <li className="bg-white shadow p-4 rounded-lg">
          <p className="font-medium mb-1">Run My Docker API source code:</p>
          <a
            href="https://github.com/NatanGer97/runmydocker-back"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline break-words"
          >
            https://github.com/NatanGer97/runmydocker-back
          </a>
        </li>
        <li className="bg-white shadow p-4 rounded-lg">
          <p className="font-medium mb-1">Junithon excel table</p>
          <a
            href="https://docs.google.com/spreadsheets/d/1ZpVP1Q3PFAGNm_R5UMNeasmrc4zCOD9FfjULuw2AoHw/edit?gid=0#gid=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline break-words"
          >
            https://docs.google.com/spreadsheets/d/1ZpVP1Q3PFAGNm_R5UMNeasmrc4zCOD9FfjULuw2AoHw/edit?gid=0#gid=0
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Files</h2>
      <ul className="space-y-4 mb-8">
        <li className="bg-white shadow p-4 rounded-lg">
          <p className="font-medium mb-1">Frontend source code - OLD:</p>
          <a
            href="/run-my-docker-front-feat-local-natan-v3-new.zip"
            download
            className="text-blue-600 hover:underline"
          >
            run-my-docker-front-feat-local-natan-v3-new.zip
          </a>
        </li>
        <li className="bg-white shadow p-4 rounded-lg">
          <p className="font-medium mb-1">Start API instructions:</p>
          <a
            href="/docker-startup.MD"
            className="text-blue-600 hover:underline"
          >
            docker-startup.MD
          </a>
        </li>
        <li className="bg-white shadow p-4 rounded-lg">
          <p className="font-medium mb-1">Docker Compose YAML:</p>
          <a
            href="/docker-compose.yaml"
            className="text-blue-600 hover:underline"
          >
            docker-compose.yaml
          </a>
        </li>
        <li className="bg-white shadow p-4 rounded-lg">
          <p className="font-medium mb-1">Install Docker & Docker Compose:</p>
          <a
            href="/docker-compose.yaml"
            className="text-blue-600 hover:underline"
          >
            install-docker-docker-compose.sh
          </a>
        </li>
        <li className="bg-white shadow p-4 rounded-lg">
          <p className="font-medium mb-1">Get Limited Logs Lines Per Image:</p>
          <a
            href="/docker-compose.yaml"
            className="text-blue-600 hover:underline"
          >
            get-limited-logs-lines-per-image.sh
          </a>
        </li>
        <li className="bg-white shadow p-4 rounded-lg">
          <p className="font-medium mb-1">Helpful Ubuntu Commands:</p>
          <a
            href="/docker-compose.yaml"
            className="text-blue-600 hover:underline"
          >
            config.sh
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Emails</h2>
      <ul className="space-y-4 mb-8">
        <li className="bg-white shadow p-4 rounded-lg">
          <p>Rephael Sintes - Backend Developer</p>
          <p className="text-blue-600">rephael4321@gmail.com</p>
        </li>
        <li className="bg-white shadow p-4 rounded-lg">
          <p>Natan Gershbein - Backend Developer & Project Mentor</p>
          <p className="text-blue-600">natanger97@gmail.com</p>
        </li>
        <li className="bg-white shadow p-4 rounded-lg">
          <p>Amit Persky - Backend Developer</p>
          <p className="text-blue-600">amitnicetomeet@gmail.com</p>
        </li>
        <li className="bg-white shadow p-4 rounded-lg">
          <p>Ella Or-Ya Hillel - Backend Developer</p>
          <p className="text-blue-600">eaorya@gmail.com</p>
        </li>
        <li className="bg-white shadow p-4 rounded-lg">
          <p>Mari - UX / UI</p>
          <p className="text-blue-600">mari@m-product.design</p>
        </li>
      </ul>
    </div>
  );
}
