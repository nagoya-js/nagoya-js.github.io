import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';
import Section from './components/section/section.jsx';
import LinkCard from './components/link-card/link-card.jsx';

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
        <Section title="Nagoya.jsとは"
          text="Nagoya.js (なごやじぇいえす) は名古屋を中心に活動する JavaScript ユーザーのコミュニティです。
          勉強会を定期的に開催しています。
          JavaScript に興味があればどなたでも歓迎いたします。" />
          <Section title="次のイベント" text="">
            <LinkCard
              src="https://dzpp79ucibp5a.cloudfront.net/assets/doorkeeper_group_normal-125b448b722fa8c158516cf4b86aafda26b442af55a001418b0eb2acf7117961.gif"
              title="Nagoya.js #1"
              text="名古屋のフロントエンドの仲間を増やすためのJavaScript勉強会です。"
              href="https://nagoya-js.doorkeeper.jp/events/54989"
            />
          </Section>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      let particles = 100;
      if(window.innerWidth <= 767){
        particles = 30;
      }
      Particles.init({
        selector: '#myCanvas',
        color: '#323330',
        connectParticles: true,
        minDistance: 140,
        maxParticles: particles
      });
    },1000);
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
