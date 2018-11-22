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
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
