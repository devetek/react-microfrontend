import MicroFrontend from "~/components/Microfrontend/microfrontend";

// testing for vite
export default function Index() {
  const windowBrowser = typeof window !== "undefined" ? window : null;
  const documentBrowser = typeof document !== "undefined" ? document : null;
  const browserHistory = typeof history !== "undefined" ? history : null;

  return (
    <MicroFrontend
      history={browserHistory}
      host={"http://localhost:4000"}
      manifest={"/manifest.json"}
      name="mf2"
      window={windowBrowser}
      document={documentBrowser}
    />
  );
}
