import React from 'react';

import i18n from 'universal/locales';

export default function StyleguidePage() {
  // const englishText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.';
  // const japaneseText = 'あなたは場合ことにそうした関係家というもののところが申し上げだっない。多分先刻を経験者は至極その説明たあっでもに用いていたがも説明知れなうて、少々にも行っますですうた。空虚で思ったものはもう当時にいくらなけれたた。どうも向さんへ準備尻全く見当にするまい正義わが騒ぎどこか矛盾をという不衰弱たでないないから、この以前はこちらか思い西洋に解るから、張さんのので金力の何がどうもお赴任としよてあなた径路にご観念がいうようにもしお講演を考えだないと、けっして依然として影響でしたばいですのをしずです。';
  return (
    <section className="page styleguide-page">
      <section className="page-content">
        <h1>Styleguide for Reaction</h1>
        <section>
          <h2>CSS design</h2>
          <ul>
            <li>
              {i18n.t('styleguide.cssDesign.context')}
              <br/>
              {i18n.t('styleguide.cssDesign.contextDescription')}
            </li>
            <li>
              {i18n.t('styleguide.cssDesign.layout')}
              <br/>
              {i18n.t('styleguide.cssDesign.layoutDescription')}
            </li>
            <li>
              {i18n.t('styleguide.cssDesign.skin')}
              <br/>
              {i18n.t('styleguide.cssDesign.skinDescription')}
            </li>
            <li>
              {i18n.t('styleguide.cssDesign.structure')}
              <br/>
              {i18n.t('styleguide.cssDesign.structureDescription')}
            </li>
          </ul>
        </section>
        <section>
          <h2>Sizing Rules</h2>
          <ul>
            <li>{i18n.t('styleguide.sizingRules.size')}</li>
            <li>{i18n.t('styleguide.sizingRules.margin')}</li>
            <li>{i18n.t('styleguide.sizingRules.padding')}</li>
            <li>{i18n.t('styleguide.sizingRules.radius')}</li>
          </ul>
        </section>
        <section>
          <h2>Colors</h2>
          <ul>
            <li>Primary: #fff - #fff - #fff</li>
            <li>Secondly: #fff - #fff - #fff</li>
            <li>Accent: #fff - #fff - #fff</li>
            <li>Gray: #fff - #fff - #fff</li>
          </ul>
        </section>
        <section>
          <h2>User Interface Design</h2>
          <section>
            <h3>Rules</h3>
            <ul>
              <li>{i18n.t('styleguide.userInterfaceDesign.rules.depth')}</li>
              <li>{i18n.t('styleguide.userInterfaceDesign.rules.routing')}</li>
            </ul>
          </section>
        </section>
        <hr/>
        <section>
          <h2>Texts</h2>
          <section className="texts-example">
            <h1>Heading 1 / 見出し 1</h1>
            <h2>Heading 2 / 見出し 2</h2>
            <h3>Heading 3 / 見出し 3</h3>
            <h4>Heading 4 / 見出し 4</h4>
            <h5>Heading 5 / 見出し 5</h5>
            <h6>Heading 6 / 見出し 6</h6>
            <p>Text / テキスト</p>
            <div>Block text / ブロックテキスト</div>
            <small>Small text / スモールテキスト</small>
          </section>
        </section>
        <section>
          <section>
            <h2>Buttons</h2>
            <h3>Pattarns</h3>
            <ul>
              <li>Floatin button: command controll</li>
              <li>Flat button: query controll</li>
              <li>Icon button: command controll</li>
            </ul>
            <h3>Rules</h3>
            <ul>
              <li>Use verb for label.</li>
              <li>Minimum size 44px * 44px.</li>
              <li>Use upper case.</li>
              <li>There are 2 size. inline or spread.</li>
            </ul>
          </section>
          <section>
            <h2>Links</h2>
            <h3>Rules</h3>
            <ul>
              <li>Use camel case.</li>
            </ul>
          </section>
          <section>
            <h2>Tabs</h2>
            <h3>Rules</h3>
            <ul>
              <li>Use camel case or icon.</li>
            </ul>
          </section>
          <section>
            <h2>Modals</h2>
            <h3>Rules</h3>
            <ul>
              <li>Use it to keep user controll context.</li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
}
