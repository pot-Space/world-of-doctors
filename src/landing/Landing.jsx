import React, { useState } from "react";
import Modal from "../modal/Modal";
import './landing.scss';

import lines from '../resources/img/lines-group.png';
import line from '../resources/img/line.png';
import iconGrow from '../resources/img/icon-grow.png';
import iconUser from '../resources/img/icon-user.png';
import inhaler from '../resources/img/inhaler.png';
import table from '../resources/img/table.png';
import heart from '../resources/img/heart.png';
import heartattack from '../resources/img/heartattack.png';
import bladder from '../resources/img/bladder.png';


const App = () => {
  const [modalActive, setModalActive] = useState(false);
  let [child, setChild] = useState(false);


  function handleClick(e) {
    setModalActive(true);

    if (e.target.value === 'btn-sf') {
      setChild(
        <>
          <div>
            <p>
              В десятилетнем исследовании <b>«Генетическая эпидемиология ХОБЛ» (COPDGene)</b> среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено <b>преобладание женщин (66%)</b>, а в возрасте 60-64 лет количество женщин и мужчин.
            </p>

            <p>
              Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути курящих женщин имеют более <b>высокий процент площади стенок</b>, но меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.
            </p>
          </div>

          <img src={table} alt="table" />
        </>
      );
    } else if (e.target.value === 'btn-ss') {
      setChild(
        <>
          <div>
            <p>
              <b>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов<sup>1</sup>.</b>
            </p>

            <p>
              В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.<sup>2</sup> Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.
            </p>
          </div>

          <h4>Пятилетняя выживаемость пациентов</h4>

          <div className="illness-block">
            <div className="illness">
              <img className="illness__img" src={heart} alt="heart" />
              <h2 className="illness__header">45,5%</h2>
              <div className="illness__description">пациентов с <b>сердечной недостаточностью</b><sup>1</sup></div>
              <div className="illness__text">Популяционное когортное исследование (N=385)</div>
            </div>

            <div className="illness">
              <img className="illness__img" src={heartattack} alt="heartattack" />
              <h2 className="illness__header">55,3%</h2>
              <div className="illness__description">пациентов с <b>инфарктом миокарда</b><sup>1</sup></div>
              <div className="illness__text">Апостериорный анализ когортного исследования (N=2887)</div>
            </div>

            <div className="illness">
              <img className="illness__img" src={bladder} alt="bladder" />
              <h2 className="illness__header">50,5%</h2>
              <div className="illness__description">пациентов с <b>раком<br />мочевого пузыря</b></div>
              <div className="illness__text">Исследование Национальной статистической службы (N=42642)</div>
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <div className="wrapper" >
      <img src={lines} alt="lines-decoration" />

      <main className="main-wrapper">
        <section className="preview-block">
          <img className="section-line " src={line} alt="line-decoration" />
          <h1 className="section-text">ХОБЛ: мифы и реальность</h1>

          <div className="section-item">
            <div className="item__img">
              <img src={iconUser} alt="icon user" />
            </div>
            <div className="item__header">
              ХОБЛ болеют <b>преимущественно мужчины?</b>
            </div>
            <div className="item__text">
              В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...
            </div>
            <button className="popup-btn" onClick={handleClick} value={"btn-sf"}></button>
          </div>

          <div className="section-item">
            <div className="item__img">
              <img src={iconGrow} alt="icon grow" />
            </div>
            <div className="item__header">
              <b>Опасно</b> не наличие заболевания, а обострения?
            </div>
            <div className="item__text">
              Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...
            </div>

            <button className="popup-btn revers" onClick={handleClick} value={"btn-ss"}></button>
          </div>
        </section>


        <section className="core-block">
          <img className="section-line " src={line} alt="line-decoration" />
          <h1 className="section-text">Терапия ХОБЛ: что в фокусе?</h1>

          <div className="attention">
            Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
          </div>

          <h4>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<sup>1</sup>:</h4>

          <div className="strategy-diagram">
            <div className="strategy-diagram__top">
              <div className="item">
                <div className="item__img">
                  <img src={inhaler} alt="inhaler" />
                  <span>1</span>
                </div>
                <div className="item__header">Ингаляционный <b>антихолинергик</b></div>
                <div className="item__text">
                  Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов<sup>1</sup>
                </div>
              </div>

              <div className="item">
                <div className="item__img">
                  <img src={inhaler} alt="inhaler" />
                  <span>2</span>
                </div>
                <div className="item__header">Ингаляционный <b>β2&nbsp;-&nbsp;агонист</b></div>
                <div className="item__text">
                  Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции
                </div>
              </div>

              <div className="item">
                <div className="item__img">
                  <img src={inhaler} alt="inhaler" />
                  <span>3</span>
                </div>
                <div className="item__header">Ингаляционный <b>глюко<wbr />кортико<wbr />стероид</b> (ИГКС)</div>
                <div className="item__text">
                  Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей
                </div>
              </div>
            </div>

            <div className="strategy-diagram__arrows">
              <div className="item"></div>
              <div className="item"></div>
            </div>

            <div className="strategy-diagram__bottom">
              <div className="item">
                Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия; Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и усиливает друг друга<sup>1</sup>.
              </div>
              <div className="item">
                Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в течение 1 года/1 тяжелое обострение, потребовавшее госпитализации) рекомендуется назначение ИГКС в дополнение к ДДБА; Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную летальность по сравнению с пациентами, принимавшими только ДДБА (8,1% vs 13,2%)<sup>1</sup>.
              </div>
            </div>
          </div>
        </section>

        <Modal active={modalActive} setActive={setModalActive}>
          {child}
        </Modal>
      </main>
    </div>
  )
}

export default App;