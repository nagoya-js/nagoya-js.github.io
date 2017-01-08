import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';
import Section from './components/section/section.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.main}>
          <div className={styles.outer}>
            <h1 className={styles.inner}>
              Nagoya.js
            </h1>
          </div>
          <canvas id="myCanvas" className={styles.myCanvas}></canvas>
        </div>
        <Section title="Nagoya.jsとは" text="Gotanda.js (ごたじぇー) は五反田を中心に活動する JavaScript ユーザーのコミュニティです。 イベント(勉強会)を定期的に開催したり、Slack で JavaScript に関する雑談をしていたりします。 五反田近辺の方に限らず、JavaScript に興味があればどなたでも歓迎いたします。"></Section>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      Particles.init({
        selector: '#myCanvas',
        color: '#323330',
        connectParticles: true,
        minDistance: 140,
      });
    },1000);
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
