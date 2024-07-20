import React from "react";

type MicroFrontendProps = {
  // using `interface` is also ok
  name: string;
  host: string;
  manifest: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  history: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  window: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  document: any;
};

class MicroFrontend extends React.Component<MicroFrontendProps> {
  componentDidMount() {
    const { host, manifest, name, document } = this.props;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const browserWindow: any = window;

    // set window with dummy data
    if (typeof browserWindow[`render${name}`] === "undefined") {
      browserWindow[`render${name}`] = () => {};
    }

    const scriptId = `terpusat-mfcrpt-${name}`;
    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    // real implementation
    fetch(`${host}${manifest}`)
      .then((res) => res.json())
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((manifests: Record<string, any>) => {
        const keys = Object.keys(manifests);

        keys.forEach((key: string) => {
          const fileLoad: string = manifests[key].file;

          if (fileLoad.includes(".js")) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.crossOrigin = "";
            script.src = `${host}/${fileLoad}`;
            script.onload = this.renderMicroFrontend;
            document.head.appendChild(script);
          }
        });
      });
  }

  componentWillUnmount() {
    const { name, window } = this.props;

    window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, window } = this.props;

    window[`render${name}`] && window[`render${name}`](`${name}-container`);
  };

  render() {
    const { name } = this.props;

    return <main id={`${name}-container`} />;
  }
}

export default MicroFrontend;
