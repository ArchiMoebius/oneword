import m from 'mithril';

import OneWord from './oneword';

const main = {
  view: () => {
    return m(
      'div.main',
      {
        class: 'mdl-layout__content',
      },
      [
        m(
          'div',
          { class: 'canvas-container mdl-grid', style: 'max-width: 638px; ' },
          [
            m('canvas', { id: 'oneword', width: '640', height: '100'}),
            m('div', { style: 'width: 100%; height: 30px; margin-top: 8px;' }, [
              m('input', {
                type: 'button',
                name: 'replay',
                id: 'inputreplay',
                value: 'Replay',
                style: 'margin-right:8px;',
                onclick: function () {
                  OneWord.replay();
                },
              }),
              m('input', {
                type: 'number',
                name: 'speed',
                id: 'inputspeed',
                style: 'margin-right:8px;',
                value: OneWord.speed,
                onchange: function () {
                  OneWord.speed = this.value;
                },
              }),
              m(
                'input', {
                  type: 'file',
                  name: 'inputfile',
                  id: 'inputfile',
                  onchange: function() {
                    const fr=new FileReader();

                    fr.onload=function(){
                      const words = fr.result.replace('\n', ' ').split(
                        /[\s]/g
                      );
                      OneWord.render('oneword', words);
                    };
                      
                    fr.readAsText(this.files[0]);
                  },
                }
              ),
            ]),
          ]
        ),
      ]
    );
  },
};

export default main;

// document.getElementById('inputfile')
// .addEventListener('change', function() {

// var fr=new FileReader();
// fr.onload=function(){
//     document.getElementById('output')
//             .textContent=fr.result;
// }

// fr.readAsText(this.files[0]);
// })
