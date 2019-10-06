import React, { Fragment } from 'react'
import Head from 'next/head'
import App from 'next/app'
import Src from 'src'
// import getConfig from 'next/config';
// import config, { getRoutes } from 'clik/configs'
// import actions from 'clik/actions'
// import { ActStore } from 'actstore'
// import { ServiceWorker, Firebase } from 'clik/hooks'

// import '@fortawesome/fontawesome-svg-core/styles.css';
// import 'clik/icons';
import '../static/style.css'

// const routes = getRoutes();
// const { publicRuntimeConfig } = getConfig();
// <ActStore init={init} initialState={{ ready: true }} config={config} router={router} actions={actions} name="App" />
// <ServiceWorker />

export default class extends App {
	render() {
		const { Component, pageProps, router = {}, init } = this.props;
		return (
      <Fragment>
				<Head>
          <title>Unisi - MVP projects</title>
        </Head>
				<main className="prim:3672f8 sec:b01eff txt:747482 dp:flx jc:c bg:FBFBFB">
			  	<Component {...pageProps} init={init} />
				</main>
      </Fragment>
		);
	}

	static async getInitialProps({ Component, router, ctx }) {
		const pageProps = Component.getInitialProps && await Component.getInitialProps(ctx) || {};
		const { asPath } = ctx;
		// const { version, env } = publicRuntimeConfig || {};
		const { route, query } = router;
		return { pageProps, route, query, asPath, init: { }, };
	}
}
