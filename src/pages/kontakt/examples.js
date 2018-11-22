import React from "react";
import Link from "gatsby-link";
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Chcesz do mnie napisać?</h1>
              <p>
                Jeżeli chcesz wysłać wiadomość albo przesłać fajny podkład, skorzystaj z poniższych linków:
              </p>
              <ul>
                <li><Link to="/kontakt">Formularz kontaktowy</Link></li>
                <li><Link to="/kontakt/file-upload/">Formularz do przesłania podkładu *.KNF</Link></li>
              </ul>
              <!--
              <h2>Troubleshooting</h2>
              <h3>Forms stop working after upgrading to Gatsby v2</h3>
              <p>This can be caused by the offline-plugin. <a href="https://github.com/gatsbyjs/gatsby/issues/7997#issuecomment-419749232">Workaround</a> is to use <code>?no-cache=1</code> in the POST url to prevent the service worker from handling form submissions</p>
              -->
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
