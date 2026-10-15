import Link from "next/link";
import PageHead from "./components/PageHead";

const NotFound = () => (
  <PageHead title="Page not found" lede="That page doesn't exist or has moved.">
    <div className="actions">
      <Link className="btn btn-default" href="/">
        Go home
      </Link>
      <Link className="btn btn-outline" href="/projects">
        See projects
      </Link>
    </div>
  </PageHead>
);

export default NotFound;
