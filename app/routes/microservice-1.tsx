// import { useLocation } from "@remix-run/react";
import MicroFrontend from "~/components/Microfrontend/microfrontend";

export default function Index() {
  const windowBrowser = typeof window !== "undefined" ? window : null;
  const documentBrowser = typeof document !== "undefined" ? document : null;
  const browserHistory = typeof history !== "undefined" ? history : null;
  // const path = useLocation();
  return (
    <MicroFrontend
      history={browserHistory}
      host={"http://localhost:4000/"}
      name="mf1"
      window={windowBrowser}
      document={documentBrowser}
    />
  );
}
