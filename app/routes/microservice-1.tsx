import MicroFrontend from "~/components/Microfrontend/microfrontend";

// testing for remix
export default function Index() {
  const windowBrowser = typeof window !== "undefined" ? window : null;
  const documentBrowser = typeof document !== "undefined" ? document : null;
  const browserHistory = typeof history !== "undefined" ? history : null;

  return (
    <MicroFrontend
      history={browserHistory}
      host={"http://localhost:5000"}
      manifest={"/client-manifest.json"}
      name="mf1"
      window={windowBrowser}
      document={documentBrowser}
    />
  );
}
