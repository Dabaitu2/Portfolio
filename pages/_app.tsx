import React from 'react';
import App from 'next/app';
import { useCheckWebP } from '../utils/checkWebP';

class MyApp extends App {
  componentDidMount() {
    const { isWebp, autoWebP } = useCheckWebP();
    Reflect.set(Window.prototype, 'isWebP', isWebp);
    Reflect.set(Window.prototype, 'autoWebP', autoWebP);
    console.log(Window);
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
