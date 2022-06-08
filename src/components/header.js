import m from 'mithril';

const header = {
  view: () => {
    return m('header',
      {
        class: 'mdl-layout__header',
      },
      [
        m('div',
          {
            class: 'mdl-layout__header-row',
          },
          [
            m('span',
              {
                class: 'mdl-layout-title',
                style: 'margin-right:20px;',
              },
              'One-Word'
            ),
            m('span', {
              style: 'width:90%;',
            }),
          ]
        ),
      ]
    );
  },
};

export default header;
