import React from "react";

type MicroFrontendProps = {
  // using `interface` is also ok
  name: string;
  host: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  history: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  window: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  document: any;
};

class MicroFrontend extends React.Component<MicroFrontendProps> {
  componentDidMount() {
    const { name, document } = this.props;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const browserWindow: any = window;

    // set window with dummy data
    if (typeof browserWindow[`render${name}`] === "undefined") {
      browserWindow[`render${name}`] = () => {};
    }

    const scriptId = `micro-frontend-script-${name}`;
    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    const aboutAssets = ["http://localhost:4000/assets/index-dZA7QN7T.js"];

    aboutAssets.forEach((item) => {
      const script = document.createElement("script");
      script.id = scriptId;
      script.crossOrigin = "";
      script.src = item;
      script.onload = this.renderMicroFrontend;
      document.head.appendChild(script);
    });

    // ======================
    // real implementation
    // fetch("http://localhost:4000/client-manifest.json")
    //   .then((res) => res.json())
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   .then((manifests: Record<string, any>) => {
    //     const keys = Object.keys(manifests);

    //     keys.forEach((key: string) => {
    //       const fileLoad: string = manifests[key].file;

    //       console.log("manifest");
    //       console.log(fileLoad);
    //       console.log("manifest");

    //       if (!fileLoad.includes(".css")) {
    //         const script = document.createElement("script");
    //         script.id = scriptId;
    //         script.crossOrigin = "";
    //         script.src = `http://localhost:4000/${fileLoad}`;
    //         script.onload = this.renderMicroFrontend;
    //         document.head.appendChild(script);
    //       }
    //     });
    //   });
    // ======================

    // ======================
    // fetch if proxy micro service
    // fetch("http://localhost:4000/about")
    //   .then((resp) => resp.text())
    //   .then((body) => console.log(body));
  }

  componentWillUnmount() {
    const { name, window } = this.props;

    console.log("unmount service 2");
    console.log(window[`unmount${name}`]);
    console.log("unmount service 2");

    window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, window, history } = this.props;

    console.log("historyhistory");
    console.log(history);
    console.log(`render${name}`);
    console.log("historyhistory");

    // if (typeof window?.[`render${name}`] === "undefined") {
    // window[`render${name}`](`${name}-container`);
    // }

    window[`render${name}`] && window[`render${name}`](`${name}-container`);

    console.log("window render microservice");
    console.log(window);
    console.log("window render microservice");
  };

  render() {
    const { name } = this.props;

    return <main id={`${name}-container`} />;
  }
}

export default MicroFrontend;
